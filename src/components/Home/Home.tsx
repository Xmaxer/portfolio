import React, {RefObject, useCallback, useContext, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {ParallaxContext} from "../../state/ParallaxContext";
import Introduction from "../Introduction/Introduction";
import Content from "../Content/Content";
import Header from "../Header/Header";
import useTabContext from "../../contexts/useTabContext";
import {TabContext} from "../../contexts/TabContext";
import {trackAction} from "../../tracker";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "100vh",
    minHeight: "100vh",
    position: "relative",
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const classes = useStyles();
  const { setPosition } = useContext(ParallaxContext);
  const rootRef: RefObject<HTMLDivElement> | null = useRef(null);
  const tabContext = useTabContext();

  const trackScrollPosition = useCallback(
    (position: number) => {
      setPosition(position);
      trackAction("Page position", "scroll action", position, true);
    },
    [setPosition]
  );

  return (
    <TabContext.Provider value={tabContext}>
      <div
        className={classes.root}
        onScroll={(e) => trackScrollPosition(e.currentTarget.scrollTop)}
        ref={rootRef}
        id={"home"}
      >
        <Header />
        <Introduction />
        <Content />
      </div>
    </TabContext.Provider>
  );
};

export default Home;
