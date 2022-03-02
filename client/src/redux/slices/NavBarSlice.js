import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const changeMenu = createAsyncThunk('menu/changeMenu', async ({ locationPath, clientsid, chatid, vacancyid, id }) => {
  ////поиск кандидатов по вакансии id
  if (/crm\/clients\/(0|[1-9]\d*)\/vacancies\/(0|[1-9]\d*)/.test(locationPath)) {

    const res = await axios(`/candidates/clients/vacancies/${vacancyid}`);
    const data = { list: res.data, menu: 'candidates', page: 'Кандидаты', link: `/crm/clients/${clientsid}/vacancies/${vacancyid}/candidates` }
    console.log(res);
    return data;
  } else
    ///Поиск в вакансиях по айди клиента
    if (/crm\/clients\/(0|[1-9]\d*)\/vacancies/.test(locationPath)) {
      console.log(clientsid);
      const res = await axios(`/vacancies/${clientsid}/list`);
      const data = { list: res.data, menu: 'vacancy', page: 'Вакансии', link: `/crm/clients/${clientsid}/vacancies` }
      console.log(res.data);
      return data;
    } else
      ////Поиск в кандидатах по вакансии id
      if (/crm\/vacancies\/(0|[1-9]\d*)\/candidates/.test(locationPath)) {
        const res = await axios(`/candidates/clients/vacancies/${vacancyid}`);
        console.log(res.data);
        const data = { list: res.data, menu: 'candidates', page: 'Кандидаты', link: `/crm/vacancies/${vacancyid}/candidates` }
        console.log(res);
        return data;
      } else

        ////готово
        if (/crm\/vacancies\/(0|[1-9]\d*)/.test(locationPath)) {

          const res = await axios(`/candidates/clients/vacancies/${vacancyid}`);
          const data = { list: res.data, menu: 'candidates', page: 'Кандидаты', link: `/crm/vacancies/${vacancyid}/candidates` }
          console.log(res);
          return data;
        } else
          if (/crm\/vacancies/.test(locationPath)) {
            const res = await axios(`/vacancies/list`);
            const data = { list: res.data, menu: 'vacancy', page: 'Вакансии', link: `/crm/vacancies` }
            // console.log(res);
            return data;
          } else
            if (/crm\/chat/.test(locationPath)) {
              const res = await axios(`/chat/list`);
              const data = { list: res.data, menu: 'candidates', page: 'Чаты', link: `/crm/chat` }
              return data;
            } else
              if (/crm\/candidates/.test(locationPath)) {
                const res = await axios(`/candidates/list`);
                const data = { list: res.data, menu: 'candidates', page: 'Кандидаты', link: `/crm/candidates` }
                console.log(res);
                return data;
              } else
                if (/crm/.test(locationPath)) {
                  const res = await axios(`/clients/list`);
                  const data = { list: res.data, menu: 'candidates', page: 'Клиенты', link: `/crm/clients` }
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
    page: '',
    link: '',
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
      state.link = payload.link;
    },
    [changeMenu.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
});

export default menuSlice.reducer;
