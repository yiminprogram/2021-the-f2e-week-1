import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Triangle, Square } from '../assets/icons';

const TitleIcon = styled.span`
  margin-right: 14px;
`;

type TProps = {
  title: string;
  icon: 'triangle' | 'square';
};

const iconRender = (icon: 'triangle' | 'square') => {
  switch (icon) {
    case 'triangle':
      return <Triangle />;
    case 'square':
      return <Square />;
    default:
      return null;
  }
};

const Title = ({ title, icon }: TProps) => {
  return (
    <Typography variant="h1" sx={{ marginBottom: '1rem' }}>
      <TitleIcon>{iconRender(icon)}</TitleIcon>
      {title}
    </Typography>
  );
};

export default Title;
