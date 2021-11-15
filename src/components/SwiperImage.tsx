import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import Image from './Image';

const Container = styled.div`
  .swiper-container {
    height: 550px;
  }

  .swiper-wrapper {
    height: 93%;
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
          <Image src={picture} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SwiperImage;
