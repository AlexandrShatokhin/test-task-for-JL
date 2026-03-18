export interface Project {
    id: number;
    name: string;
    code: string;
}

export interface User {
    id: number;
    name: string;
}

export interface Task {
    id: number;
    name: string;
    project_id: number;
    estimate: number;
    responsible_id: number | null;
}

export interface ProjectTask {
    id: number;
    name: string;
    estimate: number;
}

export interface ProjectEstimate {
    name: string;
    total_estimate: number;
    tasks: ProjectTask[];
}

export interface UserWithEstimates {
    id: number;
    name: string;
    total_estimate: number;
    projects_estimates: ProjectEstimate[];
}

export interface ApiResponse<T> {
    status: string;
    data: T;
}

export interface ExpandedState {
    [key: string]: boolean;
}

export interface TaskItemProps {
    task: ProjectTask;
}

export interface ProjectItemProps {
    project: ProjectEstimate;
    userId: number;
    isExpanded: boolean;
    onToggle: (userId: number, projectName: string) => void;
}

export interface UserCardProps {
    user: UserWithEstimates;
    isExpanded: boolean;
    expandedProjects: ExpandedState;
    onToggleUser: (userId: number) => void;
    onToggleProject: (userId: number, projectName: string) => void;
}
