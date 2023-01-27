import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/all.js';

import { headerItems } from '@components/Header/Header.js';

export interface IDrawerProps {
  onChange: (newValue: number) => void;
  selected: number;
}

const Drawer: React.FC<IDrawerProps> = ({ onChange, selected }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const onClickHandler = (newValue: number) => {
    setOpen(false);
    onChange(newValue);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          color: theme.palette.primary.light,
          marginRight: 'auto',
        }}
      >
        <GiHamburgerMenu />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Box>
          <List>
            {headerItems.map((item, index) => {
              return (
                <ListItemButton
                  key={`drawer-item-${index}`}
                  onClick={() => onClickHandler(index)}
                  sx={
                    index === selected
                      ? {
                          '& *': {
                            color: theme.palette.tertiary.main,
                          },
                        }
                      : {}
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
