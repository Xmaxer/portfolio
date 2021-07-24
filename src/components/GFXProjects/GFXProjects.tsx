import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";
import GFXCard from "../GFXCard/GFXCard";
import { PROJECTS_3D } from "../../constants/3DProjects";
import GFXTitle from "../GFXTitle/GFXTitle";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    "& > *:first-child": {
      marginTop: 0,
    },
  },
  infoContainer: {
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
  },
  subtext: {
    fontStyle: "italic",
  },
}));

export interface IGFXProjectsProps {}

const GFXProjects: React.FC<IGFXProjectsProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.cardsContainer} id={"gfx"}>
      <div className={classes.infoContainer}>
        <Typography className={classes.title}>
          {"Click any image to view it in full size!"}
        </Typography>
        <Typography className={classes.subtext}>
          {
            "Note: Opening images in full size may often download between 5MB-12MB"
          }
        </Typography>
      </div>
      {PROJECTS_3D.map((card, index) => {
        return (
          <ContentCard
            key={`card-${index}`}
            title={<GFXTitle title={card.name} subtitle={card.description} />}
            content={<GFXCard {...card} />}
          />
        );
      })}
    </div>
  );
};

export default memo(GFXProjects);
