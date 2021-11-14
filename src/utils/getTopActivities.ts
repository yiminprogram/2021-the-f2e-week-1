import axios from 'axios';
import { TData, TRemote, EType } from '../types';
import { getAuthorizationHeader } from './getAuthorizationHeader';

export const getActivities = async () => {
  const url =
    'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null&$top=4&$format=JSON';

  const data: TData[] | [] = await axios(url, {
    headers: getAuthorizationHeader(),
  })
    .then(({ data }) => {
      return data.map(
        (ele: TRemote): TData => ({
          id: ele.ID,
          name: ele.Name,
          address: ele.Address,
          picture: ele.Picture.PictureUrl1,
          description: ele.Description,
          phone: ele.Phone,
          price: ele.TicketInfo,
          time: ele.OpenTime,
          type: EType.ACTIVITY,
        }),
      );
    })
    .catch(() => []);

  return data;
};
