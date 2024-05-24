import React from "react";
import useUserupdateHooks from "./hooks/update";
import useUserHooks from "./hooks/index";
import { Paper, Grid, TextField, Divider, Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"

const Update = (props) => {
    const { id } = props.match.params;
    const { user, setvalue, confirmupdate } = useUserupdateHooks(`${id}`);
    const { role } = useUserHooks();
    return (
        <Paper sx={{ p: 2 }}>
            <h4>รายละเอียด</h4>
            <Divider />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item lg={3} sm={12}>
                    <p>ชื่อผู้ใช้</p>
                    <TextField
                        value={user.username}
                        name="username"
                        onChange={setvalue}
                        fullWidth
                        disabled
                    />
                </Grid>
                <Grid item lg={3} sm={12}>
                    <p>สิทธิ์</p>
                    <FormControl style={{ marginTop: "10px", display: "flex", justifyContent: "end" }}
                    >
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={user.role_table_uuid}
                            label="Role"
                            onChange={setvalue}
                            name="role_table_uuid"
                            disabled
                        >
                            {role.map((option) => (
                                <MenuItem key={option.role_table_uuid} value={option.role_table_uuid}>
                                    {option.role_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
          ย้อนกลับ
        </Button>

            </div>
        </Paper>
    );
};

export default Update;
