import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import Chip from '@mui/material/Chip';

const Exp = ({compName, startDate, endDate, descr, position}) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', marginTop:'10px', borderRadius: 2, borderColor: 'grey.500'}}>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Typography variant="button" display="block" gutterBottom>
          {compName}
        </Typography>
        <WorkIcon sx={{marginLeft: '5px', marginRight: '5px'}} fontSize="small" />
        <Typography variant="subtitle1" gutterBottom component="div">
          {position}
        </Typography>
        <Chip sx={{marginLeft: '5px', marginRight: '5px' }} label={startDate} variant="outlined" />
        <Typography variant="subtitle1" gutterBottom component="div">
          -
        </Typography>
        <Chip sx={{marginLeft: '5px', marginRight: '5px' }} label={endDate} variant="outlined" />
      </Box>
      <Typography sx={{color: 'text.disabled'}} variant="caption" display="block" gutterBottom>
        Моя деятельность
      </Typography>
      <Typography variant="body2" gutterBottom>
        {descr}
      </Typography>
    </Box>
  )
}

export default Exp