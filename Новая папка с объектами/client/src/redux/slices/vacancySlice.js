import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getVacancy = createAsyncThunk('vacancy/getVacancy', async (id) => {
  const res = await axios(`/vacancies/vacancy/${id}`);
  const vacancy = res.data.vacancy;
   vacancy.compName = res.data.compName;
   vacancy.statusName = res.data.statusName;
   vacancy.priorName = res.data.priorName;
   console.log(vacancy);
  return vacancy;
});

const vacancySlice = createSlice ({
  name: 'vacancy',
  initialState: {
    status: '',
    vacancy: {},
  },
  extraReducers: {
    [getVacancy.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getVacancy.fulfilled]: (state, { payload }) => {
      state.vacancy = payload;
      state.status = 'success';
    },
    [getVacancy.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
});

export default vacancySlice.reducer;