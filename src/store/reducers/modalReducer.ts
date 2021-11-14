import { TData } from '../../types';
import { TModalState, TModalAction, EActionType } from '../types/TModal';
import { initialData } from '../../types';

const initialState: TModalState = {
  open: false,
  data: initialData,
};

const openModal = (state: TModalState, payload: TData): TModalState => {
  return { open: true, data: payload };
};

const closeModal = (state: TModalState): TModalState => {
  return initialState;
};

export const modalReducer = (
  state: TModalState = initialState,
  action: TModalAction,
) => {
  switch (action.type) {
    case EActionType.OPEN_MODAL:
      return openModal(state, action.payload);
    case EActionType.CLOSE_MODAL:
      return closeModal(state);
    default:
      return state;
  }
};
