import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";
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
  technologies: {
    height: 320,
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
      "&#docker_logo": {
        height: 100,
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
        <div className={classes.logos}>
          <a
            rel={"noreferrer"}
            href={"https://aws.amazon.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/aws.svg"}
              alt={"aws-logo"}
              id={"aws_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.adobe.com/ie/products/xd.html"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/adobe_xd.svg"}
              alt={"adobe-xd-logo"}
              id={"adobe_xd"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.arduino.cc/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/arduino.svg"}
              alt={"arduino-logo"}
              id={"arduino_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.docker.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/docker.svg"}
              alt={"docker-logo"}
              id={"docker_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.drupal.org/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/drupal.svg"}
              alt={"drupal-logo"}
              id={"drupal_logo"}
            />
          </a>
          <a rel={"noreferrer"} href={"https://git-scm.com/"} target={"_blank"}>
            <img
              src={process.env.PUBLIC_URL + "/images/git.svg"}
              alt={"git-logo"}
              id={"git_logo"}
            />
          </a>
          <a rel={"noreferrer"} href={"https://grafana.com/"} target={"_blank"}>
            <img
              src={process.env.PUBLIC_URL + "/images/grafana.svg"}
              alt={"grafana-logo"}
              id={"grafana_logo"}
            />
          </a>
          <a rel={"noreferrer"} href={"https://graphql.org/"} target={"_blank"}>
            <img
              src={process.env.PUBLIC_URL + "/images/graphql.svg"}
              alt={"graphql-logo"}
              id={"graphql_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.java.com/en/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/java.svg"}
              alt={"java-logo"}
              id={"java_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.javascript.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/javascript.svg"}
              alt={"javascript-logo"}
              id={"javascript_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://kubernetes.io/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/kubernetes.svg"}
              alt={"kubernetes-logo"}
              id={"kubernetes_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.mongodb.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/mongodb.svg"}
              alt={"mongodb-logo"}
              id={"mongodb_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://material-ui.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/mui.svg"}
              alt={"mui-logo"}
              id={"mui_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.mysql.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/mysql.svg"}
              alt={"mysql-logo"}
              id={"mysql_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.postgresql.org/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/postgresql.svg"}
              alt={"postgresql-logo"}
              id={"postgresql_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://prometheus.io/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/prometheus.svg"}
              alt={"prometheus-logo"}
              id={"prometheus_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.python.org/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/python.svg"}
              alt={"python-logo"}
              id={"python_logo"}
            />
          </a>
          <a rel={"noreferrer"} href={"https://reactjs.org/"} target={"_blank"}>
            <img
              src={process.env.PUBLIC_URL + "/images/react.svg"}
              alt={"react-logo"}
              id={"react_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.ruby-lang.org/en/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/ruby.svg"}
              alt={"ruby-logo"}
              id={"ruby_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://rubyonrails.org/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/ruby_on_rails.svg"}
              alt={"ruby_on_rails-logo"}
              id={"ror_logo"}
            />
          </a>
          <a rel={"noreferrer"} href={"https://spring.io/"} target={"_blank"}>
            <img
              src={process.env.PUBLIC_URL + "/images/spring.svg"}
              alt={"spring-logo"}
              id={"spring_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.tensorflow.org/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/tensorflow.svg"}
              alt={"tensorflow-logo"}
              id={"tensorflow_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.typescriptlang.org/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/typescript.svg"}
              alt={"typescript-logo"}
              id={"ts_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://wordpress.com/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/wordpress.svg"}
              alt={"wordpress-logo"}
              id={"wp_logo"}
            />
          </a>
          <a rel={"noreferrer"} href={"https://grpc.io/"} target={"_blank"}>
            <img
              src={process.env.PUBLIC_URL + "/images/grpc.svg"}
              alt={"grpc-logo"}
              id={"grpc_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={"https://www.android.com/intl/en_ie/"}
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/android.svg"}
              alt={"android-logo"}
              id={"android_logo"}
            />
          </a>
          <a
            rel={"noreferrer"}
            href={
              "https://en.wikipedia.org/wiki/Representational_state_transfer"
            }
            target={"_blank"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/rest.svg"}
              alt={"rest-logo"}
              id={"rest_logo"}
            />
          </a>
        </div>
      </div>
      {cards.map((card, index) => {
        return <ContentCard key={`card-${index}`} {...card} />;
      })}
    </div>
  );
};

export default About;
