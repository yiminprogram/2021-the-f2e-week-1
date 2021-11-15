import { styled, Typography, Container } from '@mui/material';
import ErrorImage from '../assets/images/404.svg';

const Image = styled('div')`
  height: calc(100vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const ImageContainer = styled('div')`
  flex: 0 1 600px;

  > img {
    width: 100%;
    height: 1005;
    object-fit: cover;
  }
`;

const ErrorPage = () => {
  return (
    <Container maxWidth="lg">
      <Image>
        <ImageContainer>
          <img src={ErrorImage} alt="no-page-match" />
        </ImageContainer>
        <Typography
          variant="h2"
          sx={{ flex: '0 1 100%', textAlign: 'center', lineHeight: 2 }}
        >
          Error 404 <br /> 您所訪問的頁面並不存在
        </Typography>
      </Image>
    </Container>
  );
};

export default ErrorPage;
