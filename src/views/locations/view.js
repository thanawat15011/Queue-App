import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Paper,
  Container
} from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography"
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useLocationHooks from "./hooks";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import VideocamIcon from '@mui/icons-material/Videocam';



const View = (props) => {
  const { distrinct, data, setvalue, device, center } = useLocationHooks();
const markerOptionsOff = {
  icon: {
    url: "/img/redcam.png",
    scaledSize: new window.google.maps.Size(30, 30),
  },
  iconSize: new window.google.maps.Size(30, 30),
}

  return (

    <>
      <Typography variant="h3" gutterBottom>
        Site location
      </Typography>
      <Paper>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom style={{ marginBottom: "-10px",marginTop:"7px",marginLeft:"15px" }}>
              เลือกอำเภอ
            </Typography>
            <Grid container>
              <Grid item sm={2} container spacing={2} pt={4} pl={1} style={{ marginBottom: "0px",marginLeft:"7px", width:"100px" , height:"90px" }} >
                <Select
                  labelId="amphor"
                  name="district_id"
                  fullWidth
                  value={data.district_id}
                  onChange={setvalue}
                >
                  {distrinct
                    .map((val, key) => {
                      return (
                        <MenuItem key={val.value} value={val.value}>
                          {val.label}
                        </MenuItem>
                      );
                    })}
                </Select>
              </Grid>
              <Grid item sm={6} p={2}
                style={{ marginBottom: "0px" ,marginLeft:"15px" }}>
                <FormGroup aria-label="position" row>
                  <FormControlLabel  control={<Checkbox  />} label={<span><VideocamIcon style={{ color: "blue", marginRight: "0px", verticalAlign: "middle", }} /> การทำงานปกติ</span>} style={{ marginLeft:"40px" ,marginTop:"10px" }}/>
                  <FormControlLabel  control={<Checkbox  />} label={<span><VideocamIcon style={{ color: "red", marginRight: "0px", verticalAlign: "middle", }} /> แจ้งเตือนปัญหา</span>} style={{ marginLeft:"40px" ,marginTop:"10px"}}/>
                </FormGroup>
              </Grid>
            </Grid>
          </CardContent>
          
            <Card>
              <Grid container>
                <Grid item xs={12} md={12} style={{ border: "solid 10px white" }}>
                  <div style={{position:"relative" , width:"100%" , height:"40rem"}}>
                  <Map
                    style={{ position:"absolute" , top:"0", left:"0" , bottom:"0", right:"0" , width:"100%" , height:"100%"}}
                    google={props.google}
                    zoom={14}
                    initialCenter={center} 
                    center={center}>
                    {device.map((position, index) => {
                      const validPosition = {
                        lng: position.longitude ?? 0,
                        lat: position.latitude ?? 0,
                      }
                      return (
                        <Marker
                        key={index}
                        position={validPosition}
                        options={markerOptionsOff}
                        />
                      )
                    })}
                    {/* <Marker position={ validPosition } /> */}
                  </Map>
                  </div>
                  
                </Grid>
              </Grid>
            </Card>
         
        </Card>
      </Paper>
    </>



  );
};



export default GoogleApiWrapper({
  apiKey: "AIzaSyA8_Zs4UJy-HUw8Lc17gxMOxrhNF7pEqCI",
})(View);
