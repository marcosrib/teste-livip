import styled from '@livipdev/core/styles/styled';
import Box from '@livipdev/core/Box';

//experiências e atrações
const ExperienceCard = styled(Box)(({ background, theme }) => ({
  alignItems: 'flex-end',
  backgroundImage: `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  display: 'flex',
  height: '22vw',
  padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
  width: '33.3vw',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '50vw',
    height: '33vw',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100vw',
    height: '66vw',
  },
}));


export default ExperienceCard;
