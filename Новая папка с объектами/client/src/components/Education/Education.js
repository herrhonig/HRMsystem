import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Education = ({place, startDate, endDate, direction, level}) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      spacing={0.5}
    >
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        divider={<Divider orientation='vertical' flexItem />}
        spacing={1}
      >
        <Typography variant="subtitle2" display="block" gutterBottom>
          {place}
        </Typography>
        <Typography variant="body2" gutterBottom component="div">
          {level}
        </Typography>
        <Typography variant='body2' gutterBottom component='div'>
        <Chip sx={{marginLeft: '5px', marginRight: '5px' }} label={`${startDate} - ${endDate}`} variant="outlined" />
        </Typography>
        </Stack>
      <Typography variant="body2" gutterBottom mt='5px' mb='5px'>
        {direction}
      </Typography>
      </Stack>
  )
}

export default Education