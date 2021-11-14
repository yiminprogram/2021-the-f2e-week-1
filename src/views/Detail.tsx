import { useState, useEffect } from 'react';
import { Typography, Grid, styled, Container, Box } from '@mui/material';
import {
  AccessTime,
  ConfirmationNumber,
  Room,
  Phone,
} from '@mui/icons-material';
import SwiperImage from '../components/SwiperImage';
import { checkText, getData } from '../utils';
import { TData, initialData, EType } from '../types';
import { useParams, useLocation } from 'react-router-dom';

const Item = styled('div')`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const GuideModal = () => {
  const [data, setData] = useState<TData>(initialData);

  const { id } = useParams();
  const location = useLocation();
  const type = new URLSearchParams(location.search).get('type') as
    | EType
    | undefined;

  useEffect(() => {
    if (id && type) {
      getData(type, id).then((data) => setData(data));
    }
  }, [id, type]);
  return (
    <Box sx={{ minHeight: 'calc(100vh - 104px)', padding: '2rem' }}>
      <Container maxWidth="md" sx={{ bgcolor: '#fff', borderRadius: 1, p: 3 }}>
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
      </Container>
    </Box>
  );
};

export default GuideModal;
