import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const newCandidateSlice = createSlice({
  name: 'newCandidate',
  initialState: {
      id: false,
      last_name: '',
      first_name: '',
      middle_name: '',
      phone: '',
      email: '',
      position: '',
      company: '',
      money: '',
      birthday_day: '',
      birthday_month: '',
      birthday_year: '',
      birthday: '',
      photo: '',
      experiences: {
        company_name: '',
        position: '',
        start_date: '',
        end_date: '',
        descr: '',
      },
      education: {
        place: '',
        start_date: '',
        end_date: '',
        direction: '',
        level: '',
      }
    },
  reducers:{
    setFirstName (state, action) {
      
    },
    setLastName (state, action) {

    },
    setMiddleName (state, action) {

    },
    setPhone (state, action) {

    },
    setEmail (state, action) {

    },
    setPosition (state, action) {

    },
    setCompany (state, action) {

    },
    setMoney (state, action) {

    },
    setBirthDay (state, action) {

    },
    setBirthMonth (state, action) {

    },
    setBirthYear (state, action) {

    },
    setBirthday (state, action) {

    },
    setPhone (state, action) {

    },
  }
});

export default newCandidateSlice.reducer;