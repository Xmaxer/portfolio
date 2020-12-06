import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderTab from "../HeaderButton/HeaderTab";
import { TabContext } from "../../contexts/TabContext";
import HeaderTabs from "../HeaderTabs/HeaderTabs";
import { useHistory } from "react-router";

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

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  const classes = useStyles();
  const { setSelected, selected } = useContext(TabContext);
  const history = useHistory();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
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

  return (
    <div className={classes.root}>
      <HeaderTabs onChange={handleTabChange} value={selected}>
        <HeaderTab autoCapitalize={"true"} label={"About me"} />
        <HeaderTab autoCapitalize={"true"} label={"Programming Projects"} />
        <HeaderTab autoCapitalize={"true"} label={"3D Projects"} />
      </HeaderTabs>
    </div>
  );
};

export default Header;
