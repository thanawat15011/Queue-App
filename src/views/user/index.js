
import React from "react";
import { Route, Switch } from "react-router-dom";
const Update = React.lazy(() => import("./update"));
const View = React.lazy(() => import("./view"));
const Create = React.lazy(() => import("./create"));
const Detail = React.lazy(() => import("./detail"));


const Asset = ({ SESSION }) => {
  return (
    <Switch>
      <Route path={`/user/view`} render={(props) => <View {...props} />} />
      <Route path={`/user/create`} render={(props) => <Create {...props} />} />
      <Route path={`/user/detail/:id`} render={(props) => <Detail {...props} />} />
      <Route path={`/user/:id`} render={(props) => <Update {...props} />} />
      <Route path={`/`} render={(props) => <View {...props} />} />
    </Switch>
  );
};

export default Asset;
