import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Red, Yellow, Green } from '../assets/icons';
import { SxProps } from '@mui/system';
import LogoImage from '../assets/logo/logo.svg';

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 104px;
  padding: 0 108px;
  background-color: #fff;
`;

const Logo = styled.div`
  flex: 1;
  height: 57px;

  > a {
    display: inline-block;

    @media screen and (max-width: 900px) {
      text-align: center;
    }

    > img {
      height: 100%;
    }
  }
`;

const Nav = styled.nav`
  flex: 2;
  text-align: right;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const styles: SxProps = {
  marginRight: '27px',
};

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={LogoImage} alt="logo" />
        </Link>
      </Logo>
      <Nav>
        <Button
          component={Link}
          to="/attractions"
          startIcon={<Red />}
          sx={styles}
        >
          台灣景點
        </Button>
        <Button
          component={Link}
          to="/food-hotel"
          color="warning"
          startIcon={<Yellow />}
          sx={styles}
        >
          美食住宿
        </Button>
        <Button
          component={Link}
          to="/traffic"
          color="success"
          startIcon={<Green />}
        >
          景點交通
        </Button>
      </Nav>
    </Container>
  );
};

export default Header;
