import { Doughnut } from 'react-chartjs-2';
import { Avatar, Grid, Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import Top from '../icons/top.png'
import Topman from '../icons/topman.png'
import TopM from '../icons/topman2.png'



export const Rate = (props) => {
  const theme = useTheme();


  return (
    <Card {...props}>

      <CardContent>

        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >

          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              Топ консультантов
            </Typography>

          </Grid>

          <Grid item>
            <Avatar
              sx={{

                mt: 1,
                height: 26,
                width: 26
              }}
              src={Top} />


          </Grid>
        </Grid>






        <Box
          key='1'
          sx={{
            p: 1,
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h1"



          >
            ТОП 5
          </Typography>

          <Typography
            color="textPrimary"
            variant="body1"
          >
            <img

              sx={{

                justifyContent: 'center',
                pt: 2,
                height: 26,
                width: 26

              }}
              src={Topman} />
          </Typography>
          <Typography
            color="textPrimary"
            variant="t1"
          >
            Мартынова Ольга
          </Typography>
          <Typography
            color="blue"
            variant="t0"
            display='block'
          >
            20 кандидатов
          </Typography>

        </Box>

        <Box

          sx={{ mt: 4, backgroundColor: '#EBEBFA', borderRadius: 44, width: '100%', height: 50 }}

        >
          <Grid


            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item display='flex' sx={{ pl: 3, pt: 1.3 }} style={{ width: '100%' }}>
              <Typography
                color="blue"
                variant="h2"

              >
                2
              </Typography>

              <Grid>
                <Avatar
                  sx={{


                    height: 26,
                    width: 26,
                    pl: 3
                  }}
                  src={TopM} />


              </Grid>

              <Typography
                color="blue"
                variant="t0"
                sx={{ pl: 0.3, pt: 0.5 }}
              >

                Иванов Иван
              </Typography>
              <Typography
                color="blue"
                variant="t0"
                sx={{ pl: 3.5, pt: 0.5 }}
              >
                18
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box

          sx={{ mt: 4, backgroundColor: '#EBEBFA', borderRadius: 44, width: '100%', height: 50 }}

        >
          <Grid


            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item display='flex' sx={{ pl: 3, pt: 1.3 }} style={{ width: '100%' }}>
              <Typography
                color="blue"
                variant="h2"

              >
                3
              </Typography>

              <Grid>
                <Avatar
                  sx={{


                    height: 26,
                    width: 26,
                    pl: 3
                  }}
                  src={TopM} />


              </Grid>

              <Typography
                color="blue"
                variant="t0"
                sx={{ pl: 0.3, pt: 0.5 }}
              >

                Цветков Кирилл
              </Typography>
              <Typography
                color="blue"
                variant="t0"
                sx={{ pl: 1, pt: 0.5 }}
              >
                11
              </Typography>
            </Grid>
          </Grid>
        </Box>



      </CardContent>
    </Card >

  );
}
