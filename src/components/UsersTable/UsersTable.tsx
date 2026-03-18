import { useEffect, useState, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchAllData } from '../../store/slices/thunks/dataSliceThunk';
import * as S from './UsersTable.styles';
import type { ExpandedState } from '../../types/usersTable.types';
import UserCard from './UsersCard';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.data);
  const [expandedUsers, setExpandedUsers] = useState<ExpandedState>({});
  const [expandedProjects, setExpandedProjects] = useState<ExpandedState>({});

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  const toggleUser = useCallback((userId: number): void => {
    setExpandedUsers(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  }, []);

  const toggleProject = useCallback((userId: number, projectName: string): void => {
    const key = `${userId}-${projectName}`;
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  const usersList = useMemo(() => {
    return users.map(user => (
      <UserCard
        key={user.id}
        user={user}
        isExpanded={expandedUsers[user.id]}
        expandedProjects={expandedProjects}
        onToggleUser={toggleUser}
        onToggleProject={toggleProject}
      />
    ));
  }, [users, expandedUsers, expandedProjects, toggleUser, toggleProject]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={() => dispatch(fetchAllData())} />;
  }

  return (
    <S.Container>
      <S.Title>Список пользователей с задачами</S.Title>
      <S.UsersGrid>
        {usersList}
      </S.UsersGrid>
    </S.Container>
  );
};

export default UsersTable;