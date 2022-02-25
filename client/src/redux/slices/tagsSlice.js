import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTags = createAsyncThunk('tags/getTags', async (id) => {
  const res = await axios(`/candidate/tags/${id}`);
  return res.data.tags;
});

const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: [],
    status: null,
  },
  extraReducers: {
    [getTags.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getTags.fulfilled]: (state, { payload }) => {
      state.tags = payload;
      state.status = 'success';
    },
    [getTags.rejected]: (state, action) => {
      state.status = 'faild';
    },
  },
});

export default tagsSlice.reducer;
