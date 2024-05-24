import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import DataTable from "../../component/overciewComponent/data-table";
import abg from "../../assets/image/abg.png";
import Queue from "../../component/overciewComponent/queue";

const View = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleString('th-TH-u-ca-buddhist', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
   
  });

  const formattedTime = currentTime.toLocaleString('th-TH-u-ca-buddhist', {
    hour: 'numeric',
    minute: 'numeric',
    second:'numeric',
    hour12: false,
  });

  return (
    <Grid container spacing={2} sx={{ mt: 0.5,height:"100vh" }} >
      {/* <Grid item xs={12} sm={12} md={3} >
        <Card>
          <br></br>
          <Typography variant="h3" gutterBottom textAlign="center">
            {formattedDate}
          </Typography>
          <Typography variant="h3" gutterBottom textAlign="center">
            {formattedTime} น.
          </Typography>
          <DataTable />
        </Card>
      </Grid> */}
      <Grid item xs={12} sm={12} md={12} 
      sx={{
        backgroundImage: `url(${abg})`,
        backgroundSize: "auto auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundColor: "rgba(255, 255, 255, 0.1)"
      }}>
        <Queue />
      </Grid>
    </Grid>
  );
};

export default View;
