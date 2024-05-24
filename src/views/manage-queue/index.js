import React from "react"
import { Route, Switch } from "react-router-dom"
const View = React.lazy(() => import("./view"))

const Asset = ({ SESSION }) => {
  return (
    <Switch>
      <Route
        path={`/manage-queue/view`}
        render={(props) => <View {...props}  />}
      />
      <Route path={`/`} render={(props) => <View {...props} />} />
    </Switch>
  )
}

export default Asset
