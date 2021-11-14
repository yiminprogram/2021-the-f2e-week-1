import { TData } from '../../types';
import { reducers } from '../reducers';

export type TModalState = {
  open: boolean;
  data: TData;
};

export enum EActionType {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

type TOpenModal = {
  type: EActionType.OPEN_MODAL;
  payload: TData;
};

type TCloseModal = {
  type: EActionType.CLOSE_MODAL;
};

export type TModalAction = TOpenModal | TCloseModal;

export type TState = ReturnType<typeof reducers>;
