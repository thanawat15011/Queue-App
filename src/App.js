import React, { Component } from "react"
import {
  BrowserRouter ,
  Route,
  Switch,
} from "react-router-dom"
import Auth from "./component/auth/Auth"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
// Import the Kanit font CSS
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Layout = React.lazy(() => import("./containers/layout"))
const Register = React.lazy(() =>import ("./views/pages/Register")) 
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <Auth>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <Route
                path="/register"
                name="หน้าแรก"
                render={(props) => <Register {...props} />}
              />
              <Route
                path="/"
                name="หน้าแรก"
                render={(props) => <Layout {...props} />}
              />
           
            </Switch>
          </React.Suspense>
        </BrowserRouter>
        </Auth>
    )
  }
}

export default App
