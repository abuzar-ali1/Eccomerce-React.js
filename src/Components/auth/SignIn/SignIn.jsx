import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="border d-flex justify-content-center align-items-center"
    >
      <Box className="">
      <Typography className="fw-bold" variant="h5">Sign in to FreshCart</Typography>
      <Typography variant="body2">Welcome back to FreshCart Enter Your email <br /> to get started </Typography>
      <br /> 
      <Box>
        <Box>
          <TextField fullWidth size="small" type="email" placeholder="Email" />
        </Box>
        <br />
        <Box>
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
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
        <Button className="bg-success" fullWidth variant="contained">Sign In</Button>
        <Typography variant="body2">Don't have an Account? <Link to="/Sign-Up">Sign Up</Link></Typography>
       
      </Box>
      </Box>
    </div>
  );
};

export default SignIn;
