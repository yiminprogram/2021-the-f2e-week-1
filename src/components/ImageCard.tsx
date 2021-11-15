import { useDispatch } from 'react-redux';
import actions from '../store/actions/modalAction';
import { bindActionCreators } from 'redux';
import { Typography, styled } from '@mui/material';
import { Room } from '@mui/icons-material';
import { SxProps } from '@mui/system';
import { TData } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';
import { stringify } from 'querystring';
import { checkText } from '../utils';
import Image from '../components/Image';

const Card = styled('article')(
  ({ theme }) => ` 
  cursor: pointer;
  margin: 0 0 2.5rem 0;
  padding: 1rem;
  background-color: #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 40%;
    height: 8%;
    bottom: -3%;
    left: 5%;
    background-color: #0d0b0c;
    opacity: 0.3;
    filter: blur(11px);
    z-index: -1;
    transform: rotate(-10deg);
  }

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 8%;
    bottom: -3%;
    right: 5%;
    background-color: #0d0b0c;
    opacity: 0.3;
    filter: blur(11px);
    z-index: -1;
    transform: rotate(10deg);
  }

  &:hover::before {
    background-color: ${theme.palette.primary.main};
  }

  &:hover::after {
    background-color: ${theme.palette.primary.main};
  }
`,
);

const ImageContainer = styled('div')`
  margin-bottom: 0.8rem;
  height: 200px;
`;

const Location = styled('div')`
  display: flex;
  align-items: center;
`;

const titleStyle: SxProps = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: '1.5',
  marginBottom: '1.5rem',
};

const ImageCard = (data: TData) => {
  const dispatch = useDispatch();
  const { openModal } = bindActionCreators(actions, dispatch);

  // router
  const search = stringify({ type: data.type });
  const location = useLocation();
  const navigation = useNavigate();

  const handleOpen = () => {
    openModal(data);
    navigation(
      { pathname: `info/${data.id}`, search },
      { state: { background: location } },
    );
  };

  return (
    <Card onClick={handleOpen}>
      <ImageContainer>
        <Image src={data.picture} />
      </ImageContainer>
      <Typography variant="h4" sx={titleStyle}>
        {data.name}
      </Typography>
      <Location>
        <Room color="primary" />
        <Typography
          variant="h5"
          color={(theme) => theme.palette.success.main}
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {checkText(data.address)}
        </Typography>
      </Location>
    </Card>
  );
};

export default ImageCard;
