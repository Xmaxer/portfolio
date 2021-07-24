import React from "react";
import { ISubtextProps } from "./interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Typography } from "@material-ui/core";
import { useGA4React } from "ga-4-react";

export const useSubtextStyles = makeStyles((theme) => ({
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
  cardSubtext: {
    fontStyle: "italic",
  },
  cardTechnologies: {},
}));

const Subtext: React.FC<ISubtextProps> = ({ technologies }) => {
  const classes = useSubtextStyles();
  const ga = useGA4React();

  const track = (label: string) => {
    if (ga) {
      ga.event("click", label, "Technology link interest", false);
    }
  };

  return technologies.length > 0 ? (
    <div className={classes.cardSubtextContainer}>
      <Typography className={classes.cardSubtext}>
        {"Technologies Used:"}
      </Typography>
      <div className={classes.cardTechnologies}>
        {technologies.map((technology, index) => {
          return (
            <Tooltip
              title={technology.title}
              key={`technology-${technology.id}-${index}`}
            >
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
  ) : null;
};

export default Subtext;
