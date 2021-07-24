import React, { RefObject, useCallback, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabContent from "../TabContent/TabContent";
import About from "../About/About";
import ProgrammingProjects from "../ProgrammingProjects/ProgrammingProjects";
import GFXProjects from "../GFXProjects/GFXProjects";
import { useHistory } from "react-router";
import { useGA4React } from "ga-4-react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "calc(100vh - (50vh + 60px + 136px + 20px) + 32px)",
  },
}));

export interface IContentProps {}

const Content: React.FC<IContentProps> = ({}) => {
  const classes = useStyles();
  const history = useHistory();
  const ga = useGA4React();
  const rootRef: RefObject<HTMLDivElement> | null = useRef(null);

  const track = useCallback(
    (label: string) => {
      if (ga) {
        ga.event("click", label, "Navigation", false);
      }
    },
    [ga]
  );

  useEffect(() => {
    if (rootRef && rootRef.current) {
      const position = rootRef.current.offsetTop / 3;
      const home = document.getElementById("home");
      track(history.location.hash);
      let documentTitle;
      switch (history.location.hash.replace("#", "")) {
        case "programming":
          documentTitle = "Kevin's Programming Projects";
          break;
        case "gfx":
          documentTitle = "Kevin's 3D Projects";
          break;
        case "about":
          documentTitle = "Kevin's Experience";
          break;
        default:
      }

      if (documentTitle) {
        document.title = documentTitle;
      }

      if (home) {
        home.scrollTo({ top: position, behavior: "smooth" });
      }
    }
  }, [history.location.hash, track]);

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
