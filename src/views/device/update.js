import React from "react";
import useDeviceupdateHooks from "./hooks/update";
import { Paper, Grid, TextField, Divider, Button } from "@mui/material";

const Update = (props) => {
  const { id } = props.match.params;
  const { device, confirmupdate, setdata } = useDeviceupdateHooks(`${id}`);

  return (
    <Paper sx={{ p: 2 }}>
      <h4>เพิ่มอุปกรณ์</h4>
      <Divider />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item lg={3} sm={12}>
          <p>ชื่ออุปกรณ์</p>
          <TextField
            value={device.device_name}
            name="device_name"
            onChange={setdata}
            fullWidth
          />
        </Grid>
        <Grid item lg={3} sm={12}>
          <p>device id</p>
          <TextField value={device.device_id} disabled fullWidth />
        </Grid>
        <Grid item lg={3} sm={12}>
          <p>ip address</p>
          <TextField value={device.device_ip} disabled fullWidth />
        </Grid>
        <Grid item lg={3} sm={12}>
          <p>ความแรงสัญญาณ</p>
          <TextField value={device.device_rssi} disabled fullWidth />
        </Grid>
        <Grid item lg={3} sm={12}>
          <p>mac address</p>
          <TextField value={device.device_mac} disabled fullWidth />
        </Grid>
        <Grid item xs={12}>
          <p>ละติจูด</p>
          <TextField
            name="latitude"
            // value={location?.latitude || ""}
            // onChange={handlelocation}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <p>ลองติจูด</p>
          <TextField
            name="longitude"
            // value={location?.longitude || ""}
            // onChange={handlelocation}
            fullWidth
          />
        </Grid>
      </Grid>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "end" }}
      >
        <Button
          variant="outlined"
          color="error"
          onClick={() => props.history.goBack()}
        >
          ยกเลิก
        </Button>
        &nbsp;
        <Button variant="outlined" onClick={confirmupdate}>
          บันทึก
        </Button>
      </div>
    </Paper>
  );
};

export default Update;
