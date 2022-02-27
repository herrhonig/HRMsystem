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
    },
  },
  reducers: {
    setFirstName(state, { payload }) {
      state.first_name = payload;
    },
    setLastName(state, { payload }) {
      state.last_name = payload;
    },
    setMiddleName(state, { payload }) {
      state.middle_name = payload;
    },
    setPhone(state, { payload }) {
      state.phone = payload;
    },
    setEmail(state, { payload }) {
      state.email = payload;
    },
    setPosition(state, { payload }) {
      state.position = payload;
    },
    setCompany(state, { payload }) {
      state.company = payload;
    },
    setMoney(state, { payload }) {
      state.money = payload;
    },
    setBirthDay(state, { payload }) {
      state.birthday_day = payload;
    },
    setBirthMonth(state, { payload }) {
      state.birthday_month = payload;
    },
    setBirthYear(state, { payload }) {
      state.birthday_year = payload;
    },
    setBirthday(state, { payload }) {
      state.birthday = payload;
    },
    setPhoto(state, { payload }) {
      state.photo = payload;
    },
    setCompanyName(state, { payload }) {
      state.experiences.company_name = payload;
    },
    setCompanyPosition(state, { payload }) {
      state.experiences.position = payload;
    },
    setStartDateWork(state, { payload }) {
      state.experiences.start_date = payload;
    },
    setEndDateWork(state, { payload }) {
      state.experiences.end_date = payload;
    },
    setDescription(state, { payload }) {
      state.experiences.descr = payload;
    },
    setPlace(state, { payload }) {
      state.education.place = payload;
    },
    setStartDateUn(state, { payload }) {
      state.education.start_date = payload;
    },
    setEndDateUn(state, { payload }) {
      state.education.end_date = payload;
    },
    setDirection(state, { payload }) {
      state.education.direction = payload;
    },
    setLevel(state, { payload }) {
      state.education.level = payload;
    },
  },
});

export default newCandidateSlice.reducer;
export const {
  setFirstName,
  setLastName,
  setMiddleName,
  setPhone,
  setEmail,
  setPosition,
  setCompany,
  setMoney,
  setBirthDay,
  setBirthMonth,
  setBirthYear,
  setBirthday,
  setPhoto,
  setCompanyName,
  setCompanyPosition,
  setStartDateWork,
  setEndDateWork,
  setDescription,
  setPlace,
  setStartDateUn,
  setEndDateUn,
  setDirection,
  setLevel,
} = newCandidateSlice.actions;
