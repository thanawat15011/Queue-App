import React, { useContext } from "react";
import {
  Select,
  AppBar,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider"; // เพิ่มบรรทัดนี้
import { DrawerWidth } from "./layout";
import { CompanyModel,UserModel } from "../models";
import { useEffect, useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
let company_model = new CompanyModel();
let user_model = new UserModel();
function Header(props) {
  const { drawerWidth, setDrawerWidth } = useContext(DrawerWidth);
  const [company, setCompany] = useState([]);
  const [companyid, setCompanyId] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  let user_local = localStorage.getItem("session-user")
  let { company_table_uuid } = JSON.parse(user_local)
  ? JSON.parse(user_local)
  : ""
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    let company = await company_model.getCompanyBy();
    let company_id = company_table_uuid;
    setCompanyId(company_id);
    setCompany(company.data);
  };
  const handleChange = (e) => {
    localStorage.setItem("company_table_uuid", e.target.value);
    setCompanyId(e.target.value);
    window.location.reload();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }
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
  
  return drawerWidth > 0 ? (
    <AppBar
      position="relative"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
        backgroundColor: "#1aa4e7",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            props.handleDrawerToggle();
            drawerWidth > 0 ? setDrawerWidth(0) : setDrawerWidth(240);
          }}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          ระบบจัดการคิว
        </Typography>
        <Typography variant="h6" gutterBottom textAlign="center" style={{ margin: "auto" }}>
          {formattedDate}
          {formattedTime} น.
        </Typography>
        <FormControl sx={{ marginLeft: "auto", minWidth: 200, padding: "4px" }}>
          <InputLabel id="demo-multiple-name-label">
            เลือกสถานให้บริการ
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            onChange={handleChange}
            name="company_table_uuid"
            value={companyid}
            disabled
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {company.map((val, key) => {
              return (
                <MenuItem
                  key={val.company_table_uuid}
                  value={val.company_table_uuid}
                >
                  {val.company_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <MenuItem onClick={logout}>LOGOUT</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  ) : null;
}
export default Header;
