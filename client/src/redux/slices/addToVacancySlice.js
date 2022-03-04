import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addAllVacanciesByCandidate = createAsyncThunk(
  'addToVac/addAllVacanciesByCandidate',
  async () => {
    const res = await axios('/vacancies/list');
    if (res.status === 200) {
      return res.data;
    } else {
      return ['error'];
    }
  }
);

export const sendAddtoVac = createAsyncThunk('addToVac/sendAddtoVac', async (value) => {
  const res = await axios.post('/vacancies/candidate/company', { value });
});

const addToVacancySlice = createSlice({
  name: 'addToVac',
  initialState: {
    status: '',
    statusAdd: '',
    allVacancies: [],
    vacancy_id: '',
    candidate_id: '',
    user_id: '',
  },
  reducers: {
    setVacancyId(state, { payload }) {
      state.vacancy_id = payload;
    },
    setCandidateId(state, { payload }) {
      state.candidate_id = payload;
    },
    setUserId(state, { payload }) {
      state.user_id = payload;
    },
  },
  extraReducers: {
    [addAllVacanciesByCandidate.pending]: (state, { payload }) => {
      state.status = 'loading';
    },
    [addAllVacanciesByCandidate.fulfilled]: (state, { payload }) => {
      state.allVacancies = payload;
      state.status = 'success';
    },
    [addAllVacanciesByCandidate.rejected]: (state, { payload }) => {
      state.status = 'failed';
    },
    [sendAddtoVac.pending]: (state, { payload }) => {
      state.statusAdd = 'loading';
    },
    [sendAddtoVac.fulfilled]: (state, { payload }) => {
      state.statusAdd = 'success';
    },
    [sendAddtoVac.rejected]: (state, { payload }) => {
      state.statusAdd = 'failed';
    }
  },
});

export default addToVacancySlice.reducer;
export const { setVacancyId, setCandidateId, setUserId } = addToVacancySlice.actions;
