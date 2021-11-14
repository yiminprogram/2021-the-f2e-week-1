import { useDispatch } from 'react-redux';
import actions from '../store/actions/modalAction';
import { bindActionCreators } from 'redux';
import { Typography, Stack, Button } from '@mui/material';
import styled from '@emotion/styled';
import { Room } from '@mui/icons-material';
import { SxProps } from '@mui/system';
import { TData, EType } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import { stringify } from 'querystring';

const Card = styled.article`
  width: 100%;
  height: 300px;
  background-color: #fff;
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;

  &::before {
    content: '';
    position: absolute;
    width: 40%;
    height: 30%;
    bottom: -3%;
    left: 3%;
    background-color: #0d0b0c;
    opacity: 0.3;
    filter: blur(11px);
    z-index: -1;
    transform: rotate(-8deg);
  }

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 30%;
    bottom: -3%;
    right: 3%;
    background-color: #0d0b0c;
    opacity: 0.3;
    filter: blur(11px);
    z-index: -1;
    transform: rotate(8deg);
  }
`;

const CardImage = styled.div`
  flex: 1.2;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  flex: 2;
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
`;

const paragraph: SxProps = {
  color: '#acacac',
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 2.5,
};

const InfoCard = (data: TData) => {
  // redux
  const dispatch = useDispatch();

  // router
  const navigation = useNavigate();
  const location = useLocation();
  const type = stringify({ type: EType.ACTIVITY });

  const { openModal } = bindActionCreators(actions, dispatch);

  const handleOpenModal = () => {
    openModal(data);
    navigation(
      { pathname: data.id, search: type },
      { state: { background: location } },
    );
  };
  return (
    <Card>
      <CardImage>
        <img src={data.picture} alt="error" />
      </CardImage>
      <CardInfo>
        <Typography variant="h2" sx={{ marginBottom: '0.5rem' }}>
          {data.name}
        </Typography>
        <Typography variant="h4" sx={paragraph}>
          {data.description}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ marginTop: 'auto', marginBottom: '0.5rem' }}
        >
          <Typography
            variant="h4"
            sx={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <Room color="primary" fontSize="large" />
            {data.address}
          </Typography>
          <Button variant="outlined" onClick={handleOpenModal}>
            活動詳情
          </Button>
        </Stack>
      </CardInfo>
    </Card>
  );
};

export default InfoCard;
