import React from "react";
import { Route, Switch } from "react-router-dom";
const Update = React.lazy(() => import("./update"));
const View = React.lazy(() => import("./view"));

const Asset = ({ SESSION }) => {
  return (
    <Switch>
      <Route path={`/device/view`} render={(props) => <View {...props} />} />
      <Route path={`/device/:id`} render={(props) => <Update {...props} />} />
      <Route path={`/`} render={(props) => <View {...props} />} />
    </Switch>
  );
};

export default Asset;
