import { Dispatch } from 'redux';
import { TModalAction, EActionType } from '../types/TModal';
import { TData } from '../../types';

const openModal = (payload: TData) => {
  return (dispatch: Dispatch<TModalAction>) => {
    dispatch({
      type: EActionType.OPEN_MODAL,
      payload,
    });
  };
};

const closeModal = () => {
  return (dispatch: Dispatch<TModalAction>, payload: TData) => {
    dispatch({
      type: EActionType.CLOSE_MODAL,
      payload,
    });
  };
};

const actions = { openModal, closeModal };

export default actions;
