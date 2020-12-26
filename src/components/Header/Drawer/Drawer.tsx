import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import { Dehaze } from "@material-ui/icons";
import { headerItems } from "../Header";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {},
  listItemSelected: {
    "& *": {
      color: theme.palette.tertiary.main,
    },
  },
  drawerButton: {
    color: theme.palette.primary.light,
    marginRight: "auto",
  },
}));

export interface IDrawerProps {
  onChange: (newValue: number) => void;
  selected: number;
}

const Drawer: React.FC<IDrawerProps> = ({ onChange, selected }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const onClickHandler = (newValue: number) => {
    setOpen(false);
    onChange(newValue);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        className={classes.drawerButton}
      >
        <Dehaze />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <div className={classes.root}>
          <List>
            {headerItems.map((item, index) => {
              return (
                <ListItem
                  button
                  key={`drawer-item-${index}`}
                  onClick={() => onClickHandler(index)}
                  className={clsx(
                    classes.listItem,
                    index === selected && classes.listItemSelected
                  )}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
