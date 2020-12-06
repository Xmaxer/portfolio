import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";

const useStyles = makeStyles((theme) => ({}));

export interface IGFXProjectsProps {}

const GFXProjects: React.FC<IGFXProjectsProps> = ({}) => {
  const classes = useStyles();
  return (
    <div id={"gfx"}>
      <ContentCard
        context={"UNDER CONSTRUCTION"}
        title={"Try check back in a few days"}
        content={
          "This website is being re-made, hence why this page is still missing."
        }
      />
    </div>
  );
};

export default GFXProjects;
