import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Card, CardContent, LinearProgress } from '@mui/material';
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
import Loading from '../Loading/Loading';

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
    position: ''
  });


  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
      position: ''
    });

    navigate('/crm')
  }


  return (


    <div >
      <Card
        sx={{
          borderRadius: 8,
          mb: '10rem',
          ml: '10rem',
          width: '60%',
          display: 'flex',
          justifyContent: 'center'

        }}
      >
        <CardContent>

          <Grid


          >

            <Grid item>
              <Box component="form" onSubmit={submitHandler} noValidate >
                <Grid item>
                  <Typography

                    gutterBottom
                    fontSize="1rem"
                    variant="h1"
                    sx={{ pb: 2, pt: 3 }}

                  >
                    Регистрация
                  </Typography>

                </Grid>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Имя"
                  autoFocus
                  onChange={inputHandler}
                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                />
                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  required
                  fullWidth
                  id="last_name"
                  label="Фамилия"
                  name="last_name"
                  onChange={inputHandler}
                />
                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  fullWidth
                  id="lastName"
                  label="Отчество"
                  name="middle_name"
                  onChange={inputHandler}
                />

                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={inputHandler}
                />
                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={inputHandler}
                />
                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  required
                  fullWidth
                  id="phone"
                  label="Номер телефона"
                  name="phone"
                  onChange={inputHandler}
                />

                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  required
                  fullWidth
                  id="company"
                  label="Компания"
                  name="company"
                  onChange={inputHandler}
                />
                <TextField

                  sx={{ mt: 1, mb: 2, borderRadius: 23 }}
                  required
                  fullWidth
                  id="position"
                  label="Позиция"
                  name="position"
                  onChange={inputHandler}
                />
                <Grid>
                  <Link >
                    <Button
                      type="submit"

                      variant="contained"
                      sx={{ mt: 3, mb: 2, borderRadius: 11, width: '30%', height: 41 }}
                    >
                      Зарегистрироваться
                    </Button>

                    {authError && <h3 style={{ color: 'red' }}> Ошибка регистрации!</h3>}
                  </Link>
                  <Grid sx={{ p: 5 }} display="inline">
                    <Grid item>
                      <Link href="/signin" variant="body6">
                        У меня уже есть аккаунт
                      </Link>
                    </Grid>

                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
