import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { addAllVacanciesByCandidate } from '../../redux/slices/addToVacancySlice';
import { getStatuses, setStatus } from '../../redux/slices/statusesSlice';

const VacanciesList = ({ vacansyid, compName, position, statName, user, statId, userId }) => {
const dispatch = useDispatch();
const vacancies = useSelector((state) => state.candidateInfo.vacanciesInfo);
const statuses = useSelector(state => state.statuses.allStatuses);
const candidate_id = useSelector((state) => state.candidate.candidate.id);

const changeStatusHandler = (e) => {
  console.log(e.target.value);
  handleClose();
  dispatch(setStatus({ status_id: statId ,statusId: e.target.value, candidate_id, vacancy_id:vacansyid, user_id:userId}));
};

//////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//////////////////////////////////

  useEffect(() => {
    dispatch(addAllVacanciesByCandidate());
    dispatch(getStatuses());
  }, [vacancies]);
  return (
    <>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={9}
      >
        <Typography variant='caption' display='block' gutterBottom>
          {compName}
        </Typography>
        <Typography variant='caption' display='block' gutterBottom>
          {position}
        </Typography>
        <Button
          size='small'
          variant
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {statName}
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {statuses.map((el) => <MenuItem onClick={changeStatusHandler} value={el.id}>{el.statusvac_name}</MenuItem>)}
        </Menu>
        <Typography variant='caption' display='block' gutterBottom>
          {user}
        </Typography>
        <Typography
          variant='caption'
          color='#bdbdbd'
          display='block'
          gutterBottom
        >
          Развернуть
        </Typography>
      </Stack>
      <Divider orientation='horizontal' flexItem />
    </>
  );
};

export default VacanciesList;
