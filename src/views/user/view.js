import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useUserHooks from "./hooks";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PageviewIcon from '@mui/icons-material/Pageview';




const View = () => {
  const { user, loading, confirmdelete, useEffect, role, ftRole, anchorEl, open, handleClick, handleClose ,getMenuId ,uuid } = useUserHooks();
  
  
  return (
    <>
      <Link Link style={{ textDecoration:"none"}} 
      to="/user/create" >
        <Button variant="contained" style={{ display: "flex", marginLeft: "auto" }}>
          เพิ่มข้อมูล
        </Button>
      </Link>
      &nbsp;
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              <TableRow>
                <TableCell style={{ width: 160 }} align="center">
                  ชื่อผู้ใช้
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  สิทธิ์
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  จัดการ
                </TableCell>

              </TableRow>
            </TableBody>
            <TableFooter>
              {user.map((val, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell style={{ width: 160 }} align="center">
                      {val.username}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                      {val.role_name}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">

                      <Tooltip>
                        <IconButton onClick={(e) => handleClick(e,val.user_table_uuid)} sx={{ p: 0 }}>
                          <Avatar sx={{ bgcolor: green[500] }} >
                            <AssignmentIcon />
                          </Avatar>
                          &nbsp;&nbsp;
                          <Link to={`/user/detail/${val.user_table_uuid}`} variant="body2">
                          <Avatar sx={{ bgcolor: pink[500] }}>
                              <PageviewIcon />      
                          </Avatar>
                          </Link>
                        </IconButton>
                      </Tooltip>
            
                    </TableCell>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <Link style={{ textDecoration:"none", color:"black"}} align="center"
                         to={`/user/${uuid}`} variant="body2">
                        <MenuItem
                          key="edit">
                            <EditIcon color="warning" />
                            แก้ไขผู้ใช้
                        </MenuItem>
                        </Link>
                        <MenuItem onClick={() => confirmdelete(uuid)}>
                          <DeleteIcon color="error" />
                          ลบข้อมูล
                        </MenuItem>
                      </Menu>
                  </TableRow>
                  
                );
              })}
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );

};

export default View;
