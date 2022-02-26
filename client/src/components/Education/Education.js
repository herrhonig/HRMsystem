import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Chip from '@mui/material/Chip';

const Education = ({place, startDate, endDate, direction, level}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', marginTop:'10px', borderRadius: 2, borderColor: 'grey.500'}}>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Typography variant="button" display="block" gutterBottom>
          {place}
        </Typography>
        <AccountBalanceIcon sx={{marginLeft: '5px', marginRight: '5px'}} fontSize="small" />
        <Typography variant="subtitle1" gutterBottom component="div">
          {level}
        </Typography>
        <Chip sx={{marginLeft: '5px', marginRight: '5px' }} label={startDate} variant="outlined" />
        <Typography variant="subtitle1" gutterBottom component="div">
          -
        </Typography>
        <Chip sx={{marginLeft: '5px', marginRight: '5px' }} label={endDate} variant="outlined" />
      </Box>
      <Typography variant="body2" gutterBottom>
        {direction}
      </Typography>
    </Box>
  )
}

export default Education