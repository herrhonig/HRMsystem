import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setMiddleName,
  setPhone,
  setEmail,
  setPosition,
  setCompany,
  setMoney,
  setBirthDay,
  setBirthMonth,
  setBirthYear,
  setBirthday,
  setPhoto,
  setDesc,
  setCompanyName,
  setCompanyPosition,
  setStartDateWork,
  setEndDateWork,
  setDescription,
  setPlace,
  setStartDateUn,
  setEndDateUn,
  setDirection,
  setLevel,
  addNewCandidate,
  addNewExp,
  addNewEd
} from '../../redux/slices/newCandidateSlice.js';

function Addcandidates() {
  // Объявления
  const dispatch = useDispatch();

  // Селекторы
  const hasId = useSelector((state) => state.newCandidate.id);
  const newCandidate = useSelector((state) => state.newCandidate);
  const experiences = useSelector((state) => state.newCandidate.experiences);
  const education = useSelector((state) => state.newCandidate.education);

  // Handlers
  const firstNameHandler = (e) => {
    dispatch(setFirstName(e.target.value));
  };
  const lastNameHandler = (e) => {
    dispatch(setLastName(e.target.value));
  };
  const middleNameHandler = (e) => {
    dispatch(setMiddleName(e.target.value));
  };
  const phoneHandler = (e) => {
    dispatch(setPhone(e.target.value));
  };
  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const positionHandler = (e) => {
    dispatch(setPosition(e.target.value));
  };
  const companyHandler = (e) => {
    dispatch(setCompany(e.target.value));
  };
  const moneyHandler = (e) => {
    dispatch(setMoney(e.target.value));
  };
  const birthDayHandler = (e) => {
    dispatch(setBirthDay(e.target.value));
  };
  const birthMonthHandler = (e) => {
    dispatch(setBirthMonth(e.target.value));
  };
  const birthYearHandler = (e) => {
    dispatch(setBirthYear(e.target.value));
  };
  const birthdayHandler = (e) => {
    dispatch(setBirthday(e.target.value));
  };
  const photoHandler = (e) => {
    dispatch(setPhoto(e.target.value));
  };
  const descHandler = (e) => {
    dispatch(setDesc(e.target.value));
  }
  const companyNameHandler = (e) => {
    dispatch(setCompanyName(e.target.value));
  };
  const companyPositionsHandler = (e) => {
    dispatch(setCompanyPosition(e.target.value));
  };
  const startDateWorkHandler = (e) => {
    dispatch(setStartDateWork(e.target.value));
  };
  const endDateWorkHandler = (e) => {
    dispatch(setEndDateWork(e.target.value));
  };
  const descriptionHandler = (e) => {
    dispatch(setDescription(e.target.value));
  };
  const placeHandler = (e) => {
    dispatch(setPlace(e.target.value));
  };
  const startDateUnHandler = (e) => {
    dispatch(setStartDateUn(e.target.value));
  };
  const endDateUnHandler = (e) => {
    dispatch(setEndDateUn(e.target.value));
  };
  const directionHandler = (e) => {
    dispatch(setDirection(e.target.value));
  };
  const levelHandler = (e) => {
    dispatch(setLevel(e.target.value));
  };
  
  const addNewCandidateHandler = () => {
    dispatch(addNewCandidate(newCandidate))
  };
  const addNewExpHandler = () => {
    dispatch(addNewExp({hasId, experiences}))
  };
  const addNewEdHandler = () => {
    dispatch(addNewEd({hasId, education}))
  }

  if (hasId === '') {
    return (
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={3}
        ml={5}
      >
        <Typography variant='h4' gutterBottom component='div'>
          Добавить кандидата
        </Typography>
        {/* ФИО */}
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          spacing={1}
        >
          <Typography variant='h6' gutterBottom component='div'>
            ФИО
          </Typography>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}
          >
            <TextField
              onChange={lastNameHandler}
              label='Фамилия'
              color='secondary'
              focused
            />
            <TextField
              onChange={firstNameHandler}
              label='Имя'
              color='secondary'
              focused
            />
            <TextField
              onChange={middleNameHandler}
              label='Отчество'
              color='secondary'
              focused
            />
          </Stack>
        </Stack>
        {/* ФИО */}
        {/* Tel/email */}
        <Typography variant='h6' gutterBottom component='div'>
          Телефон / Email
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={phoneHandler}
            label='Телефон'
            color='secondary'
            focused
          />
          <TextField
            onChange={emailHandler}
            label='Email'
            color='secondary'
            focused
          />
        </Stack>
        {/* Tel/email */}
        {/* Проф данные */}
        <Typography variant='h6' gutterBottom component='div'>
          Проф. данные
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={positionHandler}
            label='Позиция'
            color='secondary'
            focused
          />
          <TextField
            onChange={companyHandler}
            label='Компания'
            color='secondary'
            focused
          />
          <TextField
            onChange={moneyHandler}
            label='Ожидаемый доход'
            color='secondary'
            focused
          />
        </Stack>
        {/* Проф данные */}
        {/* День рождения */}
        <Typography variant='h6' gutterBottom component='div'>
          Дата рождения
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={birthDayHandler}
            defaultValue='дд'
            label='День рождения'
            color='secondary'
            focused
          />
          <TextField
            onChange={birthMonthHandler}
            defaultValue='мм'
            label='Месяц рождения'
            color='secondary'
            focused
          />
          <TextField
            onChange={birthYearHandler}
            defaultValue='гггг'
            label='Год рождения'
            color='secondary'
            focused
          />
        </Stack>
        {/* День рождения */}
        {/* Ссылка на фото */}
        <Typography variant='h6' gutterBottom component='div'>
          Ссылка на фото
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={photoHandler}
            label='Link'
            color='secondary'
            focused
          />
        </Stack>
        {/* Ссылка на фото */}
        {/* О себе */}
        <Typography variant='h6' gutterBottom component='div'>
            О себе
          </Typography>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}
          >
            <TextField
              onChange={descHandler}
              multiline='true'
              sx={{ width: '945px' }}
              label='О себе'
              color='secondary'
              focused
            />
          </Stack>
        {/* О себе */}
        <Button onClick={addNewCandidateHandler} variant='contained' color='secondary'>
          Создать
        </Button>
      </Stack>
    );
  } else {
    return (
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={3}
        ml={5}
      >
        <Typography variant='h6' gutterBottom component='div'>
          Опыт работы
        </Typography>
        {/* Данные о компании */}
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='flex-start'
          spacing={1}
        >
          <Typography variant='h6' gutterBottom component='div'>
            Данные о компании
          </Typography>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}
          >
            <TextField
              onChange={companyNameHandler}
              label='Название компании'
              color='secondary'
              focused
            />
            <TextField
              onChange={companyPositionsHandler}
              label='Позиция'
              color='secondary'
              focused
            />
            <TextField
              onChange={startDateWorkHandler}
              label='Год начала работы'
              color='secondary'
              focused
            />
            <TextField
              onChange={endDateWorkHandler}
              label='Год окончания работы'
              color='secondary'
              focused
            />
          </Stack>
          <Typography variant='h6' gutterBottom component='div'>
            Обязанности
          </Typography>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={1}
          >
            <TextField
              onChange={descriptionHandler}
              multiline='true'
              sx={{ width: '945px' }}
              label='Обязанности'
              color='secondary'
              focused
            />
          </Stack>
          <Button onClick={addNewExpHandler} variant='contained' color='secondary'>
            Создать
          </Button>
        </Stack>
        {/* Данные о компании */}
        <Typography variant='h6' gutterBottom component='div'>
          Данные об обучении
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={placeHandler}
            label='ВУЗ'
            color='secondary'
            focused
          />
          <TextField
            onChange={directionHandler}
            label='Факультет'
            color='secondary'
            focused
          />
          <TextField
            onChange={levelHandler}
            label='Степень'
            color='secondary'
            focused
          />
          <TextField
            onChange={startDateUnHandler}
            label='Год начала обучения'
            color='secondary'
            focused
          />
          <TextField
            onChange={endDateUnHandler}
            label='Год окончания обучения'
            color='secondary'
            focused
          />
        </Stack>
        <Button onClick={addNewEdHandler} variant='contained' color='secondary'>
          Создать
        </Button>
      </Stack>
    );
  }
}

export default Addcandidates;
