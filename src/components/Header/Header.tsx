import React, {useContext, useEffect} from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";
import Drawer from "./Drawer/Drawer";
import Tabs from "./Tabs/Tabs";
import {TabContext} from "../../contexts/TabContext";
import {useHistory} from "react-router";
import {Code, GraphicEq, Person} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    width: "100%",
    height: 60,
    backgroundColor: theme.palette.secondary.dark,
    zIndex: 10,
    top: 0,
    display: "flex",
    justifyContent: "center",
  },
}));

export const headerItems = [
  {
    label: "About me",
    href: "#about",
    icon: <Person />,
  },
  {
    label: "Programming Projects",
    href: "#programming",
    icon: <Code />,
  },
  {
    label: "3D Projects",
    href: "#gfx",
    icon: <GraphicEq />,
  },
];

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { setSelected, selected } = useContext(TabContext);
  const history = useHistory();

  useEffect(() => {
    let anchor = history.location.hash;
    if (anchor.length > 0) {
      anchor = anchor.slice(1, anchor.length);
      let selected = -1;
      switch (anchor) {
        case "about":
          selected = 0;
          break;
        case "programming":
          selected = 1;
          break;
        case "gfx":
          selected = 2;
          break;
      }
      setSelected(selected);
    }
  }, [history.location.hash, setSelected]);

  const onChangeHandler = (newValue: number) => {
    setSelected(newValue);
    let anchor = "about";
    switch (newValue) {
      case 1:
        anchor = "programming";
        break;
      case 2:
        anchor = "gfx";
        break;
    }
    history.push(`${history.location.pathname}#${anchor}`);
  };

  return (
    <div className={classes.root}>
      {smallScreen ? (
        <Drawer onChange={onChangeHandler} selected={selected} />
      ) : (
        <Tabs onChange={onChangeHandler} selected={selected} />
      )}
    </div>
  );
};

export default Header;
