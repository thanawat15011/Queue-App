import React, { Suspense, useCallback } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import routes from "../routes"
import abg from "../assets/image/abg.png";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = (props, { open, toggleDrawer }) => {
  const { PERMISSIONS, USER } = props
  const _generatePermission = (data) =>
    PERMISSIONS.find((item) => item.menu_name === data.key) || {
      permission_view: false,
      permission_add: false,
      permission_edit: false,
      permission_approve: false,
      permission_cancel: false,
      permission_delete: false,
    }

  return (
    <Suspense
      fallback={loading}
      sx={{ 
      maxWidth: "auto",
      margin: "auto", 
      overflow: "hidden",    
    }}
    >
      <Switch>
        {routes.map((route, idx) => {
          // let PERMISSION = _generatePermission({ key: route.key, })
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component />}
              />
            )
          )
        })}
        <Redirect from="/" to="/" />
      </Switch>
    </Suspense>
  )
}

export default React.memo(TheContent)
