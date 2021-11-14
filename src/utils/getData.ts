import axios from 'axios';
import { getAuthorizationHeader } from '../utils';
import { EType, TRemote, TData, initialData } from '../types';

const currentUrl = (type: EType, id: string) => {
  switch (type) {
    case EType.ATTRACTION:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ID%20eq%20'${id}'&$format=JSON`;
    case EType.ACTIVITY:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=ID%20eq%20'${id}'&$format=JSON`;
    case EType.FOOD:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=ID%20eq%20'${id}'&$format=JSON`;
    case EType.HOTEL:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=ID%20eq%20'${id}'&$format=JSON`;
    default:
      return '';
  }
};

export const getData = async (type: EType, id: string) => {
  const url = currentUrl(type, id);
  const data: TData = await axios(url, {
    headers: getAuthorizationHeader(),
  })
    .then(({ data }: { data: TRemote[] }) => {
      return {
        id: data[0].ID,
        name: data[0].Name,
        address: data[0].Address,
        picture: data[0].Picture.PictureUrl1,
        description: data[0].Description,
        phone: data[0].Phone,
        price: data[0].TicketInfo,
        time: data[0].OpenTime,
        type,
      };
    })
    .catch(() => initialData);

  return data;
};
