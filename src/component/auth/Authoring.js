import React from "react"
import { Backdrop } from "@material-ui/core"
import CircularProgress from "@mui/material/CircularProgress"
const Authoring = () => {
  return (
    <Backdrop
      open={true}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <CircularProgress color="inherit" />
      <div>
        <h2>กำลังโหลดข้อมูล...</h2>
        <p>กรุณารอสักครู่</p>
      </div>
    </Backdrop>
  )
}
export default Authoring
