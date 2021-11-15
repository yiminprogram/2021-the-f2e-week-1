import { EType } from '../types';

export const getType = (type: EType) => {
  switch (type) {
    case EType.ACTIVITY:
      return '活動';
    case EType.ATTRACTION:
      return '景觀';
    case EType.FOOD:
      return '美食';
    case EType.HOTEL:
      return '住宿';
    default:
      return '';
  }
};
