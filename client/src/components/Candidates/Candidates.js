import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getCandidate } from '../../redux/slices/candidateSlice';
import { getTags } from '../../redux/slices/tagsSlice';
import {
  getCandidateInfo,
  getCandidateVacancies,
} from '../../redux/slices/candidateInfoSlice';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tag from '../Tag/Tag';
import Exp from '../Exp/Exp';
import Stack from '@mui/material/Stack';
import Education from '../Education/Education';
import CircularProgress from '@mui/material/CircularProgress';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import SideMenu from '../NavBar/SideMenu';
import Divider from '@mui/material/Divider';
import VacanciesList from './VacanciesList';

function Candidates() {
  const { clientsid, chatid, vacancyid, id } = useParams();
  const location = useLocation();

  // useEffect
  useEffect(() => {
    dispatch(getCandidate(id));
    dispatch(getTags(id));
    dispatch(getCandidateInfo(id));
    dispatch(getCandidateVacancies(id));
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

  // Объявления

  const dispatch = useDispatch();

  // Кандидат state
  const candidate = useSelector((state) => state.candidate.candidate);
  const canStatus = useSelector((state) => state.candidate.status);

  // Доп.инф state
  const candidateInfo = useSelector(
    (state) => state.candidateInfo.candidateInfo
  );
  const canInfoStatus = useSelector((state) => state.candidateInfo.status);

  // Тэги
  const tags = useSelector((state) => state.tags.tags);

  // Vacanies state
  const vacancies = useSelector((state) => state.candidateInfo.vacanciesInfo);

  // Дополнительные переменные
  const years = new Date().getFullYear() - candidate.birthday_year;

  return (
    <>
      <Box>
        {/* <Див с аватаркой> */}
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
            justifyContent='flex-start'
            alignItems='flex-start'
            spacing={2}
            sx={{ width: '800px' }}
          >
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={2}
            >
              <Avatar
                alt='Remy Sharp'
                src={candidate.photo}
                sx={{ width: 120, height: 120 }}
              />
              <Stack
                direction='column'
                justifyContent='center'
                alignItems='flex-start'
                spacing={1}
              >
                <Typography variant='h6' gutterBottom component='div'>
                  {`${candidate.last_name} ${candidate.first_name}`}
                </Typography>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  {`${candidate.birthday_day}.${candidate.birthday_month}.${candidate.birthday_year}, ${years} лет`}
                </Typography>
                <Typography
                  variant='subtitle2'
                  gutterBottom
                  color='#1769aa'
                  component='div'
                >
                  {candidate.position}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* </Див с аватаркой > */}
          {/* <Див с доп данными и тегами> */}
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={1}
          >
            <Stack
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              spacing={5}
              mt={2}
            >
              <Typography variant='body2' gutterBottom component='div'>
                {`   ${candidate.phone}   `}
              </Typography>
              <Typography variant='body2' gutterBottom component='div'>
                {`${candidate.email}`}
              </Typography>
            </Stack>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={1}
            >
              {tags.map((el) => (
                <Tag key={el.id} tag={el.tag_name} color={el.color} />
              ))}
            </Stack>
          </Stack>
          {/* </Див с доп данными и тегами> */}
          {/* <Див с вакансиями> */}
          <Stack
            direction='column'
            justifyContent='space-around'
            alignItems='flex-start'
            spacing={0.5}
            mt={5}
            width={550}
            // divider={<Divider orientation="horizontal" flexItem />}
          >
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={6}
            >
              <Typography variant="body2" color='#757575' gutterBottom component="div">
                Компания:
              </Typography>
              <Typography variant="body2" color='#757575' gutterBottom component="div">
                Вакансия:
              </Typography>
              <Typography variant="body2" color='#757575' gutterBottom component="div">
                Статус:
              </Typography>
              <Typography variant="body2" color='#757575' gutterBottom component="div">
                Консультант:
              </Typography>
              <Typography variant="body2" color='#757575' gutterBottom component="div">

              </Typography>
            </Stack>
            <Divider orientation="horizontal" flexItem />
            {vacancies.map(el => <VacanciesList key={el.id} vacansyid={el.id} compName={el.compName} position={el.position} statName={el.statName} user={el.userName} />)}
          </Stack>
          {/* </Див с вакансиями> */}
          {/* <Див с инфой> */}
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            spacing={3}
            mt={4}
            sx={{ maxWidth: '800px' }}
          >
            {/* Бох с опытом работы */}
            {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='flex-start'
              spacing={3}
            >
              <Typography
                variant='h5'
                gutterBottom
                component='div'
                color='#616161'
              >
                Опыт работы
              </Typography>
              {canStatus === 'success' &&
                candidateInfo?.candidateExperience?.map((el) => (
                  <Exp
                    key={el.id}
                    compName={el.company_name}
                    startDate={el.start_date}
                    endDate={el.end_date}
                    descr={el.descr}
                    position={el.position}
                  />
                ))}
            </Stack>
            {/* </Box> */}
            {/* Бох с опытом работы */}
            {/* Бокс о себе */}
            <Stack
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={2}
              sx={{ marginBottom: '20px' }}
            >
              <Typography
                variant='h5'
                gutterBottom
                component='div'
                color='#616161'
              >
                О себе
              </Typography>
              <Typography variant='body2' gutterBottom>
                {canInfoStatus === 'success' &&
                  candidateInfo?.candidateAbout[0].descr}
              </Typography>
            </Stack>
            {/* Бокс о себе */}
            {/* Бокс образование */}
            <Stack
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={2}
            >
              <Typography
                variant='h5'
                gutterBottom
                component='div'
                color='#616161'
              >
                Образование
              </Typography>
              {canInfoStatus === 'success' &&
                candidateInfo?.candidateEducation?.map((el) => (
                  <Education
                    key={el.id}
                    place={el.place}
                    startDate={el.start_date}
                    endDate={el.end_date}
                    direction={el.direction}
                    level={el.level}
                  />
                ))}
            </Stack>
            {/* Бокс образование */}
          </Stack>
          {/* </Див c инфой> */}
        </Box>
      </Box>
    </>
  );
}

export default Candidates;
