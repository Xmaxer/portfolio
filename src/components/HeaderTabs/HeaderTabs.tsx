import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tabs } from "@material-ui/core";

const HeaderTabs = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      minHeight: 32,
      height: "fit-content",
      marginTop: "auto",
    },
  },
  indicator: {
    backgroundColor: theme.palette.tertiary.main,
  },
  flexContainer: {
    "& > .MuiTab-root": {
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
      },
      marginLeft: theme.spacing(8),
    },
    "& > .MuiTab-root:first-child": {
      marginLeft: 0,
    },
  },
}))(Tabs);

export default HeaderTabs;
