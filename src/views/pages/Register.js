import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Swal from "sweetalert2";
import { AuthenModel } from "../../models";
const authen_model = new AuthenModel();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      Swal.fire({
        title: "ไม่สามารถสมัครสมาชิกได้!",
        text: "รหัสผ่านไม่ตรงกัน",
        icon: "error",
      });
      return;
    }

    setLoading(true);
    const RegisterObject = {
      username,
      password: password1,
    };

    try {
      const response = await authen_model.register(RegisterObject);
      const { code, error_message } = response;

      if (code !== 400) {
        Swal.fire({
          title: "สมัครสมาชิกเรียบร้อย !",
          text: "",
          icon: "success",
        }).then(() => {
          window.location.href = "/login";
        });
      } else {
        Swal.fire({
          title: "เกิดข้อผิดพลาด !",
          text: error_message,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
    setUsername("");
    setPassword1("");
    setPassword2("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          สมัครสมาชิก
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                autoComplete="new-password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            สมัครสมาชิก
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
