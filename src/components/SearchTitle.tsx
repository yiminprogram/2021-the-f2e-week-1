import { useState } from 'react';
import styled from '@emotion/styled';
import homepage from '../assets/images/homepage.jpg';
import attraction from '../assets/images/attraction.jpg';
import food from '../assets/images/food.jpg';
import TitleLogo from '../assets/logo/TitleLogo';
import {
  Select,
  MenuItem,
  Stack,
  Typography,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import cityList from '../assets/data/city.json';
import { useNavigate } from 'react-router-dom';
import { stringify } from 'querystring';
import { TFilter, EType } from '../types';

const Title = styled.div`
  position: relative;
  height: 536px;
  background-color: #fff;
  margin-bottom: 90px;
  padding: 1.3rem;

  @media screen and (max-width: 900px) {
    height: auto;
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3%;
    width: 50%;
    height: 52px;
    background-color: #0d0b0c;
    opacity: 0.3;
    transform: rotate(-3deg);
    filter: blur(11px);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -3%;
    width: 50%;
    height: 52px;
    background-color: #0d0b0c;
    opacity: 0.3;
    transform: rotate(3deg);
    filter: blur(11px);
    z-index: -1;
  }
`;

const Image = styled.div`
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NativeSelect = styled.select`
  height: 40px;
  flex: 1;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 0 8px;
  font-size: 1rem;
  line-height: 1.4375em;
  color: rgba(0, 0, 0, 0.87);

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Content = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  top: 0;
  left: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  transform: translateX(-50%);

  @media screen and (max-width: 900px) {
    position: relative;
  }
`;

const TitleInfo = styled(Typography)`
  color: #fff;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

type TProps = {
  image: 'homepage' | 'attraction' | 'food';
};

const switchImage = (image: 'homepage' | 'attraction' | 'food') => {
  switch (image) {
    case 'homepage':
      return homepage;
    case 'attraction':
      return attraction;
    case 'food':
      return food;
    default:
      return undefined;
  }
};

const typeList = [
  {
    id: EType.ATTRACTION,
    type: EType.ATTRACTION,
    value: '景點',
  },
  {
    id: EType.FOOD,
    type: EType.FOOD,
    value: '美食',
  },
  {
    id: EType.ACTIVITY,
    type: EType.ACTIVITY,
    value: '活動',
  },
];

const initial: TFilter = {
  type: typeList[0].type,
  city: cityList[0].value,
  keyword: '',
};

const SearchTitle = ({ image }: TProps) => {
  const [filter, setFilter] = useState<TFilter>(initial);

  const navigation = useNavigate();
  const handleSearch = () => {
    const search = stringify({
      keyword: filter.keyword,
      type: filter.type,
      city: filter.city,
    });
    navigation({
      pathname: '/search',
      search,
    });
    window.scrollTo({ top: 700, left: 0 });
    setFilter(initial);
  };

  return (
    <Title>
      <Image>
        <img src={switchImage(image)} alt="autumn" />
      </Image>
      <Content>
        <TitleLogo />
        <TitleInfo variant="h4">
          台北、台中、台南、屏東、宜蘭......遊遍台灣
        </TitleInfo>
        <TextField
          id="keyword"
          placeholder="搜尋關鍵字"
          variant="outlined"
          size="small"
          sx={{ height: 40 }}
          fullWidth
          margin="normal"
          value={filter.keyword}
          onChange={(e) => setFilter({ ...filter, keyword: e.target.value })}
        />
        <Stack direction="row" spacing={'6px'}>
          <FormControl sx={{ flexGrow: 1 }}>
            <Select
              sx={({ breakpoints }) => ({
                height: 40,
                [breakpoints.down('md')]: {
                  display: 'none',
                },
              })}
              value={filter.type}
              displayEmpty
              onChange={(e) =>
                setFilter({ ...filter, type: e.target.value as EType })
              }
            >
              <MenuItem disabled value="">
                選擇類別
              </MenuItem>
              {typeList.map((ele) => (
                <MenuItem value={ele.type} key={ele.id}>
                  {ele.value}
                </MenuItem>
              ))}
            </Select>
            <NativeSelect
              value={filter.type}
              onChange={(e) =>
                setFilter({ ...filter, type: e.target.value as EType })
              }
            >
              <option disabled value="">
                選擇類別
              </option>
              {typeList.map((ele) => (
                <option value={ele.type} key={ele.id}>
                  {ele.value}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl sx={{ flexGrow: 1 }}>
            <Select
              sx={({ breakpoints }) => ({
                height: 40,
                [breakpoints.down('md')]: {
                  display: 'none',
                },
              })}
              value={filter.city}
              displayEmpty
              onChange={(e) => setFilter({ ...filter, city: e.target.value })}
            >
              <MenuItem disabled value="">
                選擇縣市
              </MenuItem>
              {cityList.map((ele) => (
                <MenuItem value={ele.value} key={ele.value}>
                  {ele.city}
                </MenuItem>
              ))}
            </Select>
            <NativeSelect
              value={filter.city}
              onChange={(e) => setFilter({ ...filter, city: e.target.value })}
            >
              <option disabled value="">
                選擇縣市
              </option>
              {cityList.map((ele) => (
                <option value={ele.value} key={ele.value}>
                  {ele.city}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl sx={{ width: 40 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: 40, height: 40 }}
              onClick={handleSearch}
            >
              <SearchIcon sx={{ color: '#fff' }} />
            </Button>
          </FormControl>
        </Stack>
      </Content>
    </Title>
  );
};

export default SearchTitle;
