import styled from '@emotion/styled';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 65px;

  > p {
    color: #acacac;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>Taiwan Tourguid &copy; Code:YM / Design:KY</p>
    </Container>
  );
};

export default Footer;
