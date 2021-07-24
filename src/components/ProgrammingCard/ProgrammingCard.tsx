import React from "react";
import { IProgrammingCardProps } from "./interfaces";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import { useGA4React } from "ga-4-react";

export const useProgrammingCardStyles = makeStyles((theme) => ({
  cardTitle: {
    textTransform: "uppercase",
    fontSize: 28,
  },
  superTitle: {
    color: theme.palette.primary.light,
    fontWeight: "bold",
  },
  projectLinksContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitleText: {
    marginRight: theme.spacing(1),
  },
  cardProjectLinks: {},
}));

const ProgrammingCard: React.FC<IProgrammingCardProps> = ({
  title,
  wip,
  projectLinks,
}) => {
  const classes = useProgrammingCardStyles();
  const ga = useGA4React();

  const track = (label: string) => {
    if (ga) {
      ga.event("click", label, "Programming card project link", false);
    }
  };

  return (
    <div>
      <Typography className={classes.cardTitle}>{title}</Typography>
      {wip && <Typography className={classes.superTitle}>{"WIP"}</Typography>}
      {projectLinks && projectLinks.length > 0 && (
        <div className={classes.projectLinksContainer}>
          <Typography className={classes.cardTitleText}>
            {"Project links:"}
          </Typography>
          <div className={classes.cardProjectLinks}>
            {projectLinks.map((projectLink, index) => {
              const CustomIcon = projectLink.icon;
              return (
                <Tooltip
                  title={projectLink.title}
                  key={projectLink.title + index}
                >
                  <IconButton
                    href={projectLink.url}
                    target={"_blank"}
                    onClick={() => track(projectLink.title)}
                  >
                    {CustomIcon ? <CustomIcon /> : <GitHub />}
                  </IconButton>
                </Tooltip>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammingCard;
