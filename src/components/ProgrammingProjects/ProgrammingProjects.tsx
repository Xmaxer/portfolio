import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard from "../ContentCard/ContentCard";
import { PROGRAMMING_PROJECTS } from "../../constants/ProgrammingProjects";
import ProgrammingCard from "../ProgrammingCard/ProgrammingCard";
import Subtext from "../ProgrammingCard/Subtext/Subtext";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
    "& > *:first-child": {
      marginTop: 0,
    },
  },
}));

export interface IProgrammingProjectsProps {}

const ProgrammingProjects: React.FC<IProgrammingProjectsProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.cardsContainer} id={"programming"}>
      {PROGRAMMING_PROJECTS.map((card, index) => {
        return (
          <ContentCard
            key={`card-${index}`}
            content={card.content}
            title={
              <ProgrammingCard
                title={card.title}
                wip={card.wip}
                projectLinks={card.projectLinks}
              />
            }
            subtext={<Subtext technologies={card.technologies} />}
          />
        );
      })}
    </div>
  );
};

export default ProgrammingProjects;
