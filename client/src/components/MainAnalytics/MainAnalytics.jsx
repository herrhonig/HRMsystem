import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import FaceIcon from '@mui/icons-material/Face';
import Charts from '../Charts/Charts';


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
    {/* ============= CARDS WITH STATISTICS ================*/}
    <Stack
      flexWrap='wrap'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      spacing={2}
      
    >
      <Box
        sx={{
          width: 180,
          boxShadow: 1,
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
          width: 180,
          boxShadow: 1,
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
          width: 180,
          boxShadow: 1,
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
              width: 180,
              boxShadow: 1,
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
              width: 180,
              boxShadow: 1,
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
              fontSize:'14px'
            }}
          >
            <h3>TOP консультантов: </h3>
            
            <Chip 
            icon={<FaceIcon />}
            label='10. Цветков К.' 
            color='warning'
            />
          </Box>
          </Stack>
    </Stack>
        {/* ============= CARDS WITH STATISTICS END================*/}
        <Stack
      flexWrap='wrap'
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={3}
      
    >
      </Stack>
      <Box
        sx={{
          width: 700,
          boxShadow: 2,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 4,
          m: 2,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
       <Charts/> 
       <span> Показатель успешного успеха:</span>
      </Box>
    </>
  )
}

export default MainAnalytics
