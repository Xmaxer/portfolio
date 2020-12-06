import React, { RefObject, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabContent from "../TabContent/TabContent";
import About from "../About/About";
import ProgrammingProjects from "../ProgrammingProjects/ProgrammingProjects";
import GFXProjects from "../GFXProjects/GFXProjects";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "calc(100vh - (50vh + 60px + 136px) + 32px)",
  },
}));

export interface IContentProps {}

const Content: React.FC<IContentProps> = ({}) => {
  const classes = useStyles();
  const history = useHistory();
  const rootRef: RefObject<HTMLDivElement> | null = useRef(null);

  useEffect(() => {
    if (rootRef && rootRef.current) {
      const position = rootRef.current.offsetTop - 300;
      const home = document.getElementById("home");
      if (home) {
        home.scroll({ top: position, behavior: "smooth" });
      }
    }
  }, [history.location.hash]);

  return (
    <div className={classes.root} ref={rootRef}>
      <TabContent value={0}>
        <About />
      </TabContent>
      <TabContent value={1}>
        <ProgrammingProjects />
      </TabContent>
      <TabContent value={2}>
        <GFXProjects />
      </TabContent>
    </div>
  );
};

export default Content;
