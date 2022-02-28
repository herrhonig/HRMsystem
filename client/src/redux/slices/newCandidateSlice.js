import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async
export const addNewCandidate = createAsyncThunk(
  'newCandidate/addNewCandidat',
  async (value) => {
    const res = await axios.post('/candidate/info', { value });
    console.log('newId=', res.data.newId);
    return res.data.newId.id;
  }
);

export const addNewExp = createAsyncThunk('addNewExp/newCandidate', async (value) => {
  const id = value.hasId;
  const experiences = value.experiences
  const res = await axios.post('/candidate/exp', {id, experiences})
  if (res.status === 200) {
    return experiences
  } else {
    return false
  }
});

export const addNewEd = createAsyncThunk('addNewEd/newCandidate', async (value) => {
  const id = value.hasId;
  const education = value.education;
  const res = await axios.post('/candidate/ed', {id, education});
  if (res.status === 200) {
    return education
  } else {
    return false
  }
})

// reducer
const newCandidateSlice = createSlice({
  name: 'newCandidate',
  initialState: {
    status: '',
    id: '',
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
    desc: '',
    experiences: {
      status: '',
      company_name: '',
      position: '',
      start_date: '',
      end_date: '',
      descr: '',
    },
    education: {
      status: '',
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
    setDesc(state, { payload }) {
      state.desc = payload;
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
  extraReducers: {
    [addNewCandidate.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addNewCandidate.fulfilled]: (state, { payload }) => {
      state.id = payload;
      state.status = 'success';
    },
    [addNewCandidate.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [addNewExp.pending]: (state, action) => {
      state.experiences.status = 'loading';
    },
    [addNewExp.fulfilled]: (state, { payload }) => {
      state.experiences.company_name = payload.company_name;
      state.experiences.position = payload.position;
      state.experiences.start_date = payload.start_date;
      state.experiences.end_date = payload.end_date;
      state.experiences.descr = payload.descr;
      state.experiences.status = 'success';
    },
    [addNewExp.rejected]: (state, action) => {
      state.experiences.status = 'failed';
    },
    [addNewEd.pending]: (state, action) => {
      state.experiences.status = 'loading';
    },
    [addNewEd.fulfilled]: (state, { payload }) => {
      state.education.place = payload.place;
      state.education.start_date = payload.start_date;
      state.education.end_date = payload.end_date;
      state.education.direction = payload.direction;
      state.education.level = payload.level;
      state.education.status = 'success';

    },
    [addNewEd.rejected]: (state, action) => {
      state.experiences.status = 'failed';
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
  setDesc,
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
