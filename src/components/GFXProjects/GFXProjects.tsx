import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";
import GFXCard from "../GFXCard/GFXCard";
import {PROJECTS_3D} from "../../constants/3DProjects";
import GFXTitle from "../GFXTitle/GFXTitle";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    "& > *:first-child": {
      marginTop: 0,
    },
  },
  projectLinksContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitleText: {
    marginRight: theme.spacing(1),
  },
  superTitle: {
    color: theme.palette.tertiary.main,
    fontWeight: "bold",
  },
  cardSubtext: {
    fontStyle: "italic",
  },
  cardSubtextContainer: {
    display: "flex",
    "& img": {
      height: 20,
      marginLeft: theme.spacing(1),
      filter: "grayscale(0.5) saturate(1)",
      transition: "filter 100ms",
      cursor: "pointer",
      "&:hover": {
        transition: "filter 100ms",
        filter: "grayscale(0) saturate(2)",
      },
      "&#mysql_logo": {
        height: 60,
      },
      "&#grpc_logo": {
        filter: "grayscale(0.5) saturate(3)",
      },
      "&#grpc_logo:hover": {
        filter: "grayscale(0) saturate(3)",
      },
    },
  },
  cardTitle: {
    textTransform: "uppercase",
    fontSize: 28,
  },
  cardTechnologies: {},
  cardProjectLinks: {},
}));

export interface IGFXProjectsProps {}

const GFXProjects: React.FC<IGFXProjectsProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.cardsContainer} id={"programming"}>
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

export default GFXProjects;
