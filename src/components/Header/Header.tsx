import { Box, useMediaQuery, useTheme } from '@mui/material';
import { TAB_CONTEXT_SET_SELECTED_TAB_ACTION } from '@providers/contexts/tab/reducer.js';
import React, { useEffect } from 'react';
import { BsCodeSlash, BsPersonFill, MdGraphicEq } from 'react-icons/all.js';
import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from '@components/Header/Drawer/Drawer.js';
import Tabs from '@components/Header/Tabs/Tabs.js';

import useTabContext from '@hooks/context/useTabContext.js';

export const headerItems = [
  {
    label: 'About me',
    href: '#about',
    icon: <BsPersonFill />,
  },
  {
    label: 'Programming Projects',
    href: '#programming',
    icon: <BsCodeSlash />,
  },
  {
    label: '3D Projects',
    href: '#gfx',
    icon: <MdGraphicEq />,
  },
];

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [{ selectedTab }, dispatchTab] = useTabContext();
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
      dispatchTab({
        type: TAB_CONTEXT_SET_SELECTED_TAB_ACTION,
        selectedTab: selected,
      });
    }
  }, [location.hash, dispatchTab]);

  const onChangeHandler = (newValue: number) => {
    dispatchTab({
      type: TAB_CONTEXT_SET_SELECTED_TAB_ACTION,
      selectedTab: newValue,
    });
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
        <Drawer onChange={onChangeHandler} selected={selectedTab} />
      ) : (
        <Tabs onChange={onChangeHandler} selected={selectedTab} />
      )}
    </Box>
  );
};

export default Header;
