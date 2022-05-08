import { Tabs, TabsProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
  '&.MuiTabs-root': {
    [theme.breakpoints.down('md')]: {
      minHeight: 32,
      height: 'fit-content',
      marginTop: 'auto',
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.tertiary.main,
  },
  '& .MuiTabs-flexContainer': {
    '& > .MuiTab-root': {
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
      marginLeft: theme.spacing(8),
    },
    '& > .MuiTab-root:first-of-type': {
      marginLeft: 0,
    },
  },
}));

export default HeaderTabs;
