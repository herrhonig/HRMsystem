import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkButton from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router';
import { Card, CardContent, LinearProgress } from '@mui/material';
import '../../index.css'
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import Alarm from '../icons/Alarm.png'
import Paper from '@mui/material/Paper'
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
// import Image from './background.png'

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authError = useSelector(state => state.auth.isError);

  const [input, setInput] = useState({ email: '', password: '' });

  const inputHandler = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(input));

    console.log('===== after login ===');
    setInput({ email: '', password: '' });
    navigate('/crm')
  }



  return (
    <Card
      sx={{
        borderRadius: 8,
        mt: '10rem',
        ml: '25rem',
        // width: '100%',
        // justifyContent: 'center'

      }}
    >
      <CardContent >

        <Grid
        >

          <Grid item>
            <Box>
              <Grid>
                <Link to="/signin">
                  <LinkButton>
                    <Button
                      type="click"

                      variant="contained"
                      sx={{ mt: 3, mb: 2, borderRadius: 11, width: "15rem", height: 41 }}
                    >
                      Войти
                    </Button>
                  </LinkButton>
                </Link>
                <Grid>
                  <Link to="/signup">
                    <LinkButton>
                      <Button
                        variant="contained"
                        sx={{ mt: 1, mb: 2, borderRadius: 11, width: "15rem", height: 41 }}
                      >
                        Зарегистрироваться
                      </Button>
                    </LinkButton>
                  </Link>
                </Grid>

              </Grid>
            </Box>
          </Grid>

        </Grid>
      </CardContent >
    </Card >



  );
}
