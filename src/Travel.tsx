import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Attraction from './views/Attraction';
import FoodHotel from './views/FoodHotel';
import Traffic from './views/Traffic';
import Search from './views/Search';
import Detail from './views/Detail';
import ErrorPage from './views/ErrorPage';
import styled from '@emotion/styled';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
// import { LinearProgress } from '@mui/material';
import GuideModal from './components/GuideModal';

SwiperCore.use([Pagination]);

const Website = styled.div`
  overflow: hidden;
  min-height: 100vh;
`;

const Travel = () => {
  // router
  const location = useLocation();
  const background = location.state && (location.state as any).background;

  return (
    <Website>
      {/* <LinearProgress
        sx={{ position: 'fixed', width: '100vw', height: '6px', left: 0, top: 0, zIndex: 999 }}
      /> */}
      <GuideModal />
      <Header />
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="attractions" element={<Attraction />} />
        <Route path="food-hotel" element={<FoodHotel />} />
        <Route path="traffic" element={<Traffic />} />
        <Route path="search" element={<Search />} />
        <Route path="info/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Website>
  );
};

export default Travel;
