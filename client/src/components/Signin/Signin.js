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
import { loginUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router';

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

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authError = useSelector(state => state.auth.isError);

  const [input, setInput] = useState({ email: '', password: ''});

  const inputHandler = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  //REDIRECT:
  const afterSubmitHandler = () => navigate('/crm');
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(input));
    
    console.log('===== after login ===');
    setInput({email: '', password: ''});
    afterSubmitHandler();
  }


  return (
    <ThemeProvider theme={theme}>
      <Container 
      component="main" 
      // maxWidth="xs"
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
          sx={{
            width: 420,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 3 }}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={inputHandler}
            />
            <TextField
              sx={{ mt: 1 }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={inputHandler}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Link>

              {/* {authError && <h3 style={{color: 'red'}}> Ошибка авторизации!</h3>} */}

            <Grid container>
              
              <Grid item>
                <Link href="/signup" variant="body2">
                  <Button>
                  {"Don't have an account? Sign Up"}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 15, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
