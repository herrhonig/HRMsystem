import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getInfo = createAsyncThunk('info/getUser', async () => {
  return 'Hi'
});

const userSlice = createSlice({
  name: 'info',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getInfo.pending]: (state, action) => {
      state.status = "loading"
    },
    [getInfo.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = "success"
    },
    [getInfo.rejected]: (state, action) => {
      state.status = "failed"
    },
  }
})



export default userSlice.reducer
