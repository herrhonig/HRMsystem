import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Vacancy } from '../dashboard/vacancy';
import { StatBy } from '../dashboard/statby';
import { Noti } from '../dashboard/noti';
import { CandidateStat } from '../dashboard/candstat';
import { Alarm } from '../dashboard/alarm';
import { Rate } from '../dashboard/rate';
import { DashboardLayout } from '../dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import JobDescr from '../dashboard/jobdescr';



function VacancyPage() {

  const { clientsid, chatid, vacancyid, id } = useParams();
  const location = useLocation()
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(changeMenu({ locationPath: location.pathname, clientsid, chatid, vacancyid, id }));
  }, [location]);

  return (
    <>
      <Head>
        <title>
          Аналитика по вакансиям
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: -1.4,
          width: '90%',
          mx: 'auto',
        }}
      >
        <Container maxWidth={false}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 0.6
            }}>
            <h2>Аналитика по вакансии</h2>
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={3}
              xl={3}
              xs={5}
            >
              <Vacancy />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <CandidateStat />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <Noti />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <Alarm />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <JobDescr />

            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <Rate />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}

            >
              <StatBy />

            </Grid>

            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}


VacancyPage.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default VacancyPage;

