import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 320,
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    alignItems: "center",
  },
  context: {
    fontSize: 24,
    textTransform: "uppercase",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 28,
  },
  content: {},
  titleContentContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
  },
  leftContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    minWidth: 400,
    maxWidth: 400,
    boxSizing: "border-box",
    marginLeft: theme.spacing(4),
    textAlign: "right",
  },
  divider: {
    borderColor: theme.palette.secondary.dark,
    borderWidth: 2,
    height: "80%",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  titleContainer: {
    alignSelf: "flex-start",
    marginBottom: theme.spacing(4),
  },
  subtext: {
    fontStyle: "italic",
  },
  subtextContainer: {
    marginTop: theme.spacing(4),
    alignSelf: "flex-start",
  },
}));

export interface IContentCardProps {
  context: string;
  title: string | React.ReactNode;
  content: string;
  subtext?: string | React.ReactNode;
}

const ContentCard: React.FC<IContentCardProps> = ({
  context,
  title,
  content,
  subtext,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <Typography className={classes.context}>{context}</Typography>
      </div>
      <Divider className={classes.divider} orientation={"vertical"} />
      <div className={classes.titleContentContainer}>
        <div className={classes.titleContainer}>
          {typeof title === "string" ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : (
            title
          )}
        </div>
        <Typography className={classes.content}>{content}</Typography>
        {subtext && (
          <div className={classes.subtextContainer}>
            {typeof title === "string" ? (
              <Typography className={classes.subtext}>{subtext}</Typography>
            ) : (
              subtext
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
