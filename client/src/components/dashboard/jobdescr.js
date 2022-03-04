import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Stack, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVacancy } from '../../redux/slices/vacancySlice';
import { useParams, useLocation } from 'react-router-dom';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import Chip from '@mui/material/Chip';

export const JobDescr = (props) => {
  const theme = useTheme();

  // Объявления
  const dispatch = useDispatch();
  const { clientsid, chatid, vacancyid, id } = useParams();

  const location = useLocation();

  // States
  const vacancy = useSelector((state) => state.vacancy.vacancy);
  const dateString = vacancy.deadline

  // useEffect
  useEffect(() => {
    dispatch(getVacancy(vacancyid));
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



  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <Card
      // sx={{ height: '70%' }}
      // style={{ width: '100%' }}

      {...props}
    >
      <CardContent >

        <Grid
          container
          spacing={3}

        // sx={{ flexItem }}
        >

          <Grid item style={{ width: '100%' }}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h0"

            >
              О вакансии
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
              sx={{ pt: 1 }}


            >
              {vacancy.position}
            </Typography>

            <Typography
              color="textPrimary"
              variant="h0"

            >
              {vacancy.compName}
            </Typography>
            <Typography
              color="textPrimary"
              variant="t2"
              sx={{ pl: 2 }}
              display='inline'

            >
              |
            </Typography>
            <Typography
              color="textPrimary"
              variant="t2"
              sx={{ pl: 2 }}
              display='inline'

            >
              {vacancy.priorName}
            </Typography>

            <Typography
              color="textPrimary"
              variant="t2"
              sx={{ pl: 2 }}
              display='inline'

            >
              |
            </Typography>

            <Typography
              color="textPrimary"
              variant="t2"
              sx={{ pl: 2 }}
              display='inline'

            >
              <Chip label={vacancy.money} sx={{ borderRadius: '10' }} variant="outlined" />

            </Typography>
            <Typography
              color="textPrimary"
              variant="h0"
              sx={{ pt: 1 }}
              display='block'

            >
              Описание:
            </Typography>
            <Typography
              color="textPrimary"
              variant="t2"

            >
              {vacancy.descr}
            </Typography>

            <Typography
              color="textPrimary"
              variant="h0"
              sx={{ pt: 2 }}
              display='block'

            >
              Требования:
            </Typography>

            <Typography
              color="textPrimary"
              variant="t2"
              display='block'

            >
              {vacancy.requirements}
            </Typography>


            <Typography
              color="textPrimary"
              variant="h0"

              sx={{ pt: 2 }}
              display='block'

            >
              Условия:
            </Typography>

            <Typography
              color="textPrimary"
              variant="t2"

            >
              {vacancy.conditions}
            </Typography>

            <Grid sx={{ pt: 2 }}>
              <Typography
                variant='subtitle2'
                gutterBottom

                display='inline'

              >
                DL: <Chip label={formatDate(dateString)} color='primary' variant="outlined" />
              </Typography>

              <Typography
                color="textPrimary"
                variant="t2"
                sx={{ pl: 2 }}
                display='inline'
              >
                |
              </Typography>

              <Typography sx={{ pl: 2 }} variant='t2' gutterBottom display='inline' >
                Статус: <Chip label={vacancy.statusName} color='primary' variant="outlined" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent >
    </Card >
  );
};







// function JobDescr() {


//   return (
//     <Box
//       sx={{
//         boxShadow: 3,
//         bgcolor: (theme) =>
//           theme.palette.mode === 'dark' ? '#101010' : '#fff',
//         color: (theme) =>
//           theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//         p: 1,
//         m: 1,
//         borderRadius: 2,
//         textAlign: 'center',
//         fontSize: '0.875rem',
//         fontWeight: '700',
//       }}
//     >
//       <Stack
//         direction='column'
//         justifyContent='center'
//         alignItems='flex-start'
//         spacing={2}
//         sx={{ width: '800px' }}
//       >
//         <Typography variant='h6' gutterBottom component='div'>
//           О вакансии
//         </Typography>
//         <Stack
//           direction='column'
//           justifyContent='center'
//           alignItems='flex-start'
//           spacing={2}
//         >
//           <Typography variant='h4' gutterBottom component='div'>
//             {vacancy.position}
//           </Typography>
//           <Stack
//             direction='row'
//             divider={<Divider orientation='vertical' flexItem />}
//             alignItems='center'
//             spacing={2}
//           >
//             <Typography variant='subtitle2' gutterBottom component='div'>
//               {vacancy.compName}
//             </Typography>
//             <Typography variant='subtitle2' gutterBottom component='div'>
//               {vacancy.priorName}
//             </Typography>
//             <Chip label={vacancy.money} color='primary' />
//           </Stack>
//           {/* Описание вакансии */}
//           <Stack
//             direction='column'
//             justifyContent='center'
//             alignItems='flex-start'
//             spacing={1}
//           >
//             <Typography variant='h6' gutterBottom component='div'>
//               Описание вакансии
//             </Typography>
//             <Typography variant='subtitle2' gutterBottom component='div'>
//               Описание:
//             </Typography>
//             <Typography variant='body2' gutterBottom>
//               {vacancy.descr}
//             </Typography>
//             <Typography variant='subtitle2' gutterBottom component='div'>
//               Требования:
//             </Typography>
//             <Typography variant='body2' gutterBottom>
//               {vacancy.requirements}
//             </Typography>
//             <Typography variant='subtitle2' gutterBottom component='div'>
//               Условия:
//             </Typography>
//             <Typography variant='body2' gutterBottom>
//               {vacancy.conditions}
//             </Typography>
//           </Stack>
//           {/* Описание вакансии */}
//           {/* Доп данные */}
//           <Stack
//             direction='row'
//             divider={<Divider orientation='vertical' flexItem />}
//             spacing={2}
//           >
// <Typography variant='subtitle2' gutterBottom component='div'>
//   DL: <Chip label={vacancy.deadline} color='primary' />
// </Typography>
// <Typography variant='subtitle2' gutterBottom component='div'>
//   Статус: <Chip label={vacancy.statusName} color='primary' />
// </Typography>
//           </Stack>
//           {/* Доп данные */}
//         </Stack>
//       </Stack>
//     </Box>
//   );
// }

export default JobDescr;
