import { Code, GraphicEq, Person } from '@mui/icons-material';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from './Drawer/Drawer';
import Tabs from './Tabs/Tabs';

import { TabContext } from '@context/TabContext';

export const headerItems = [
  {
    label: 'About me',
    href: '#about',
    icon: <Person />,
  },
  {
    label: 'Programming Projects',
    href: '#programming',
    icon: <Code />,
  },
  {
    label: '3D Projects',
    href: '#gfx',
    icon: <GraphicEq />,
  },
];

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { setSelected, selected } = useContext(TabContext);
  const location = useLocation();

  useEffect(() => {
    let anchor = location.hash;
    if (anchor.length > 0) {
      anchor = anchor.slice(1, anchor.length);
      let selected = -1;
      switch (anchor) {
        case 'about':
          selected = 0;
          break;
        case 'programming':
          selected = 1;
          break;
        case 'gfx':
          selected = 2;
          break;
      }
      setSelected(selected);
    }
  }, [location.hash, setSelected]);

  const onChangeHandler = (newValue: number) => {
    setSelected(newValue);
    let anchor = 'about';
    switch (newValue) {
      case 1:
        anchor = 'programming';
        break;
      case 2:
        anchor = 'gfx';
        break;
    }
    navigate(`${location.pathname}#${anchor}`);
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        width: '100%',
        height: 60,
        backgroundColor: theme.palette.secondary.dark,
        zIndex: 10,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {smallScreen ? (
        <Drawer onChange={onChangeHandler} selected={selected} />
      ) : (
        <Tabs onChange={onChangeHandler} selected={selected} />
      )}
    </Box>
  );
};

export default Header;
