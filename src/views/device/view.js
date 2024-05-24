import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import useDeviceHooks from "./hooks";
import { Link } from "react-router-dom";

const View = () => {
  const { device, loading, confirmdelete } = useDeviceHooks();
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            <TableRow>
              <TableCell style={{ width: 160 }} align="center">
                ชื่ออุปกรณ์
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                id
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                อุณหภูมิ
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                ความแรงสัญญาณ
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                แรงดัน
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                จัดการ
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            {device.map((val, index) => {
              return (
                <TableRow key={index}>
                  <TableCell style={{ width: 160 }} align="center">
                    {val.device_name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {val.device_id}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {val.device_temp} C
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {val.device_rssi}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {val.batt_voltage} V
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="center">
                    {!val.device_type ? (
                      <Link to={`/device/${val.id}`}>
                        <Button variant="outlined">เพิ่ม</Button>
                      </Link>
                    ) : (
                      <Button variant="outlined" color="error" onClick={() => confirmdelete(val.id)}>
                        ลบ
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default View;
