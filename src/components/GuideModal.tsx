import { Modal, Typography, Grid, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../store/actions/modalAction';
import { TState } from '../store/types/TModal';
import {
  AccessTime,
  ConfirmationNumber,
  Room,
  Phone,
} from '@mui/icons-material';
import SwiperImage from './SwiperImage';
import { checkText } from '../utils';
import { useNavigate } from 'react-router-dom';

const Item = styled('div')`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const ModalBox = styled('div')(({ theme: { breakpoints } }) => ({
  backgroundColor: '#fff',
  position: 'absolute',
  width: '50%',
  height: '80%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '2rem',
  overflow: 'auto',

  [breakpoints.down('md')]: {
    width: '100%',
    height: '100%',
  },
}));

const GuideModal = () => {
  // open modal
  const dispatch = useDispatch();
  const { closeModal } = bindActionCreators(actions, dispatch);
  const { data, open } = useSelector((state: TState) => state.modal);

  // handle modal close
  const navigation = useNavigate();
  const handleClose = () => {
    closeModal();
    navigation(-1);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalBox>
        <SwiperImage picture={data.picture} />
        <Typography variant="h2" sx={{ my: 3 }}>
          {data.name}
        </Typography>
        <Typography variant="h4" sx={{ mb: 5 }}>
          {data.description}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Item>
              <AccessTime sx={{ mr: 1 }} color="primary" />
              <Typography variant="h4">{checkText(data.time)}</Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <ConfirmationNumber sx={{ mr: 1 }} color="primary" />
              <Typography variant="h4">{checkText(data.price)}</Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Room sx={{ mr: 1 }} color="primary" />
              <Typography variant="h4">{checkText(data.address)}</Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Phone sx={{ mr: 1 }} color="primary" />
              <Typography variant="h4">{checkText(data.phone)}</Typography>
            </Item>
          </Grid>
        </Grid>
      </ModalBox>
    </Modal>
  );
};

export default GuideModal;
