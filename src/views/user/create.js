import React from "react";
import useCreateUserHooks from "./hooks/create";
import useUserHooks from "./hooks/index";
import { Paper, Grid, TextField, Divider, Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"

const Update = (props) => {
  const { id } = props.match.params;
  const { province, distrinct, subdistrinct, data, setvalue , confirmcreate} = useCreateUserHooks();
  const { role } = useUserHooks();
  

  return (
    <Paper sx={{ p: 2 }}>
      <h4>เพิ่มผู้ใช้</h4>
      <Divider />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item lg={3} sm={12}>
          <p>
            ชื่อผู้ใช้
            <span style={{ color: "red" }}> *</span>
            </p>
          <TextField
            value={data.username}
            name="username"
            onChange={setvalue}
            fullWidth
          />
        </Grid>
        <Grid item lg={3} sm={12}>
          <p>
            สิทธิ์
            <span style={{ color: "red" }}> *</span>
          </p>
          <FormControl style={{ marginTop: "10px", display: "flex", justifyContent: "end" }}
      > 
          <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={data.role_table_uuid}
                      label="Role"
                      onChange={setvalue}
                      name="role_table_uuid"
                    >
                     {role.map((option) => (
                      <MenuItem key={option.role_tavable_uuid} value={option.role_table_uuid}>
                        {option.role_name}
                      </MenuItem>
                    ))}
                    </Select>
                    </FormControl>
        </Grid>
        <Grid item lg={3} sm={12}>
          <p>
            รหัสผ่าน
            <span style={{ color: "red" }}> *</span>
            </p>
          <TextField value={data.password}  fullWidth onChange={setvalue} name="password"/>
        </Grid>
      </Grid>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "end" }}
      >
        <Button variant="outlined" onClick={confirmcreate} >
          บันทึก
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="outlined"
          color="error"
          onClick={() => props.history.goBack()}
        >
          ยกเลิก
        </Button>
        
        
      </div>
    </Paper>
  );
};

export default Update;
