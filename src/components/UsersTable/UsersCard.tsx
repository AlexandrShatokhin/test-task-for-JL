import { useCallback, useMemo, memo } from "react";
import * as S from "./UsersTable.styles";
import type { UserCardProps } from "../../types/usersTable.types";
import ProjectItem from "./ProjectItem";

const UserCard = ({
    user,
    isExpanded,
    expandedProjects,
    onToggleUser,
    onToggleProject,
}: UserCardProps) => {
    const handleToggleUser = useCallback(() => {
        onToggleUser(user.id);
    }, [user.id, onToggleUser]);

    const projectsList = useMemo(() => {
        return user.projects_estimates.map((project) => {
            const projectKey = `${user.id}-${project.name}`;
            return (
                <ProjectItem
                    key={projectKey}
                    project={project}
                    userId={user.id}
                    isExpanded={expandedProjects[projectKey]}
                    onToggle={onToggleProject}
                />
            );
        });
    }, [user.id, user.projects_estimates, expandedProjects, onToggleProject]);

    return (
        <S.UserCard>
            <S.UserHeader onClick={handleToggleUser}>
                <S.UserName>{user.name}</S.UserName>
                <S.UserInfo>
                    <S.TotalEstimate>
                        Общая оценка: {user.total_estimate} ч.
                    </S.TotalEstimate>
                    <S.ExpandIcon $isExpanded={isExpanded}>⬇</S.ExpandIcon>
                </S.UserInfo>
            </S.UserHeader>

            {isExpanded && <S.ProjectsList>{projectsList}</S.ProjectsList>}
        </S.UserCard>
    );
};

const arePropsEqual = (prevProps: UserCardProps, nextProps: UserCardProps) => {
    const isSameUser =
        prevProps.user.id === nextProps.user.id &&
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.total_estimate === nextProps.user.total_estimate;

    const isSameState =
        prevProps.isExpanded === nextProps.isExpanded &&
        prevProps.onToggleUser === nextProps.onToggleUser &&
        prevProps.onToggleProject === nextProps.onToggleProject;

    const prevUserProjects = Object.entries(prevProps.expandedProjects)
        .filter(([key]) => key.startsWith(`${prevProps.user.id}-`))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const nextUserProjects = Object.entries(nextProps.expandedProjects)
        .filter(([key]) => key.startsWith(`${nextProps.user.id}-`))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const areProjectsStateSame =
        JSON.stringify(prevUserProjects) === JSON.stringify(nextUserProjects);

    const areProjectsDataSame =
        JSON.stringify(prevProps.user.projects_estimates) ===
        JSON.stringify(nextProps.user.projects_estimates);

    return (
        isSameUser && isSameState && areProjectsStateSame && areProjectsDataSame
    );
};

export default memo(UserCard, arePropsEqual);
