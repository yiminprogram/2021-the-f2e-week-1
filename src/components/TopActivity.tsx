import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import InfoCard from './InfoCard';
import Title from './Title';
import { getActivities } from '../utils/getTopActivities';
import { TData } from '../types';

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const ListItem = styled.li`
  flex: 0 1 712px;
  margin: 1rem;
`;

const Activity = () => {
  const [data, setData] = useState<TData[]>([]);

  useEffect(() => {
    getActivities().then((res) => setData(res));
  }, []);
  return (
    <Container maxWidth="xl" sx={{ marginBottom: '5.5rem' }}>
      <Title title="熱門活動" icon="triangle" />
      <List>
        {data.map((ele) => (
          <ListItem key={ele.id}>
            <InfoCard {...ele} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Activity;
