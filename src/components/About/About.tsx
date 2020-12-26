import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";
import { Divider, Tooltip, Typography } from "@material-ui/core";
import { TECHNOLOGIES } from "../../constants/constants";

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
  },
  divider: {
    width: "80%",
    borderColor: theme.palette.secondary.dark,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderWidth: 1,
  },
}));

const cards = [
  {
    title: "Full time Software Engineer",
    context: "2020",
    content:
      "Currently employed at Pilz as a full-stack software engineer, working primarily with React, Spring Boot, AWS, ElectronJS, and various other miscellaneous technologies, frameworks and database systems such as Drupal CMS, Docker, PostgreSQL and Selenium.",
  },
  {
    title: "Internship as a Software Engineer",
    context: "2019",
    content:
      "I did an 8 month internship at Pilz, where I was put on a team and worked as a full stack developer, working on frontend, backend, CI/CD and everything in-between.",
  },
  {
    title: "BSc in Software Development",
    context: "2016-2020",
    content:
      "I studied for 4 years at the Cork Institute of Technology, where I graduated with a BSc in Software Development with First Class Honours",
  },
  {
    title: "Best math student award",
    context: "2017",
    content:
      "Received an award which recognised me as the best match student by the Faculty of Engineering and Science at the Cork Institute and Technology",
  },
  {
    title: "Competed in CanSat (ESA hosted event)",
    context: "2015",
    content:
      " I entered a CanSat competition which was run by the European Space Agency (ESA) with a team of four. The objective was to create a mini satellite from a can sized object, this is where I gained experience working with Arduino and basic C. The satellite was successfully launched at the Birr Castle where it gathered various sensor data while it was in the air.",
  },
  {
    title: "Assisted in teaching CoderDojo",
    context: "2014",
    content:
      "I able to assist in teaching other students at the local CoderDojo in my school during this time, where I helped with JS/Java primarily.",
  },
  {
    title: "Munster Programming Training",
    context: "2014",
    content:
      "Attended and finished Munster Programming Training at UCC. Worked mainly with web development features (Frontend/Backend/Deployment). This was done while I was still in secondary school.",
  },
  {
    title: "NXT Robotics",
    context: "2012-2014",
    content:
      "Myself and a group of friends entered NXT Lego Robotics competitions throughout this time, first of which took place at the Cork Institute of Technology and the other we travelled to Galway to compete with other schools.",
  },
];

export interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}) => {
  const classes = useStyles();

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
                <a rel={"noreferrer"} href={technology.link} target={"_blank"}>
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
      {cards.map((card, index) => {
        return <ContentCard key={`card-${index}`} {...card} />;
      })}
    </div>
  );
};

export default About;
