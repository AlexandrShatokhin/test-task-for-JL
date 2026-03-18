import { memo } from 'react';
import * as S from './UsersTable.styles';
import type { TaskItemProps } from '../../types/usersTable.types';

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <S.TaskItem>
      <S.TaskName>{task.name}</S.TaskName>
      <S.TaskEstimate>{task.estimate} ч.</S.TaskEstimate>
    </S.TaskItem>
  );
};

export default memo(TaskItem, (prevProps, nextProps) => {
  return (
    prevProps.task.id === nextProps.task.id &&
    prevProps.task.name === nextProps.task.name &&
    prevProps.task.estimate === nextProps.task.estimate
  );
});