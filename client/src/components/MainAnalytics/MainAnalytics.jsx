import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { changeMenu } from '../../redux/slices/NavBarSlice';


const MainAnalytics = () => {
  const dispatch = useDispatch();

  const { clientsid, chatid, vacancyid, id } = useParams();
  const location = useLocation()
  // useEffect
  useEffect(() => {
    dispatch(changeMenu({ locationPath: location.pathname, clientsid, chatid, vacancyid, id }));
  }, [location]);

  return (
    <>    
    <Typography 
    variant='h4' 
    gutterBottom 
    fontWeight='700'
    component='div'>
      Аналитика
    </Typography>
    <Stack
      flexWrap='wrap'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={1}
    >
      <Box
        sx={{
          width: 200,
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
        <h3>Вакансии в работе : </h3>
        
        <Chip variant="outlined" label='10' color='success' />
        
      </Box>

      <Box
        sx={{
          width: 200,
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
        <h3>Кандидаты: </h3>
        <Chip variant="outlined" label='340' color='success'/>
      </Box>

      <Box
        sx={{
          width: 200,
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
         <h3>Напоминания: </h3>
         <Chip variant="outlined" label='3400' color='success'/>
      </Box>
        
          <Stack
          width='470px'
          flexWrap='wrap'
          direction='column'
          justifyContent='space-between'
          alignItems='center'
          marginLeft='150px'
          spacing={2}
        >
          <Box
            sx={{
              width: 200,
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
            <h3>Уведомления: </h3>
            <Chip variant="outlined" label='7' />
          </Box>

          <Box
            sx={{
              width: 200,
              boxShadow: 3,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : '#fff',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              p: 1,
              m: 1,
              borderRadius: 2,
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: '700',
            }}
          >
            <h3>Top-10 консультантов: </h3>
            
            <Chip label='10. Цветков К.' color='warning'/>
          </Box>
          </Stack>
    </Stack>
    </>
  )
}

export default MainAnalytics
