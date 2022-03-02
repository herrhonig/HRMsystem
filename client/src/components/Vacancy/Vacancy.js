import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancy } from '../../redux/slices/vacancySlice';
import { useParams, useLocation } from 'react-router-dom';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import SideMenu from '../NavBar/SideMenu';

function Vacancy() {
  // Объявления
  const dispatch = useDispatch();
  const { clientsid, chatid, vacancyid, id } = useParams();

  const location = useLocation();

  // States
  const vacancy = useSelector((state) => state.vacancy.vacancy);

  // useEffect
  useEffect(() => {
    dispatch(getVacancy(vacancyid));
    dispatch(
      changeMenu({
        locationPath: location.pathname,
        clientsid,
        chatid,
        vacancyid,
        id,
      })
    );
  }, [location]);

  return (
    <Box
      sx={{
        boxShadow: 3,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : '#fff',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        p: 1,
        m: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
      }}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={2}
        sx={{ width: '800px' }}
      >
        <Typography variant='h6' gutterBottom component='div'>
          О вакансии
        </Typography>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={2}
          >
            <Typography variant='h4' gutterBottom component='div'>
              {vacancy.position}
            </Typography>
            <Stack
              direction='row'
              divider={<Divider orientation='vertical' flexItem />}
              alignItems='center'
              spacing={2}
            >
              <Typography variant='subtitle2' gutterBottom component='div'>
                {vacancy.compName}
              </Typography>
              <Typography variant='subtitle2' gutterBottom component='div'>
                {vacancy.priorName}
              </Typography>
              <Chip label={vacancy.money} color='primary' />
            </Stack>
            {/* Описание вакансии */}
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='flex-start'
              spacing={1}
            >
              <Typography variant='h6' gutterBottom component='div'>
                Описание вакансии
              </Typography>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Описание:
              </Typography>
              <Typography variant='body2' gutterBottom>
                {vacancy.descr}
              </Typography>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Требования:
              </Typography>
              <Typography variant='body2' gutterBottom>
                {vacancy.requirements}
              </Typography>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Условия:
              </Typography>
              <Typography variant='body2' gutterBottom>
                {vacancy.conditions}
              </Typography>
            </Stack>
            {/* Описание вакансии */}
            {/* Доп данные */}
            <Stack
              direction='row'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={2}
            >
              <Typography variant='subtitle2' gutterBottom component='div'>
                DL: <Chip label={vacancy.deadline} color='primary' />
              </Typography>
              <Typography variant='subtitle2' gutterBottom component='div'>
                Статус: <Chip label={vacancy.statusName} color='primary' />
              </Typography>
            </Stack>
            {/* Доп данные */}
          </Stack>
      </Stack>
    </Box>
  );
}

export default Vacancy;
