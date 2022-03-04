import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import Candidates from '../icons/Candidates.png'
import CountUp from 'react-countup';

export const CandidateStat = (props) => (
  <Card
    sx={{ height: '90%' }}
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
            src={Candidates} />
        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Кандидаты
          </Typography>

          <Typography
            color="textPrimary"
            variant="h1"
          >
            <CountUp end={305} />
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
