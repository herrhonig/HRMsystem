import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import Vacin from '../icons/vacin.png'
import CountUp from 'react-countup';

export const Vacancy = (props) => (
  <Card
    sx={{ height: '90%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Avatar
            sx={{

              mt: 1,
              height: 46,
              width: 46
            }}
            src={Vacin} />


        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Вакансий
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            <CountUp end={10} />
          </Typography>
        </Grid>

      </Grid>
    </CardContent>
  </Card>
);
