import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCandidateInfo = createAsyncThunk('candidateInfo/getCandidateInfo', async (id) => {
  const res = await axios (`/candidate/about/${id}`);
  console.log(res.data);
  return res.data;
});

const candidateInfoSlice = createSlice({
  name: 'candidateInfo',
  initialState: {
    candidateInfo: {},
    status: '',
  },
  extraReducers: {
    [getCandidateInfo.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCandidateInfo.fulfilled]: (state, { payload }) => {
      console.log('1111111',payload);
      state.candidateInfo = payload;
      state.status = 'success';
    },
    [getCandidateInfo.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
});

export default candidateInfoSlice.reducer;