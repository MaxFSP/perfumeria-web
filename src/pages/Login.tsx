import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const [register, showRegister] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      navigate("/market");
    }
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if (register) {
      const name = data.get("name");
      const email = data.get("email");
      const password = data.get("password");

      await axios
        .post(`http://localhost:3000/user`, {
          name: name,
          email: email,
          password: password,
          permission: 0,
        })
        .then((response) => {
          localStorage.setItem("userId", response.data.user.userId);
          localStorage.setItem("name", response.data.user.name);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("permission", response.data.user.permission);
          navigate("/market");
        })
        .catch(() => console.log(""));
    } else {
      const email = data.get("email");
      const password = data.get("password");

      await axios
        .post(`http://localhost:3000/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          localStorage.setItem("userId", response.data.message.userId);
          localStorage.setItem("name", response.data.message.name);
          localStorage.setItem("email", response.data.message.email);
          localStorage.setItem("permission", response.data.message.permission);
          navigate("/market");
        })
        .catch(() => console.log(""));
    }
  };

  return (
    <>
      {!register ? (
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <div
                onClick={() => {
                  showRegister(true);
                }}
              >
                {"Don't have an account? Sign Up"}
              </div>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container component="main" maxWidth="xs">
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
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign up
              </Button>
              <div
                onClick={() => {
                  showRegister(false);
                }}
              >
                {"Already have an account? Sign In"}
              </div>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
