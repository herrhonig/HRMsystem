import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Vacancy } from '../dashboard/vacancy';
import { StatBy } from '../dashboard/statby';
import { Noti } from '../dashboard/noti';
import { CandidateStat } from '../dashboard/candstat';
import { Alarm } from '../dashboard/alarm';
import { Rate } from '../dashboard/rate';
import { DashboardLayout } from '../dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Аналитика
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
          <h2>Аналитика</h2>
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
            <StatBy />

          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Rate sx={{ height: '80%' }} />
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

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
