import styled from '@emotion/styled';
import { styled as muiStyled } from '@mui/material';
import { Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Room } from '@mui/icons-material';
import Title from './Title';
import data from '../assets/data/top-ciyt.json';
import Image from './Image';

type TStyle = {
  height: string;
};

const ListWrapper = muiStyled('div')(
  ({ theme }) => `
 height:400px;

 >.swiper-container{
   height:400px;
 } 
.swiper-pagination-bullet-active{
  background-color:${theme.palette.primary.main};
}
`,
);

const CityCard = styled.div<TStyle>`
  height: ${(p) => `${p.height}px`};
  margin: 0.5rem;
  padding: 1rem;
  position: relative;
  box-shadow: 0 4px 3px rgba(13, 11, 12, 0.2);
  background-color: #fff;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #0d0b0c;
    opacity: 0.3;
  }
`;

const CityCardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  color: #fff;
`;

const TopCity = () => {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: '60px' }}>
      <Title title="熱門城市" icon="triangle" />
      <ListWrapper>
        <Swiper
          pagination
          spaceBetween={10}
          slidesPerView={1}
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
          {data.map((ele, idx) => {
            if (idx % 3 === 0) {
              return (
                <SwiperSlide key={ele.city}>
                  <CityCard height="350">
                    <ImageContainer>
                      <Image src={ele.picture} />
                    </ImageContainer>
                    <CityCardInfo>
                      <Room fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                      <Typography variant="h1">{ele.city}</Typography>
                    </CityCardInfo>
                  </CityCard>
                </SwiperSlide>
              );
            } else if (idx % 3 === 1) {
              return (
                <SwiperSlide key={ele.city}>
                  <CityCard height="171">
                    <ImageContainer>
                      <Image src={ele.picture} />
                    </ImageContainer>
                    <CityCardInfo>
                      <Room fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                      <Typography variant="h1">{ele.city}</Typography>
                    </CityCardInfo>
                  </CityCard>
                  <CityCard height="171">
                    <ImageContainer>
                      <Image src={data[idx + 1].picture} />
                    </ImageContainer>
                    <CityCardInfo>
                      <Room fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                      <Typography variant="h1">{data[idx + 1].city}</Typography>
                    </CityCardInfo>
                  </CityCard>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
      </ListWrapper>
    </Container>
  );
};

export default TopCity;
