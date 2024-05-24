import React, { useState, createContext } from "react"
import AppBar from "./AppBar"
import Drawer from "./Drawer"
import Content from "./Content"
import { AuthConsumer } from "../role-access/authContext"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import abg from "../assets/image/abg.png";

const Login = React.lazy(() => import("../views/pages/Login"))

export const DrawerWidth = createContext()
function TheLayout(props) {
  const [drawerWidth, setDrawerWidth] = useState(240)
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined
  const styles = {
    paperContainer: {
        height: 1356,
        backgroundImage: `url(${"../assets/image/abg.png"})`
    }
};
  return (
    <DrawerWidth.Provider value={{ drawerWidth, setDrawerWidth }}>
      <AuthConsumer>
        {({ authenticated, user, permissions }) =>
          authenticated ? (
            <div>
              <CssBaseline />
              <AppBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} PERMISSIONS={permissions} USER={user} />
              <Drawer
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                sx={{
                  backgroundColor: "#101424",
                }}
              />

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  marginLeft: { sm: `${drawerWidth}px` },
                  backgroundColor: "#e9eff2",
                  height:"100vh",
                }}
              >
                <Content/>
              </Box>
              {/* <Box
                component="footer"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  marginLeft: { sm: `${drawerWidth}px` },
                  backgroundColor: "#e9eff2",
                }}
              >
               <DataTable/>
              </Box> */}
            </div>
            
          ) : (
            <Login />
          )
        }
      </AuthConsumer>
    </DrawerWidth.Provider>
  )
}
export default TheLayout
