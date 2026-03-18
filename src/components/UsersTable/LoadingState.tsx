import * as S from './UsersTable.styles';

const LoadingState = () => {
  return (
    <S.LoadingContainer>
      <S.Spinner />
      <S.LoadingText>Загрузка данных...</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default LoadingState;