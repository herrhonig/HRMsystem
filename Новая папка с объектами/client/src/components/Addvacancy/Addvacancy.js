import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import { addData, addNewVacancy } from '../../redux/slices/newVacancySlice';
import {
  setPositionVac,
  setCompanyVac,
  setMoneyVac,
  setPriorityVac,
  setQuantityVac,
  setDescrVac,
  setRequirementVac,
  setConditionsVac,
  setStatusVac,
  setDeadlineVac,
} from '../../redux/slices/newVacancySlice';

function AddVacancy() {
  // объявления
  const { clientsid, chatid, vacancyid, id } = useParams();
  const location = useLocation()
  const dispatch = useDispatch();

  // Стейты
  const companies = useSelector((state) => state.newVacancy.data.companies);
  const priorities = useSelector((state) => state.newVacancy.data.priorities);
  const statuses = useSelector((state) => state.newVacancy.data.statuses);
  const company_id = useSelector((state) => state.newVacancy.company_id);
  const priority_id = useSelector((state) => state.newVacancy.priority_id);
  const status_id = useSelector((state) => state.newVacancy.status_id);
  const newVacancy = useSelector((state) => state.newVacancy);

  // Хендлеры
  const positionHandler = (e) => {
    dispatch(setPositionVac(e.target.value));
  };
  const companyHandler = (e) => {
    dispatch(setCompanyVac(e.target.value));
  };
  const moneyHandler = (e) => {
    dispatch(setMoneyVac(e.target.value));
  };
  const priorityHandler = (e) => {
    dispatch(setPriorityVac(e.target.value));
  };
  const quantityHandler = (e) => {
    dispatch(setQuantityVac(e.target.value));
  };
  const descrHandler = (e) => {
    dispatch(setDescrVac(e.target.value));
  };
  const requirementHandler = (e) => {
    dispatch(setRequirementVac(e.target.value));
  };
  const conditionsHandler = (e) => {
    dispatch(setConditionsVac(e.target.value));
  };
  const statusHandler = (e) => {
    dispatch(setStatusVac(e.target.value));
  };
  const deadlineHandler = (e) => {
    dispatch(setDeadlineVac(e.target.value));
  };
  const addVacancyHandler = () => {
    dispatch(addNewVacancy(newVacancy));
  };

  // useEffect
  useEffect(() => {
    dispatch(addData());
    dispatch(changeMenu({ locationPath: location.pathname, clientsid, chatid, vacancyid, id }));
  }, [location]);

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      spacing={3}
      ml={5}
    >
      <Typography variant='h4' gutterBottom component='div'>
        Добавить вакансию
      </Typography>
      {/* Первичная информация */}
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={1}
      >
        <Typography variant='h6' gutterBottom component='div'>
          Первичные данные
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
          <FormControl
            variant='outlined'
            color='secondary'
            sx={{ m: 1, minWidth: 250 }}
            secondary
          >
            <InputLabel id='demo-simple-select-filled-label'>
              Компания
            </InputLabel>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={company_id}
              onChange={companyHandler}
            >
              {companies.map((el) => (
                <MenuItem value={el.id}>{el.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      {/* Первичная информация */}
      {/* Дополнительные данные */}
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={1}
      >
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={quantityHandler}
            label='Количество вакансий'
            color='secondary'
            focused
          />
          <FormControl
            variant='outlined'
            color='secondary'
            sx={{ m: 1, minWidth: 250 }}
            secondary
          >
            <InputLabel id='demo-simple-select-filled-label'>
              Приоритет
            </InputLabel>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={priority_id}
              onChange={priorityHandler}
            >
              {priorities.map((el) => (
                <MenuItem value={el.id}>{el.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            onChange={moneyHandler}
            label='Бюджет'
            color='secondary'
            focused
          />
        </Stack>
      </Stack>
      {/* Дополнительные данные */}
      {/* Описание */}
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={1}
      >
        <Typography variant='h6' gutterBottom component='div'>
          Описание
        </Typography>
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={descrHandler}
            multiline='true'
            sx={{ width: '945px' }}
            label='Описание'
            color='secondary'
            focused
          />
          <TextField
            onChange={requirementHandler}
            multiline='true'
            sx={{ width: '945px' }}
            label='Требования'
            color='secondary'
            focused
          />
          <TextField
            onChange={conditionsHandler}
            multiline='true'
            sx={{ width: '945px' }}
            label='Условия'
            color='secondary'
            focused
          />
        </Stack>
      </Stack>
      {/* Описание */}
      {/* Тех информация */}
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={1}
      >
        <Typography variant='h6' gutterBottom component='div'>
          Доп. настройки
        </Typography>
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          spacing={1}
        >
          <TextField
            onChange={deadlineHandler}
            label='DL'
            color='secondary'
            focused
          />
          <FormControl
            variant='outlined'
            color='secondary'
            sx={{ m: 1, minWidth: 250 }}
            secondary
          >
            <InputLabel id='demo-simple-select-filled-label'>Статус</InputLabel>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={status_id}
              onChange={statusHandler}
            >
              {statuses.map((el) => (
                <MenuItem value={el.id}>{el.statusvac_name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      {/* Тех информация */}
      <Button onClick={addVacancyHandler} variant='contained' color='secondary'>
        Создать
      </Button>
    </Stack>
  );
}

export default AddVacancy;
