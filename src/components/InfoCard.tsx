import { useDispatch } from 'react-redux';
import actions from '../store/actions/modalAction';
import { bindActionCreators } from 'redux';
import { Typography, Stack, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Room } from '@mui/icons-material';
import { SxProps } from '@mui/system';
import { TData, EType } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import { stringify } from 'querystring';
import Image from '../components/Image';

const Card = styled.article`
  width: 100%;
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

const CardInfo = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
`;

const paragraph: SxProps = {
  color: '#acacac',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 2.5,
  marginBottom: 2,
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
      <Grid container>
        <Grid item xs={12} md={6}>
          <Image src={data.picture} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingTop: {
              xs: 2,
              md: 0,
            },
          }}
        >
          <CardInfo>
            <Typography
              variant="h2"
              sx={{
                marginBottom: '0.5rem',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {data.name}
            </Typography>
            <Typography variant="h4" sx={paragraph}>
              {data.description}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ marginTop: 'auto', marginBottom: '0.5rem' }}
            >
              <Room color="primary" fontSize="large" />
              <Typography
                variant="h4"
                sx={{
                  alignItems: 'center',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  marginRight: 2,
                }}
              >
                {data.address}
              </Typography>
              <Button
                variant="outlined"
                onClick={handleOpenModal}
                sx={{ whiteSpace: 'nowrap', marginLeft: 'auto' }}
              >
                活動詳情
              </Button>
            </Stack>
          </CardInfo>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InfoCard;
