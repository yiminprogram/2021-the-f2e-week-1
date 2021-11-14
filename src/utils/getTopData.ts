import axios from 'axios';
import { getRandomNumber } from './getRandomNumber';
import { TData, TRemote, EType } from '../types';
import { getAuthorizationHeader } from './getAuthorizationHeader';

const FOOD_URL =
  'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null&$top=100&$format=JSON';

const ATTRACTION_URL =
  'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=100&$format=JSON';

const HOTEL_URL =
  'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=Picture%2FPictureUrl1%20ne%20null&$top=100&$format=JSON';

const ACTIVITY_URL =
  'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null&$top=100&$format=JSON';

const currentUrl = (type: EType) => {
  return type === EType.ATTRACTION
    ? ATTRACTION_URL
    : type === EType.FOOD
    ? FOOD_URL
    : type === EType.HOTEL
    ? HOTEL_URL
    : type === EType.ACTIVITY
    ? ACTIVITY_URL
    : '';
};

export const getTopData = async (type: EType) => {
  const url = currentUrl(type);
  const data: TData[] | [] = await axios(url, {
    headers: getAuthorizationHeader(),
  })
    .then(({ data }: { data: TRemote[] }) => {
      return getRandomNumber(0, 99, 10).map(
        (ele): TData => ({
          id: data[ele].ID,
          description: data[ele].Description,
          name: data[ele].Name,
          address: data[ele].Address,
          picture: data[ele].Picture.PictureUrl1,
          phone: data[ele].Phone,
          price: data[ele].TicketInfo,
          time: data[ele].OpenTime,
          type,
        }),
      );
    })
    .catch(() => []);

  return data;
};
