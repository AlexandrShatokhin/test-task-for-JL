import React, { useEffect } from 'react';
import * as S from './AgreementModal.styles';
import { useCountdown } from './hooks/useCountDown';

interface AgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const AgreementModal: React.FC<AgreementModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const { countdown, reset } = useCountdown(5);

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const handleConfirm = () => {
    if (countdown === 0) {
      onConfirm();
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>Согласие с правилами</S.ModalTitle>
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.ModalHeader>

        <S.ModalContent>
          Для данной функции применяются особые правила пользования,
          их необходимо подтвердить, нажмите на кнопку "Подтвердить"
        </S.ModalContent>

        <S.ModalFooter>
          <S.Button variant="secondary" onClick={onClose}>
            Отмена
          </S.Button>
          <S.Button
            variant="primary"
            onClick={handleConfirm}
            disabled={countdown > 0}
          >
            Подтвердить {countdown > 0 && `(${countdown})`}
          </S.Button>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default AgreementModal;