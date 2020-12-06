import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import { GitHub, Language } from "@material-ui/icons";
import ContentCard from "../ContentCard/ContentCard";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    "& > *:first-child": {
      marginTop: 0,
    },
  },
  cardTitle: {
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
}));

export interface IProgrammingProjectsProps {}

const ProgrammingProjects: React.FC<IProgrammingProjectsProps> = ({}) => {
  const classes = useStyles();

  const cards = [
    {
      title: (
        <div>
          <Typography className={classes.superTitle}>WIP</Typography>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"Portfolio project"}>
              <IconButton
                href={"https://github.com/Xmaxer/porttfolio"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "This Website!",
      content:
        "This website, build using React+TS, is a simple static website with the sole purpose of displaying all my work. Maybe I'll add a backend in the future for this, when the requirement arises.",
    },
    {
      title: (
        <div>
          <Typography className={classes.superTitle}>WIP</Typography>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"Common components"}>
              <IconButton
                href={
                  "https://github.com/Xmaxer/common-components/tree/develop"
                }
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "Common Components",
      content:
        "A common components library based on Material UI. Built with the same principles in mind, with the purpose of extending components to build more specialized, higher (and lower) level components for internal and external projects.",
    },
    {
      title: (
        <div>
          <Typography className={classes.superTitle}>WIP</Typography>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"Frontend project"}>
              <IconButton
                href={
                  "https://github.com/Xmaxer/os-society-app/tree/competitions"
                }
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Backend project"}>
              <IconButton
                href={
                  "https://github.com/Xmaxer/os-society-api/tree/competitions"
                }
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "OS Society Player Management",
      content:
        "A user management system build specifically for the OS Society gaming community administration, which has features to keep track of each community member and their relevant statistics, as well as competition handling and hopefully more feature to come!",
    },
    {
      title: (
        <div>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"Frontend project"}>
              <IconButton
                href={"https://github.com/Xmaxer/pm_app"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Backend project"}>
              <IconButton
                href={"https://github.com/Xmaxer/pm_app_api"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"gRPC Server"}>
              <IconButton
                href={"https://github.com/Xmaxer/pm_app_grpc_server"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Docker configs"}>
              <IconButton
                href={"https://github.com/Xmaxer/pm_app_docker"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"gRPC Protos configs"}>
              <IconButton
                href={"https://github.com/Xmaxer/pm_app_grpc_protos"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "Predictive Maintenance ML Application",
      content:
        "This was my final year project, which uses a lot of technologies combined together! This project was created to receive machine sensory data, create specialized ML models, and output metrics such as the Remaining Useful Life and anything else required visually in Grafana",
    },
    {
      title: (
        <div>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"Itch.io project"}>
              <IconButton
                href={"https://xmaxer.itch.io/infinity"}
                target={"_blank"}
              >
                <Language />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "Brackeys Jam 2020.2 (Infinity)",
      content:
        "My first participation in a Game Jam. This project (game) was created in just 1 week, and involved a lot from design, programming (C++/UE4 blueprints) and 3D design. And a lot of sleepless nights.",
    },
    {
      title: (
        <div>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"Frontend project"}>
              <IconButton
                href={
                  "https://github.com/Xmaxer/TransportAI-Web/tree/development"
                }
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Backend project"}>
              <IconButton
                href={
                  "https://github.com/Xmaxer/TransportAI-App/tree/development"
                }
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Arduino project"}>
              <IconButton
                href={"https://github.com/Xmaxer/transportAI-Arduino"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "Transport-AI",
      content:
        "An uber-like clone, except automated and simulated using an Arduino instead of a real car (As otherwise that would be expensive for a college project). Build using Rails, Android (Java), and some basic C. The web based portion is the admin portal, to view the fleet. The Android project is the user facing app.",
    },
    {
      title: (
        <div>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"OSSBot project"}>
              <IconButton
                href={"https://github.com/Xmaxer/OSSBot"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "OSS Bot",
      content:
        "A text command orientated bot, reads input from any user within the game (OldSchool RuneScape) and retrieves, and responds with requested data by replying in-game.",
    },
    {
      title: (
        <div>
          <div className={classes.cardTitle}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <Tooltip title={"OSSBot project"}>
              <IconButton
                href={"https://github.com/Xmaxer/Flight-Booking-App"}
                target={"_blank"}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      ),
      context: "Basic Flight Booking App",
      content:
        "A basic flight booking application made in Java, an early Database Design project. Utilizes the SkyScanner API to retrieve flight day, and allows you to book outgoing and return flights with dates.",
    },
  ];

  return (
    <div className={classes.cardsContainer} id={"programming"}>
      {cards.map((card, index) => {
        return <ContentCard key={`card-${index}`} {...card} />;
      })}
    </div>
  );
};

export default ProgrammingProjects;
