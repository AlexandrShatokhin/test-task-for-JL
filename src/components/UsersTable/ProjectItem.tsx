import { useCallback, useMemo, memo } from 'react';
import * as S from './UsersTable.styles';
import type { ProjectItemProps } from '../../types/usersTable.types';
import TaskItem from './TaskItem';

const ProjectItem = ({ project, userId, isExpanded, onToggle }: ProjectItemProps) => {
  const handleToggle = useCallback(() => {
    onToggle(userId, project.name);
  }, [userId, project.name, onToggle]);

  const tasksList = useMemo(() => {
    return project.tasks.map(task => (
      <TaskItem key={task.id} task={task} />
    ));
  }, [project.tasks]);

  return (
    <S.ProjectItem>
      <S.ProjectHeader onClick={handleToggle}>
        <S.ProjectInfo>
          <S.ProjectName>{project.name}</S.ProjectName>
          <S.ProjectEstimate>
            {project.total_estimate} ч.
          </S.ProjectEstimate>
        </S.ProjectInfo>
        <S.ExpandIcon $isExpanded={isExpanded}>
          ⬇
        </S.ExpandIcon>
      </S.ProjectHeader>

      {isExpanded && (
        <S.TasksList>
          {tasksList}
        </S.TasksList>
      )}
    </S.ProjectItem>
  );
};

const arePropsEqual = (prevProps: ProjectItemProps, nextProps: ProjectItemProps) => {
  return (
    prevProps.project.name === nextProps.project.name &&
    prevProps.project.total_estimate === nextProps.project.total_estimate &&
    prevProps.userId === nextProps.userId &&
    prevProps.isExpanded === nextProps.isExpanded &&
    prevProps.onToggle === nextProps.onToggle &&
    JSON.stringify(prevProps.project.tasks) === JSON.stringify(nextProps.project.tasks)
  );
};

export default memo(ProjectItem, arePropsEqual);