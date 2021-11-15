import { useState, useEffect, ChangeEvent } from 'react';
import SearchTitle from '../components/SearchTitle';
import ImageCard from '../components/ImageCard';
import {
  styled,
  Container,
  Typography,
  Grid,
  Pagination,
  Stack,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { TData, EType } from '../types';
import { getSearch, getType, getCity } from '../utils';
import NotFoundImage from '../assets/images/not-found.svg';

const Page = styled('div')`
  position: relative;
  z-index: 0;
  padding-bottom: 6rem;
`;

const Result = styled('span')(({ theme }) => ({
  display: 'inline-block',
  margin: '0 1rem 0 0.5rem',
  borderBottom: `3px solid ${theme.palette.primary.main}`,
}));

const NotFound = styled('div')`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const ImageContainer = styled('div')`
  flex: 0 1 600px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Search = () => {
  const [data, setData] = useState<TData[]>([]);
  const [page, setPage] = useState<number>(1);

  // get filter query
  const location = useLocation();
  const { type, city, keyword } = Object.fromEntries(
    new URLSearchParams(location.search),
  ) as { type: EType; city: string; keyword: string };

  useEffect(() => {
    getSearch({ type, city, keyword }).then((res) => setData(res));
  }, [type, city, keyword]);

  const handlePage = (e: ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 700);
    setPage(value);
  };

  return (
    <Page>
      <SearchTitle image="food" />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 5 }} id="search-title">
          搜尋結果：
          <Result>{getType(type)}</Result>
          位置：
          <Result>{getCity(city)}</Result>
        </Typography>
        {data.length === 0 ? (
          <NotFound>
            <ImageContainer>
              <img src={NotFoundImage} alt="not-found-imaeg" />
            </ImageContainer>
            <Typography
              variant="h2"
              sx={{ flex: '0 1 100%', textAlign: 'center' }}
            >
              很抱歉，找不到符合此搜尋相關的內容
            </Typography>
          </NotFound>
        ) : (
          <Grid container spacing={2}>
            {data.slice((page - 1) * 16, page * 16).map((ele) => (
              <Grid item xs={12} sm={6} md={4} xl={3} key={ele.id}>
                <ImageCard {...ele} />
              </Grid>
            ))}
          </Grid>
        )}
        <Stack direction="row" justifyContent="center">
          <Pagination
            count={Math.ceil(data.length / 16)}
            color="primary"
            sx={{ my: 3 }}
            size="large"
            shape="rounded"
            page={page}
            onChange={handlePage}
          />
        </Stack>
      </Container>
    </Page>
  );
};

export default Search;
