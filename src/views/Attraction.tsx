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

const Attraction = () => {
  const [attraction, setAttraction] = useState<TData[]>([]);
  const [activitie, setActivitie] = useState<TData[]>([]);
  useEffect(() => {
    getTopData(EType.ATTRACTION).then((res) => setAttraction(res));
    getTopData(EType.ACTIVITY).then((res) => setActivitie(res));
  }, []);
  return (
    <Page>
      <SearchTitle image="attraction" />
      <SwiperCard title="推薦景點" icon="triangle" data={attraction} />
      <SwiperCard title="推薦活動" icon="triangle" data={activitie} />
    </Page>
  );
};

export default Attraction;
