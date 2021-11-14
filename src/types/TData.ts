export enum EType {
  EMPTY = '',
  ATTRACTION = 'ATTRACTION',
  ACTIVITY = 'ACTIVITY',
  FOOD = 'FOOD',
  HOTEL = 'HOTEL',
}

export type TData = {
  id: string;
  name: string;
  description: string;
  picture: string;
  address: string;
  time: string;
  phone: string;
  price: string;
  type: EType;
};

export type TRemote = {
  ID: string;
  Name: string;
  Description: string;
  Address: string;
  Picture: {
    PictureUrl1: string;
  };
  Phone: string;
  OpenTime: string;
  TicketInfo: string;
};

export const initialData: TData = {
  id: '',
  name: '',
  description: '',
  picture: '',
  address: '',
  time: '',
  phone: '',
  price: '',
  type: EType.EMPTY,
};
