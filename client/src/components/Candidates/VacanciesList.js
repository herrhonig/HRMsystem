import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const VacanciesList = ({ vacansyid, compName, position, statName, user }) => {
  return (
    <>
    <Stack
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      spacing={9}
    >
      <Typography variant="caption" display="block" gutterBottom>
        {compName}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {position}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {statName}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {user}
      </Typography>
      <Typography variant="caption" color='#bdbdbd' display="block" gutterBottom>
        Развернуть
      </Typography>
    </Stack>
    <Divider orientation="horizontal" flexItem />
    </>
    
  );
};

export default VacanciesList;
