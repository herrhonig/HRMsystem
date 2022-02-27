import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCandidateInfo = createAsyncThunk('candidateInfo/getCandidateInfo', async (id) => {
  const res = await axios (`/candidate/about/${id}`);
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
      state.candidateInfo = payload;
      state.status = 'success';
    },
    [getCandidateInfo.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
});

export default candidateInfoSlice.reducer;