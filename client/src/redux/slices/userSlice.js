import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import api, { API_URL } from '../../http';

// THUNK:
export const registerUser = createAsyncThunk('auth/registerUser', async (input) => {
  console.log('registrateUser work-----------------', input);
  return api.post('/users/signup', input); // {input} ?
});
export const loginUser = createAsyncThunk('auth/loginUser', async (input) => { 
  console.log('loginUser work-----------------', input);
  return api.post('/users/signin', input); // {input} ?
});
export const signOut = createAsyncThunk('auth/signOut', async () => {
  console.log('logOut work-----------------');
  return api.post('/users/signout');
});
export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  console.log('refresh work-----------------');
  const response = await axios(`${API_URL}/users/refresh`, { withCredentials: true });
  return response;
});
  
// init State:
const initState = {
  list: [],
  status: '',
  isError: '',
  isAuth: false,
  firstName: '',
  lastName: '',
  middleName: '',
  phone: '',
  position: '',
  company: '',
  access: false,
};

const userSlice = createSlice({
  name: 'auth',
  initState,
  extraReducers: {
    ////////////////////////// SIGN UP //////////////////////////
    [registerUser.pending]: (state) => {
      console.log('registrateUser pending--------------');
      state.status = 'loading';
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      if (payload.status === 200) {
        console.log('registrateUser fullfiled++++++++++++++++++++++++++++', payload);
        state.isError = '';
        // localStorage.setItem('token', payload.data.accessToken);
      }
    },
    [registerUser.rejected]: (state, payload) => {
      console.log('registrateUser rejected++++++++++++++++++++++++++++', payload);
      state.status = 'failed';
      state.isError = 'Ошибка регистрации';
    },

    ////////////////////////// SIGN IN //////////////////////////
    [loginUser.pending]: (state) => {
      console.log('loginUser pending--------------');
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log('loginUser fullfiled check token field++++++++++++++++++++++++++++', payload.data);
      state.status = 'success';
      if (payload.status === 200) {
        localStorage.setItem('token', payload.data.accessToken);
        state.isAuth = true;
        state.userId = payload.data.user.id;
        state.firstName = payload.data.user.first_name;
        state.middleName = payload.data.user.middle_name;
        state.lastName = payload.data.user.last_name;
        state.email = payload.data.user.email;
        state.position = payload.data.user.position;
        state.company = payload.data.user.company;
        state.isError = '';
      }
      console.log(payload);
    },
    [loginUser.rejected]: (state, action) => {
      console.log('loginUser rejected++++++++++++++++++++++++++++');
      state.isAuth = false;
      state.status = 'failed';
      state.userName = '';
      state.userId = null;
      state.isError = 'Ошибка авторизации';
    },
    ////////////////////////// SIGN OUT ////////////////////////////
    [signOut.pending]: (state) => {
      console.log('logOut pending--------------');
      state.status = 'loading';
    },
    [signOut.fulfilled]: (state, { payload }) => {
      console.log('logOut fullfiled++++++++++++++++++++++++++++', payload.data);
      state.status = 'success';
      if (payload.status === 200) {
        state.isAuth = false;
        state.firstName = '';
        state.middleName = '';
        state.lastName = '';
        state.userId = null;
        localStorage.removeItem('token');
        state.isError = '';
      }
      console.log(payload);
    },
    [signOut.rejected]: (state, action) => {
      console.log('logOut rejected++++++++++++++++++++++++++++');
      state.isAuth = false;
      state.firstName = '';
      state.lastName = '';
      state.middleName = '';
      state.phone = '';
      state.position = '';
      state.company = '';
      state.userId = null;
      state.access = false
      state.isError = 'Ошибка что то пошло не так';
    },
      ////////////////////////// CHECK AUTH ////////////////////////////
      [checkAuth.pending]: (state) => {
        console.log('isAuth pending--------------');
        state.status = 'loading';
      },
      [checkAuth.fulfilled]: (state, { payload }) => {
        console.log('isAuth fullfiled++++++++++++++++++++++++++++', payload.data);
        state.status = 'success';
        if (payload.status === 200) {
          console.log(payload);
          localStorage.setItem('token', payload.data.accessToken);
          state.isAuth = true;
          state.userId = payload.data.user.id;
          state.firstName = payload.data.user.first_name;
          state.middleName = payload.data.user.middle_name;
          state.lastName = payload.data.user.last_name;
          state.email = payload.data.user.email;
          state.position = payload.data.user.position;
          state.company = payload.data.user.company;
          state.isError = '';
        }
        console.log(payload);
      },
      [checkAuth.rejected]: (state, action) => {
        console.log('isAuth rejected++++++++++++++++++++++++++++');
        state.isAuth = false;
        state.status = 'failed';
        state.userName = '';
        state.userId = null;
        state.isError = 'Ошибка что то пошло не так';
        state.imgPath = '';
      },
  }
})



export default userSlice.reducer
