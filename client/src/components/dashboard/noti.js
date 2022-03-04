import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import Alarm from '../icons/Alarm.png'
import CountUp from 'react-countup';

export const Noti = (props) => (
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
            src={Alarm} />
        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Напоминания
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            <CountUp end={24} />
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
