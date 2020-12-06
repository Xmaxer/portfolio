import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

const useStyles = makeStyles((theme) => ({}));

export interface IAppRouterProps {}

const AppRouter: React.FC<IAppRouterProps> = ({}) => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
