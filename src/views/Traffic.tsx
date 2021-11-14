import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import coding from '../assets/images/code.svg';

const Page = styled.div`
  min-height: calc(100vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

const Image = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Traffic = () => {
  return (
    <Page>
      <Image>
        <img src={coding} alt="error" />
      </Image>
      <Typography variant="h2">建置中</Typography>
    </Page>
  );
};

export default Traffic;
