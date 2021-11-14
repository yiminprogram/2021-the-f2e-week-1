import { useState, useEffect } from 'react';
import { TData, EType } from '../types';
import styled from '@emotion/styled';
import SearchTitle from '../components/SearchTitle';
import SwiperCard from '../components/SwiperCard';
import { getTopData } from '../utils';

const Page = styled.div`
  position: relative;
  z-index: 0;
  padding-bottom: 6rem;
`;

const FoodHotel = () => {
  const [food, setFood] = useState<TData[]>([]);
  const [hotel, setHotel] = useState<TData[]>([]);
  useEffect(() => {
    getTopData(EType.FOOD).then((res) => setFood(res));
    getTopData(EType.HOTEL).then((res) => setHotel(res));
  }, []);

  return (
    <Page>
      <SearchTitle image="food" />
      <SwiperCard title="推薦美食" icon="square" data={food} />
      <SwiperCard title="推薦住宿" icon="square" data={hotel} />
    </Page>
  );
};

export default FoodHotel;
