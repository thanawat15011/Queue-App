import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import { red, green } from "@mui/material/colors";
import useHistoryhooks from "./hooks";
import { Link } from "react-router-dom";

const View = () => {
  const { history, device_status } = useHistoryhooks();
  return (
    <div>
      <Grid container spacing={2}>
        {history.map((val, key) => {
          return (
            <Grid item sm={3} key={key}>
              <Link
                to={`/history/${val.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div>
                        <Typography component="div" style={{ float: "right" }}>
                          <Avatar
                            sx={
                              device_status(val.updatedAt)
                                ? { bgcolor: green[500] }
                                : { bgcolor: red[500] }
                            }
                            aria-label="recipe"
                          >
                            {""}
                          </Avatar>
                        </Typography>
                      </div>
                      <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                        {val.device_name}
                      </Typography>
                      <Divider />
                      <Typography sx={{ mt: 1 }} color="text.secondary">
                        ipaddress: {val.device_ip}
                        <br />
                        macaddress: {val.device_mac}
                        <br />
                        ความแรงสัญญาณ wifi: {val.device_rssi}
                        <br />
                        วว/ดด/ปป: {val.updatedAt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default View;
