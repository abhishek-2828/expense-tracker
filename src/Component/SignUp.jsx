import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Copyright Component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        expensestracker.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// SignUp Component
export default function SignUp() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
    // Clear error message for the field being edited

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = (userInput) => {
    const errors = {};
    const nameRegex = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (userInput.firstName.length === 0) {
      errors.firstName = 'First name is required';
    } else if (!nameRegex.test(userInput.firstName)) {
      errors.firstName = 'Invalid first name';
    }
  
    if (userInput.lastName.length === 0) {
      errors.lastName = 'Last name is required';
    } else if (!nameRegex.test(userInput.lastName)) {
      errors.lastName = 'Invalid last name';
    }
  
    if (userInput.email.length === 0) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(userInput.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (userInput.password.length === 0) {
      errors.password = 'Password is required';
    } else if (!passwordPattern.test(userInput.password)) {
      errors.password = 'Invalid Password!';
    }
    console.log("errors : ",errors)
    return errors;
  };

  const handleRegister = () => {
    const validationErrors = validate(userInput);

    if (Object.keys(validationErrors).length === 0) {
      console.log(userInput);
      navigate('dashboard');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          sx={{ width: '100%', marginTop: 3 }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={userInput.firstName}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={userInput.lastName}
                onChange={handleChange}
                autoComplete="lname"
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={userInput.password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegister}
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/sign-in">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}