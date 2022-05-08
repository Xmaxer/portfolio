import { Dehaze } from '@mui/icons-material';
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

import { headerItems } from '@component/Header/Header';

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
        <Dehaze />
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
