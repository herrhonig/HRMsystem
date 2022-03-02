import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuth, signOut } from '../../redux/slices/userSlice';
import SignIn from '../Signin/Signin';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

const StartPage = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log('======= start page is auth =====>', isAuth);
  return (
    <>
    <div>StartPage</div>
      <Box
      sx={{
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
      >
        <h3>{String(isAuth)}</h3>
        <h1>Page of CRM description:</h1>
        <Box
        sx={{
          width: 200,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 5,
          
        }}
        >
          <Link to={`/signin`}>
            <Button variant="outlined" color="error">
              Sign In
            </Button>
          </Link>

          <Link to={`/signup`}>
            <Button variant="outlined" color="success">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>

    
    </>
  )
}

export default StartPage
