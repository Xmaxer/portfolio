import { Tab, TabProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderTab = styled(Tab)<TabProps>(({ theme }) => ({
  root: {
    fontSize: 25,
    [theme.breakpoints.down('md')]: {
      fontSize: '3vw',
    },
    backgroundColor: 'transparent',
    maxWidth: 'inherit',
    color: theme.palette.primary.light,
    minWidth: 'inherit',
    minHeight: 'inherit',
  },
  selected: {
    color: theme.palette.tertiary.main,
  },
}));

export default HeaderTab;
