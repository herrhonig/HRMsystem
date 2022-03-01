import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addData = createAsyncThunk('newVacancy/addData', async () => {
  const res = await axios('/vacancies/data');
  return res.data;
});

export const addNewVacancy = createAsyncThunk('newVacancy/addNewVacancy', async (value) => {
 const res = await axios('/vacancies/vacancy', {value})
});

// Slice
const newVacancySlice = createSlice({
  name: 'newVacancy',
  initialState: {
    status: '',
    data: {
      status: '',
      companies: [],
      priorities: [],
      statuses: [],
    },
    position: '',
    company_id: null,
    money: '',
    priority_id: null,
    quantity: '',
    descr: '',
    requirements: '',
    conditions: '',
    hidden: false,
    status_id: null,
    deadline: '',
  },
  reducers: {
    setPositionVac(state, { payload }) {
      state.position =payload;
    },
    setCompanyVac(state, { payload }) {
      state.company_id =payload;
    },
    setMoneyVac(state, { payload }) {
      state.money =payload;
    },
    setPriorityVac(state, { payload }) {
      state.priority_id =payload;
    },
    setQuantityVac(state, { payload }) {
      state.quantity =payload;
    },
    setDescrVac(state, { payload }) {
      state.descr =payload;
    },
    setRequirementVac(state, { payload }) {
      state.requirements =payload;
    },
    setConditionsVac(state, { payload }) {
      state.conditions =payload;
    },
    setStatusVac(state, { payload }) {
      state.status_id =payload;
    },
    setDeadlineVac(state, { payload }) {
      state.deadline =payload;
    },
  },
  extraReducers: {
    [addData.pending]: (state, { payload }) => {
      state.data.status = 'loading';
    },
    [addData.fulfilled]: (state, { payload }) => {
      state.data.companies = payload.companies;
      state.data.priorities = payload.priorities;
      state.data.statuses = payload.statuses;
      state.data.status = 'success';
    },
    [addData.rejected]: (state, { payload }) => {
      state.data.status = 'failed';
    },
  },
});

export default newVacancySlice.reducer;
export const {
  setPositionVac,
  setCompanyVac,
  setMoneyVac,
  setPriorityVac,
  setQuantityVac,
  setDescrVac,
  setRequirementVac,
  setConditionsVac,
  setStatusVac,
  setDeadlineVac,
} = newVacancySlice.actions