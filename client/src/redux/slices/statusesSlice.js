import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';


export const getStatuses = createAsyncThunk(
  'statuses/getStatuses',
  async () => {
    const res = await axios('/vacancies/statuses');
    console.log(res);
    return res.data;
  }
);

export const setStatus = createAsyncThunk('statuses/setStatus', async (value) => {
  const res = await axios.put('/vacancies/statuses', {value})
  return res.data;
});

const statusesSlice = createSlice({
  name: 'statuses',
  initialState: {
    status: '',
    allStatuses: [],
  },
  reducers: {
    redSetStat (state, { payload}) {
      state.status = 'success';
    },
  },
  extraReducers: {
    [getStatuses.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getStatuses.fulfilled]: (state, { payload }) => {
      state.allStatuses = payload;
      state.status = 'success';
    },
    [getStatuses.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [setStatus.pending]: (state, action) => {
      state.status = 'loading';
    },
    [setStatus.fulfilled]: (state, { payload }) => {
      state.allStatuses = payload;
      state.status = 'success';
    },
    [setStatus.rejected]: (state, action) => {
      state.status = 'failed';
    },
    
  },
});

export default statusesSlice.reducer;