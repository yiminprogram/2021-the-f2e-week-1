import cityList from '../assets/data/city.json';

export const getCity = (city: string) => {
  return cityList.find((ele) => ele.value === city)?.city;
};
