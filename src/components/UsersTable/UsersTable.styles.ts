import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 32px;
`;

export const UsersGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const UserCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const UserHeader = styled.div`
  padding: 20px;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e0e0e0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const UserName = styled.h3`
  color: #333;
  font-size: 16px;
  margin: 0;
`;

export const TotalEstimate = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
`;

export const ExpandIcon = styled.span<{ $isExpanded: boolean }>`
  color: #667eea;
  font-size: 24px;
  transition: transform 0.3s ease;
  transform: ${props => props.$isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const ProjectsList = styled.div`
  padding: 15px;
  background: #f8f9fa;
`;

export const ProjectItem = styled.div`
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
`;

export const ProjectHeader = styled.div`
  padding: 15px;
  background: #f1f3f5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ProjectName = styled.h4`
  color: #495057;
  font-size: 18px;
  margin: 0;
`;

export const ProjectEstimate = styled.span`
  background: #28a745;
  color: white;
  padding: 3px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
`;

export const TasksList = styled.div`
  padding: 10px;
  background: white;
`;

export const TaskItem = styled.div`
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TaskName = styled.span`
  color: #666;
  font-size: 16px;
`;

export const TaskEstimate = styled.span`
  background: #e9ecef;
  color: #495057;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingText = styled.p`
  color: #666;
  font-size: 16px;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 50px;
  background: white;
  border-radius: 12px;
`;

export const ErrorTitle = styled.h3`
  color: #dc3545;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const RetryButton = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;