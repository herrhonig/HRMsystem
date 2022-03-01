import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const authError = useSelector(state => state.auth.isError);
  

  const [input, setInput] = useState({
    first_name: '', 
    last_name: '', 
    middle_name: '', 
    email: '',
    password: '',
    phone: '',
    company: '', 
    position: ''});


  const inputHandler = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(input));
    
    console.log('===== after reg ===');
    setInput({
      first_name: '', 
      last_name: '', 
      middle_name: '', 
      email: '',
      password: '',
      phone: '',
      company: '', 
      position: ''});

      navigate('/crm')
  }
 
  return (
    <ThemeProvider theme={theme}>
      <Container 
      component="main"  
      sx={{
        width: 900,
        // marginTop: 8,
        // marginLeft: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      >
        <CssBaseline />
        <Box
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 3 }}>
            <Grid  spacing={2}>
              <Grid item xs={12} sm={16} mt={3}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={inputHandler}

                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  onChange={inputHandler}

                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Middle Name"
                  name="middle_name"
                  onChange={inputHandler}

                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={inputHandler}
                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={inputHandler}

                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone number"
                  name="phone"
                  onChange={inputHandler}

                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  required
                  fullWidth
                  id="company"
                  label="Company"
                  name="company"
                  onChange={inputHandler}

                />
              </Grid>
              <Grid item xs={12} sm={16} mt={2}>
                <TextField
                  required
                  fullWidth
                  id="position"
                  label="Position"
                  name="position"
                  onChange={inputHandler}

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            {/* {authError && <h3 style={{color: 'red'}}> Ошибка регистрации!</h3>} */}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body6">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 3 }} />
      </Container>
    </ThemeProvider>
  );
}
