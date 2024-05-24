import React from "react";
import { Route, Switch } from "react-router-dom";
const Show = React.lazy(() => import("./show"));
const View = React.lazy(() => import("./view"));

const Asset = ({ SESSION }) => {
  return (
    <Switch>
      <Route path={`/history/view`} render={(props) => <View {...props} />} />
      <Route path={`/history/:id`} render={(props) => <Show {...props} />} />
      <Route path={`/`} render={(props) => <View {...props} />} />
    </Switch>
  );
};

export default Asset;
