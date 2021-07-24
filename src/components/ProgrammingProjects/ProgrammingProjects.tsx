import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import { GitHub, Language } from "@material-ui/icons";
import ContentCard from "../ContentCard/ContentCard";
import { TECHNOLOGIES } from "../../constants/technologies";
import { trackAction } from "../../tracker";

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
    color: theme.palette.primary.light,
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

export interface IProgrammingProjectsProps {}

const ProgrammingProjects: React.FC<IProgrammingProjectsProps> = ({}) => {
  const classes = useStyles();

  const trackClick = (action: string) => {
    trackAction("Programming project viewing", action);
  };

  const cards = [
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"This Website!"}
          </Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"Portfolio project"}>
                <IconButton
                  href={"https://github.com/Xmaxer/portfolio"}
                  target={"_blank"}
                  onClick={() => trackClick("Portfolio project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "This website, built using React+TS, is a simple static website with the sole purpose of displaying all my work. Maybe I'll add a backend in the future for this, when the requirement arises.",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              ["typescript", "javascript", "react", "eslint", "mui"].includes(
                technology.id
              )
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"Common Components"}
          </Typography>
          <Typography className={classes.superTitle}>WIP</Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"Common components"}>
                <IconButton
                  href={
                    "https://github.com/Xmaxer/common-components/tree/develop"
                  }
                  target={"_blank"}
                  onClick={() => trackClick("Common components project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "A common components library based on Material UI. Built with the same principles in mind, with the purpose of extending components to build more specialized, higher (and lower) level components for internal and external projects.",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              [
                "typescript",
                "javascript",
                "react",
                "eslint",
                "mui",
                "jest",
              ].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"OS Society Player Management"}
          </Typography>
          <Typography className={classes.superTitle}>WIP</Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"Frontend project"}>
                <IconButton
                  href={
                    "https://github.com/Xmaxer/os-society-app/tree/competitions"
                  }
                  target={"_blank"}
                  onClick={() =>
                    trackClick("OS Society frontend project click")
                  }
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
                  onClick={() => trackClick("OS Society backend project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "A user management system build specifically for the OS Society gaming community administration, which has features to keep track of each community member and their relevant statistics, as well as competition handling and hopefully more feature to come!",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              [
                "typescript",
                "javascript",
                "react",
                "eslint",
                "mui",
                "jest",
                "ruby",
                "rubyonrails",
                "graphql",
                "travis",
                "postgresql",
              ].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"Predictive Maintenance ML Application"}
          </Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"Frontend project"}>
                <IconButton
                  href={"https://github.com/Xmaxer/pm_app"}
                  target={"_blank"}
                  onClick={() => trackClick("FYP frontend project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Backend project"}>
                <IconButton
                  href={"https://github.com/Xmaxer/pm_app_api"}
                  target={"_blank"}
                  onClick={() => trackClick("FYP backend project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
              <Tooltip title={"gRPC Server"}>
                <IconButton
                  href={"https://github.com/Xmaxer/pm_app_grpc_server"}
                  target={"_blank"}
                  onClick={() => trackClick("FYP gRPC project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Docker configs"}>
                <IconButton
                  href={"https://github.com/Xmaxer/pm_app_docker"}
                  target={"_blank"}
                  onClick={() => trackClick("FYP docker config projects click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
              <Tooltip title={"gRPC Protos configs"}>
                <IconButton
                  href={"https://github.com/Xmaxer/pm_app_grpc_protos"}
                  target={"_blank"}
                  onClick={() => trackClick("FYP gRPC protos project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "This was my final year project, which uses a lot of technologies combined together! This project was created to receive machine sensory data, create specialized ML models, and output metrics such as the Remaining Useful Life and anything else required visually in Grafana",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              [
                "javascript",
                "react",
                "eslint",
                "mui",
                "ruby",
                "rubyonrails",
                "graphql",
                "tensorflow",
                "python",
                "postgresql",
                "prometheus",
                "influxdb",
                "grafana",
                "docker",
                "grpc",
              ].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"Brackeys Jam 2020.2 (Infinity)"}
          </Typography>

          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"Itch.io project"}>
                <IconButton
                  href={"https://xmaxer.itch.io/infinity"}
                  target={"_blank"}
                  onClick={() =>
                    trackClick("GameJam 2020.2 (Infinity) project click")
                  }
                >
                  <Language />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "My first participation in a Game Jam. This project (game) was created in just 1 week, and involved a lot from design, programming (C++/UE4 blueprints) and 3D design. And a lot of sleepless nights.",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              ["ue", "c++"].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"Transport-AI"}
          </Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"Frontend project"}>
                <IconButton
                  href={
                    "https://github.com/Xmaxer/TransportAI-Web/tree/development"
                  }
                  target={"_blank"}
                  onClick={() =>
                    trackClick("Transport-AI web app project click")
                  }
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
                  onClick={() =>
                    trackClick("Transport-AI mobile app project click")
                  }
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Arduino project"}>
                <IconButton
                  href={"https://github.com/Xmaxer/transportAI-Arduino"}
                  target={"_blank"}
                  onClick={() =>
                    trackClick("Transport-AI arduino project click")
                  }
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "An uber-like clone, except automated and simulated using an Arduino instead of a real car (As otherwise that would be expensive for a college project). Build using Rails, Android (Java), and some basic C. The web based portion is the admin portal, to view the fleet. The Android project is the user facing app.",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              [
                "c",
                "arduino",
                "android",
                "androidstudio",
                "java",
                "ruby",
                "rubyonrails",
                "javascript",
                "firestore",
                "postgresql",
              ].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>{"OSS Bot"}</Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"OSSBot project"}>
                <IconButton
                  href={"https://github.com/Xmaxer/OSSBot"}
                  target={"_blank"}
                  onClick={() => trackClick("OSSBot project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "A text command orientated bot, reads input from any user within the game (OldSchool RuneScape) and retrieves, and responds with requested data by replying in-game.",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              ["java"].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
    },
    {
      title: (
        <div>
          <Typography className={classes.cardTitle}>
            {"Basic Flight Booking App"}
          </Typography>
          <div className={classes.projectLinksContainer}>
            <Typography className={classes.cardTitleText}>
              Project links:
            </Typography>
            <div className={classes.cardProjectLinks}>
              <Tooltip title={"OSSBot project"}>
                <IconButton
                  href={"https://github.com/Xmaxer/Flight-Booking-App"}
                  target={"_blank"}
                  onClick={() => trackClick("Flight booking app project click")}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ),
      content:
        "A basic flight booking application made in Java, an early Database Design project. Utilizes the SkyScanner API to retrieve flight day, and allows you to book outgoing and return flights with dates.",
      subtext: (
        <div className={classes.cardSubtextContainer}>
          <Typography className={classes.cardSubtext}>
            Technologies Used:
          </Typography>
          <div className={classes.cardTechnologies}>
            {TECHNOLOGIES.filter((technology) =>
              ["java", "rest"].includes(technology.id)
            ).map((technology, index) => {
              return (
                <Tooltip title={technology.title} key={`technology-${index}`}>
                  <a
                    rel={"noreferrer"}
                    href={technology.link}
                    target={"_blank"}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/" +
                        technology.filename
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
      ),
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
