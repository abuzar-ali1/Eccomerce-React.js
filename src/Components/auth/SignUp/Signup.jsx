import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import registerImg from "./signup-g.svg";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="mt-5">
        <Box className="row ">
          <Box className="col-6">
            <img className="img-fluid" src={registerImg} alt="" />
          </Box>
          <Box className="col-5">
            <Typography className="fw-bold" variant="h5">
              Get Start Shopping
            </Typography>
            <Typography variant="body2">
              Welcome back to FreshCart Enter Your email <br /> to get started{" "}
            </Typography>
            <br />
            <Box>
              <Box className="d-flex gap-1">
                <TextField size="small" type="text" placeholder="First Name" />

                <TextField size="small" type="text" placeholder="Second Name" />
              </Box>
              <Box className="my-3">
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  placeholder="Email"
                />
              </Box>
              <Box>
                <FormControl fullWidth size="small" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <br />
              <Button className="bg-success" fullWidth variant="contained">
                Register
              </Button>

              <Typography className="my-2 text-center">
                Do have an Account? <Link to="/Sign-In">Sign In</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
