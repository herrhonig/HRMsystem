import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Noti from '../icons/Noti.png'
import CountUp from 'react-countup';

export const Alarm = (props) => (
  <Card sx={{ height: '90%' }}
    {...props}>
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
            src={Noti} />
        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Уведомления
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            <CountUp end={3} />
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
