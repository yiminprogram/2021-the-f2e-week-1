import { useState, useEffect } from 'react';
import SearchTitle from '../components/SearchTitle';
import styled from '@emotion/styled';
import ToopCity from '../components/TopCity';
import TopActivity from '../components/TopActivity';
import SwiperCard from '../components/SwiperCard';
import { TData, EType } from '../types';
import { getTopData } from '../utils';

const Page = styled.div`
  position: relative;
  z-index: 0;
  padding-bottom: 6rem;
`;

const Home = () => {
  const [food, setFood] = useState<TData[]>([]);

  useEffect(() => {
    getTopData(EType.FOOD).then((res) => setFood(res));
  }, []);
  return (
    <Page>
      <SearchTitle image="homepage" />
      <ToopCity />
      <TopActivity />
      <SwiperCard title="推薦美食" icon="square" data={food} />
    </Page>
  );
};

export default Home;
