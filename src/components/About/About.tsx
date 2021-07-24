import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";
import { Divider, Tooltip, Typography } from "@material-ui/core";
import { TECHNOLOGIES } from "../../constants/technologies";
import { ABOUT_INFO } from "../../constants/aboutInfo";
import { useGA4React } from "ga-4-react";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    "& > *:first-child": {
      marginTop: 0,
    },
  },
  technologies: {
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  logos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    flexWrap: "wrap",
    paddingBottom: theme.spacing(4),
    "& img": {
      height: 40,
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
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
  title: {
    marginTop: "auto",
    textAlign: "center",
    backgroundColor: theme.palette.tertiary.main,
    width: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    width: "100%",
    borderColor: theme.palette.secondary.dark,
    marginBottom: theme.spacing(1),
    borderWidth: 1,
  },
}));

export interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}) => {
  const classes = useStyles();

  const ga = useGA4React();

  const track = (label: string) => {
    if (ga) {
      ga.event("click", label, "Technology link interest", false);
    }
  };

  return (
    <div className={classes.cardsContainer} id={"about"}>
      <div className={classes.technologies}>
        <Typography variant={"h4"} className={classes.title}>
          {"Technologies I've worked with at one point or another"}
        </Typography>
        <Divider className={classes.divider} />
        <div className={classes.logos}>
          {TECHNOLOGIES.map((technology, index) => {
            return (
              <Tooltip title={technology.title} key={`technology-${index}`}>
                <a
                  rel={"noreferrer"}
                  href={technology.link}
                  target={"_blank"}
                  onClick={() => track(technology.id)}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/" + technology.filename
                    }
                    alt={technology.title}
                    id={`${technology.title
                      .toLowerCase()
                      .replaceAll(" ", "_")}_logo`}
                  />
                </a>
              </Tooltip>
            );
          })}
        </div>
      </div>
      {ABOUT_INFO.map((card, index) => {
        return <ContentCard key={`card-${index}`} {...card} />;
      })}
    </div>
  );
};

export default About;
