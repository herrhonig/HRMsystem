import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuth, signOut } from '../../redux/slices/userSlice';
import Button from '@mui/material/Button';
import SignIn from '../Signin/Signin';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';

const StartPage = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  console.log('=== is auth ===', isAuth)
  const dispatch = useDispatch();
  // CHECK AUTH:
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('TOKEN FROM LS =======>', localStorage.getItem('token'));
      dispatch(checkAuth());
    }
  }, []);
  return (
    <>
    <div>StartPage</div>
    <div>
    <SignIn />
    </div>
    

    
    </>
  )
}

export default StartPage
