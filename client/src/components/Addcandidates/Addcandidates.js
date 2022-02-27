import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

function Addcandidates() {
  const hasId = useSelector((state) => state.newCandidate.id);
  console.log(hasId);

  if (hasId) {
    return (
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={3}
        mt={10}
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
            <TextField label='Фамилия' color='secondary' focused />
            <TextField label='Имя' color='secondary' focused />
            <TextField label='Отчество' color='secondary' focused />
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
          <TextField label='Телефон' color='secondary' focused />
          <TextField label='Email' color='secondary' focused />
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
          <TextField label='Позиция' color='secondary' focused />
          <TextField label='Компания' color='secondary' focused />
          <TextField label='Ставка' color='secondary' focused />
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
            defaultValue='дд'
            label='День рождения'
            color='secondary'
            focused
          />
          <TextField
            defaultValue='мм'
            label='Месяц рождения'
            color='secondary'
            focused
          />
          <TextField
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
          <TextField label='Link' color='secondary' focused />
        </Stack>
        {/* Ссылка на фото */}
        <Button variant="contained" color='secondary' >Создать</Button>
      </Stack>
    );
  } else {
    return (
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='flex-start'
        spacing={3}
        mt={10}
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
            <TextField label='Название компании' color='secondary' focused />
            <TextField label='Позиция' color='secondary' focused />
            <TextField label='Год начала работы' color='secondary' focused />
            <TextField label='Год окончания работы' color='secondary' focused />
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
            <TextField multiline='true' sx={{width:'945px'}} label='Обязанности' color='secondary' focused />
          </Stack>
            <Button variant="contained" color='secondary' >Создать</Button>
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
            <TextField label='ВУЗ' color='secondary' focused />
            <TextField label='Факультет' color='secondary' focused />
            <TextField label='Степень' color='secondary' focused />
            <TextField label='Год начала обучения' color='secondary' focused />
            <TextField label='Год окончания обучения' color='secondary' focused />
          </Stack>
          <Button variant="contained" color='secondary' >Создать</Button>
      </Stack>
    );
  }
}

export default Addcandidates;
