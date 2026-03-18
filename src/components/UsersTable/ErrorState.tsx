import * as S from './UsersTable.styles';

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

const ErrorState = ({ error, onRetry }: ErrorStateProps) => {
  return (
    <S.ErrorContainer>
      <S.ErrorTitle>Ошибка загрузки данных</S.ErrorTitle>
      <S.ErrorMessage>{error}</S.ErrorMessage>
      <S.RetryButton onClick={onRetry}>
        Повторить попытку
      </S.RetryButton>
    </S.ErrorContainer>
  );
};

export default ErrorState;