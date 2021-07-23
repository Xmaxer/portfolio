import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";

const HeaderTab = withStyles((theme) => ({
  root: {
    fontSize: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: "3vw",
    },
    backgroundColor: "transparent",
    maxWidth: "inherit",
    color: theme.palette.primary.light,
    minWidth: "inherit",
    minHeight: "inherit",
  },
  selected: {
    color: theme.palette.tertiary.main,
  },
}))(Tab);

export default HeaderTab;
