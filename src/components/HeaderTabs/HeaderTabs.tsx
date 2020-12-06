import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tabs } from "@material-ui/core";

const HeaderTabs = withStyles((theme) => ({
  indicator: {
    backgroundColor: theme.palette.tertiary.main,
  },
  flexContainer: {
    "& > .MuiTab-root": {
      marginLeft: theme.spacing(8),
    },
    "& > .MuiTab-root:first-child": {
      marginLeft: 0,
    },
  },
}))(Tabs);

export default HeaderTabs;
