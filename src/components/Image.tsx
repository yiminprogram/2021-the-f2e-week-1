import { useState } from 'react';
import styled from '@emotion/styled';
import NoImage from '../assets/images/image.svg';
import { Skeleton } from '@mui/material';

const Picture = styled('img')<{ loadImage: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.loadImage ? 'none' : 'initial')};
`;

const Image = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };
  return (
    <>
      <Picture
        onLoad={handleLoading}
        loadImage={loading}
        src={src || NoImage}
        alt="error"
      />
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
    </>
  );
};

export default Image;
