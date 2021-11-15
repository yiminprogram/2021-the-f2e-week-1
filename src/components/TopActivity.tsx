import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import InfoCard from './InfoCard';
import Title from './Title';
import { getActivities } from '../utils/getTopActivities';
import { TData } from '../types';

const Activity = () => {
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    getActivities().then((res) => setData(res));
  }, []);
  return (
    <Container maxWidth="xl" sx={{ marginBottom: '5.5rem' }}>
      <Title title="熱門活動" icon="triangle" />
      <Grid container spacing={6}>
        {data.map((ele) => (
          <Grid item key={ele.id} xs={12} sm={6}>
            <InfoCard {...ele} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Activity;
