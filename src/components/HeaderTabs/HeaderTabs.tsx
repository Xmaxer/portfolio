import { Tabs, TabsProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      minHeight: 32,
      height: 'fit-content',
      marginTop: 'auto',
    },
  },
  indicator: {
    backgroundColor: theme.palette.tertiary.main,
  },
  flexContainer: {
    '& > .MuiTab-root': {
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
      marginLeft: theme.spacing(8),
    },
    '& > .MuiTab-root:first-child': {
      marginLeft: 0,
    },
  },
}));

export default HeaderTabs;
