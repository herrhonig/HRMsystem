import React from 'react';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Exp = ({ compName, startDate, endDate, descr, position }) => {
  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='flex-start'
      spacing={0.5}
    >
      {/* <Box sx={{display: 'flex', flexDirection: 'row'}}> */}
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        divider={<Divider orientation='vertical' flexItem />}
        spacing={1}
      >
        <Typography variant='subtitle2' display='block' gutterBottom>
          {compName}
        </Typography>
        <Typography variant='body2' gutterBottom component='div'>
          {position}
        </Typography>
        <Typography variant='body2' gutterBottom component='div'>
          <Chip
            sx={{ marginLeft: '5px', marginRight: '5px' }}
            label={`${startDate} - ${endDate}`}
            variant='outlined'
          />
        </Typography>
        {/* </Box> */}
      </Stack>
      <Typography
        sx={{ color: 'text.disabled' }}
        variant='caption'
        display='block'
        gutterBottom
      >
        Моя деятельность
      </Typography>
      <Typography variant='body2' gutterBottom>
        {descr}
      </Typography>
    </Stack>
  );
};

export default Exp;
