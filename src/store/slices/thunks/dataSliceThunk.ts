import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URLS } from '../../../config/api';
import type { 
  Project, 
  User, 
  Task, 
  UserWithEstimates, 
  ProjectEstimate,
  ApiResponse 
} from '../../../types/usersTable.types';

const transformData = (
  users: User[],
  tasks: Task[],
  projects: Project[]
): UserWithEstimates[] => {
  const projectsMap = new Map<number, Project>();
  projects.forEach(project => {
    projectsMap.set(project.id, project);
  });

  return users.map(user => {
    const userTasks = tasks.filter(task => task.responsible_id === user.id);
    
    const projectsMapByUser = new Map<number, ProjectEstimate>();
    
    userTasks.forEach(task => {
      const projectId = task.project_id;
      const project = projectsMap.get(projectId);
      
      if (!projectsMapByUser.has(projectId)) {
        projectsMapByUser.set(projectId, {
          name: project?.name || 'Неизвестный проект',
          total_estimate: 0,
          tasks: []
        });
      }
      
      const projectEstimate = projectsMapByUser.get(projectId)!;
      projectEstimate.tasks.push({
        id: task.id,
        name: task.name,
        estimate: task.estimate
      });
      projectEstimate.total_estimate += task.estimate;
    });

    const projectsEstimates = Array.from(projectsMapByUser.values());
    
    const totalEstimate = projectsEstimates.reduce(
      (sum, project) => sum + project.total_estimate, 
      0
    );

    return {
      id: user.id,
      name: user.name,
      total_estimate: totalEstimate,
      projects_estimates: projectsEstimates
    };
  });
};

export const fetchAllData = createAsyncThunk<
  UserWithEstimates[],
  void,
  { rejectValue: string }
>(
  'data/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const [projectsRes, usersRes, tasksRes] = await Promise.all([
        axios.get<ApiResponse<Project[]>>(API_URLS.projects),
        axios.get<ApiResponse<User[]>>(API_URLS.users),
        axios.get<ApiResponse<Task[]>>(API_URLS.tasks)
      ]);

      const projects = projectsRes.data.data;
      const users = usersRes.data.data;
      const tasks = tasksRes.data.data;

      return transformData(users, tasks, projects);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Произошла неизвестная ошибка');
    }
  }
);