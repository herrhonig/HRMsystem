import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCandidateInfo = createAsyncThunk(
  'candidateInfo/getCandidateInfo',
  async (id) => {
    const res = await axios(`/candidate/about/${id}`);
    return res.data;
  }
);

export const getCandidateVacancies = createAsyncThunk(
  'candidateInfo/getCandidateVacancies',
  async (id) => {
    const res = await axios(`/candidate/vacancies/${id}`);
    console.log(res.data);
    if (res.status === 200) {
      return res.data;
    } else {
      return ['error'];
    }
  }
);

const candidateInfoSlice = createSlice({
  name: 'candidateInfo',
  initialState: {
    candidateInfo: {},
    vacanciesInfo: [],
    status: '',
    statusVac: '',
  },
  extraReducers: {
    [getCandidateInfo.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCandidateInfo.fulfilled]: (state, { payload }) => {
      state.candidateInfo = payload;
      state.status = 'success';
    },
    [getCandidateInfo.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [getCandidateVacancies.pending]: (state, { payload }) => {
      state.statusVac = 'loading';
    },
    [getCandidateVacancies.fulfilled]: (state, { payload }) => {
      state.vacanciesInfo = payload;
      state.statusVac = 'success';
    },
    [getCandidateVacancies.rejected]: (state, { payload }) => {
      state.statusVac = 'failed';
    },
  },
});

export default candidateInfoSlice.reducer;
