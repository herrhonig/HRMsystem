import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const changeMenu = createAsyncThunk('menu/changeMenu', async ({ locationPath }) => {
  if (/crm\/clients\/(0|[1-9]\d*)\/vacancies\/(0|[1-9]\d*)\/candidates/.test(locationPath)) {
    const res = await axios(`/clients/vacancies/candidates/list`);
    const data = { list: res.data, menu: 'candidates', page: 'Кандидаты' }
    return data;
  } else
    if (/crm\/clients\/(0|[1-9]\d*)\/vacancies\/(0|[1-9]\d*)/.test(locationPath)) {
      const res = await axios(`/clients/vacancies/list`);
      const data = { list: res.data, menu: 'vacancy', page: 'Вакансии' }
      return data;
    } else
      if (/crm\/vacancies\/(0|[1-9]\d*)\/candidates\/(0|[1-9]\d*)/.test(locationPath)) {
        const res = await axios(`/vacancies/candidates/list`);
        const data = { list: res.data, menu: 'candidates', page: 'Кандидаты' }
        return data;
      } else
        if (/crm\/vacancies/.test(locationPath)) {
          const res = await axios(`/vacancies/list`);
          const data = { list: res.data, menu: 'candidates', page: 'Вакансии' }
          console.log(res);
          return data;
        } else
          if (/crm\/chat/.test(locationPath)) {
            const res = await axios(`/chat/list`);
            const data = { list: res.data, menu: 'candidates', page: 'Чаты' }
            return data;
          } else
            if (/crm\/candidates/.test(locationPath)) {
              const res = await axios(`/candidates/list`);
              const data = { list: res.data, menu: 'candidates', page: 'Кандидаты' }
              console.log(res);
              return data;
            } else
              if (/crm\/clients/.test(locationPath)) {
                const res = await axios(`/clients/list`);
                const data = { list: res.data, menu: 'candidates', page: 'Клиенты' }
                console.log(res);
                return data;
              }

});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    list: '',
    status: '',
    activeMenu: '',
    page: ''
  },
  extraReducers: {
    [changeMenu.pending]: (state, action) => {
      state.status = 'loading';
    },
    [changeMenu.fulfilled]: (state, { payload }) => {
      state.list = payload.list;
      state.activeMenu = payload.menu
      state.page = payload.page
      state.status = 'success';
    },
    [changeMenu.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
});

export default menuSlice.reducer;
