import React from "react";
import { Line } from "react-chartjs-2";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Divider,
  MenuItem,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useShowHistoryHooks from "./hooks/show";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Show = (props) => {
  const { id } = props.match.params;
  const { voltage, attributes, device_status } = useShowHistoryHooks(id);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Card sx={{ height: 123 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                {attributes.device_name}
              </Typography>
              <Typography sx={{ fontSize: 18 }} color="text.secondary">
                {device_status(attributes?.updatedAt) ? "Online" : "Offline"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card sx={{ height: 123 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                Batterry
              </Typography>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    12
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card sx={{ height: 123 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                Issue
              </Typography>
              <Typography sx={{ fontSize: 18 }} color="text.secondary">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item sm={12}>
          <Card>
            <CardContent>
              <div style={{ marginBottom: 2 }}>
                <h3>แรงดันแบตเตอรี่</h3>
              </div>
              <Line
                data={voltage}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
                style={{ maxHeight: 150 }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12}>
          <Card>
            <CardContent>
              <div style={{ marginBottom: 2 }}>
                <h3>แรงดันแบตเตอรี่</h3>
              </div>
              <Line
                data={voltage}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
                style={{ maxHeight: 150 }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12}>
          <Card>
            <CardContent>
              <div style={{ marginBottom: 2 }}>
                <h3>แรงดันแบตเตอรี่</h3>
              </div>
              <Line
                data={voltage}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
                style={{ maxHeight: 150 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Show;
