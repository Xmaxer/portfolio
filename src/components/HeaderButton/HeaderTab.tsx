import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tab } from "@material-ui/core";

const HeaderTab = withStyles((theme) => ({
  root: {
    fontSize: 25,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    backgroundColor: "transparent",
    maxWidth: "inherit",
    color: theme.palette.primary.main,
    minWidth: "inherit",
    minHeight: "inherit",
  },
  selected: {
    color: theme.palette.tertiary.main,
  },
}))(Tab);

export default HeaderTab;
