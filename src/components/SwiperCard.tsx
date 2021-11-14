import { ReactNode } from 'react';
import { Container } from '@mui/material';
import Title from './Title';
import { styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageCard from './ImageCard';
import { TData } from '../types';

const SwiperWrapper = styled('div')(
  ({ theme }) => `
  margin:1rem 0;

 >.swiper-container{
   height:380px;
 } 
.swiper-pagination-bullet-active{
  background-color:${theme.palette.primary.main};
}
`,
);

type TProps = {
  icon: 'square' | 'triangle';
  title: string;
  data: TData[];
};

const SwiperComponent = ({ children }: { children: ReactNode }) => {
  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination
        breakpoints={{
          '600': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '900': {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          '1200': {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          '1536': {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        {children}
      </Swiper>
    </SwiperWrapper>
  );
};

const SwiperCard = ({ icon, title, data }: TProps) => {
  return (
    <Container maxWidth="xl" sx={{ mb: '5rem' }}>
      <Title title={title} icon={icon} />
      <SwiperComponent>
        {data.slice(0, 5).map((ele) => (
          <SwiperSlide key={ele.id}>
            <ImageCard {...ele} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <SwiperComponent>
        {data.slice(5).map((ele) => (
          <SwiperSlide key={ele.id}>
            <ImageCard {...ele} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Container>
  );
};

export default SwiperCard;
