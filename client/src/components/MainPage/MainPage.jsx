import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuth, signOut } from '../../redux/slices/userSlice';
import Button from '@mui/material/Button';
import SignIn from '../Signin/Signin';
import { useNavigate } from 'react-router';
import TryMenu from '../NavBar/FooterMenu';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);

  //REDIRECT:
  // const afterSubmitHandler = () => ;

  const logoutHandler = () => {
    dispatch(signOut());
    navigate('/');
  }

  return (
    <>
    <div>MainPage</div>
    <div>
      {isAuth &&
        <>
          <span>Пользователь авторизован</span>
          <Button onClick={logoutHandler}>logout</Button>
        </>
          }
    </div>
    <TryMenu />
    </> 
  )
}

export default MainPage
