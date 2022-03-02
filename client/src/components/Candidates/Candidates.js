import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getCandidate } from '../../redux/slices/candidateSlice';
import { getTags } from '../../redux/slices/tagsSlice';
import { getCandidateInfo } from '../../redux/slices/candidateInfoSlice';
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

function Candidates() {

  const { clientsid, chatid, vacancyid, id } = useParams();
  const location = useLocation()
  // useEffect
  useEffect(() => {
    dispatch(getCandidate(id));
    dispatch(getTags(id));
    dispatch(getCandidateInfo(id));
    dispatch(changeMenu({ locationPath: location.pathname, clientsid, chatid, vacancyid, id }));
  }, [location]);

  // console.log(useParams());

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

  // Дополнительные переменные
  const years = new Date().getFullYear() - candidate.birthday_year;

  return (
    <>
      {/* <SideMenu /> */}
      <Box>
        {/* <Див с аватаркой> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            margin: '5px',
          }}
        >
          <Typography
            sx={{ marginTop: '5px', marginBottom: '5px', marginLeft: '5px' }}
            variant='h3'
            gutterBottom
            component='div'
          >
            {candidate.position}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <Avatar
              alt='Remy Sharp'
              src={candidate.photo}
              sx={{ width: 150, height: 150 }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                marginLeft: '10px',
              }}
            >
              <Typography variant='h4' gutterBottom component='div'>
                {candidate.last_name}
              </Typography>
              <Typography variant='h4' gutterBottom component='div'>
                {candidate.first_name}
              </Typography>
              <Typography variant='h6' gutterBottom component='div'>
                {`${candidate.birthday_day}.${candidate.birthday_month}.${candidate.birthday_year}, ${years} лет`}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* </Див с аватаркой > */}
        {/* <Див с доп данными и тегами> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            marginLeft: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'end',
              marginLeft: '5px',
              marginRight: '5px',
            }}
          >
            <Typography
              sx={{ marginLeft: '5px', marginRight: '10px' }}
              variant='subtitle1'
              gutterBottom
              component='div'
            >
              {`   ${candidate.phone}   `}
            </Typography>
            <Typography
              sx={{ marginLeft: '10px' }}
              variant='subtitle1'
              gutterBottom
              component='div'
            >
              {`${candidate.email}`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'end',
              marginLeft: '5px',
              marginRight: '5px',
            }}
          >
            {tags.map((el) => (
              <Tag
                sx={{ marginLeft: '5px', marginRight: '5px' }}
                key={el.id}
                tag={el.tag_name}
                color={el.color}
              />
            ))}
          </Box>
        </Box>
        {/* </Див с доп данными и тегами> */}
        {/* <Див с чем-то> */}
        {/* </Див с чем-то> */}
        {/* <Див с инфой> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            marginTop: '50px',
            marginLeft: '10px',
          }}
        >
          {/* Бох с опытом работы */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{ marginBottom: '20px' }}
              variant='h6'
              gutterBottom
              component='div'
            >
              ОПЫТ РАБОТЫ
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
          </Box>
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
              variant='h6'
              gutterBottom
              component='div'
              sx={{ marginTop: '20px' }}
            >
              О СЕБЕ
            </Typography>
            <Typography variant='body2' gutterBottom>
              {canInfoStatus === 'success' && candidateInfo?.candidateAbout[0].descr}
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
              variant='h6'
              gutterBottom
              component='div'
              sx={{ marginTop: '20px' }}
            >
              ОБРАЗОВАНИЕ
            </Typography>
            {canInfoStatus === 'success' && candidateInfo?.candidateEducation?.map((el) => (
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
        </Box>
        {/* </Див c инфой> */}
      </Box>
    </>
  );
}

export default Candidates;
