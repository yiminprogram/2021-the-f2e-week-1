import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

const Container = styled.div`
  .swiper-container {
    height: 550px;
  }

  .swiper-wrapper {
    height: 93%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

type TImage = {
  picture: string;
};

const SwiperImage = ({ picture }: TImage) => {
  return (
    <Container>
      <Swiper pagination>
        <SwiperSlide>
          <img src={picture} alt="error" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SwiperImage;
