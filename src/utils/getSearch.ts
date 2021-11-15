import axios from 'axios';
import { TFilter, TData, EType, TRemote } from '../types';
import { getAuthorizationHeader } from './getAuthorizationHeader';

const currentUrl = (type: EType, city: string) => {
  switch (type) {
    case EType.ATTRACTION:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$format=JSON`;
    case EType.FOOD:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${city}?$format=JSON`;
    case EType.ACTIVITY:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${city}?$format=JSON`;
    case EType.HOTEL:
      return `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${city}?$format=JSON`;
    default:
      return '';
  }
};

export const getSearch = async ({ type, city, keyword }: TFilter) => {
  const url = currentUrl(type, city);
  const data: TData[] = await axios(url, {
    headers: getAuthorizationHeader(),
  })
    .then(({ data }) =>
      data.map(
        (ele: TRemote): TData => ({
          id: ele.ID,
          name: ele.Name,
          address: ele.Address,
          picture: ele.Picture.PictureUrl1,
          description: ele.Description,
          phone: ele.Phone,
          price: ele.TicketInfo,
          time: ele.OpenTime,
          type,
        }),
      ),
    )
    .catch(() => []);
  const filterData: TData[] = data
    .filter((ele) => ele.name.includes(keyword))
    .slice(0, 30);
  return filterData;
};
