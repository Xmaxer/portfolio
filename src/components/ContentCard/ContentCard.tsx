import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, Typography} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 320,
    // [theme.breakpoints.down("md")]: {
    //   minHeight: 600,
    // },
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    display: "flex",
    boxSizing: "border-box",
  },
  context: {
    fontSize: 24,
    textTransform: "uppercase",
    textOverflow: "ellipsis",
    overflow: "hidden",
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
    maxWidth: 1000,
    width: "100%",
  },
  leftContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    boxSizing: "border-box",
    textAlign: "left",
    width: 400,
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  divider: {
    borderColor: theme.palette.secondary.dark,
    borderWidth: 2,
    height: 280,
    [theme.breakpoints.down("md")]: {
      minHeight: 500,
    },
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  titleContainer: {
    alignSelf: "flex-start",
    marginBottom: theme.spacing(4),
    textAlign: "center",
    width: "100%",
    backgroundColor: theme.palette.tertiary.main,
    padding: theme.spacing(2),
    borderColor: theme.palette.secondary.dark,
    borderWidth: 2,
    borderBottomStyle: "solid",
  },
  subtext: {
    fontStyle: "italic",
  },
  subtextContainer: {
    marginTop: theme.spacing(4),
    alignSelf: "flex-start",
  },
  innerRoot: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(1),
    boxSizing: "border-box",
  },
  bottomContainerCentered: {
    justifyContent: "center",
  },
}));

export interface IContentCardProps {
  context?: string;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
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
      <div className={classes.innerRoot}>
        <div className={classes.titleContainer}>
          {typeof title === "string" ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : (
            title
          )}
        </div>
        <div
          className={clsx(
            classes.bottomContainer,
            !context && classes.bottomContainerCentered
          )}
        >
          {context && (
            <>
              <div className={classes.leftContainer}>
                <Typography className={classes.context}>{context}</Typography>
              </div>
              <Divider className={classes.divider} orientation={"vertical"} />
            </>
          )}
          <div className={classes.titleContentContainer}>
            {typeof content === "string" ? (
              <Typography className={classes.content}>{content}</Typography>
            ) : (
              content
            )}
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
      </div>
    </div>
  );
};

export default ContentCard;
