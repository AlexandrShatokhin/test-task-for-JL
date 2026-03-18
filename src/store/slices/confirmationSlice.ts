import { createSlice } from '@reduxjs/toolkit';

interface ConfirmationState {
  isOpen: boolean;
  isConfirmed: boolean;
  remainingTime: number;
}

const initialState: ConfirmationState = {
  isOpen: false,
  isConfirmed: false,
  remainingTime: 5,
};

const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    openModal: (state) => {
      if (!state.isConfirmed) {
        state.isOpen = true;
        state.remainingTime = 5;
      }
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.remainingTime = 5;
    },
    confirmAction: (state) => {
      state.isConfirmed = true;
      state.isOpen = false;
      state.remainingTime = 5;
    },
    decrementTime: (state) => {
      if (state.remainingTime > 0) {
        state.remainingTime -= 1;
      }
    },
    resetConfirmation: (state) => {
      state.isConfirmed = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  confirmAction,
  decrementTime,
  resetConfirmation,
} = confirmationSlice.actions;

export default confirmationSlice.reducer;