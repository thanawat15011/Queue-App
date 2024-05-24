import React from "react"
import { Route, Switch } from "react-router-dom"
const View = React.lazy(() => import("./view"))

const Sequence = ({ SESSION }) => {
  return (
    <Switch>
      <Route
        path={`/sequence/view`}
        render={(props) => <View {...props}  />}
      />
      <Route path={`/`} render={(props) => <View {...props} />} />
    </Switch>
  )
}

export default Sequence
