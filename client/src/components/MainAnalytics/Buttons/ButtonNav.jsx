import { Chip, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ImageIcon from '@mui/icons-material/Image';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { signOut } from '../../../redux/slices/userSlice';

const ButtonNav = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(signOut());
    navigate('/');
  }
  return (
    <>
    <Stack
          marginTop='230px'
          flexWrap='wrap'
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          // marginLeft='150px'
          spacing={2}
        >
          <Box
        sx={{
          width: 380,
          // direction:'column',
          boxShadow: 1,
          // bgcolor: (theme) =>
          //   theme.palette.mode === 'dark' ? '#101010' : '#fff',
          // color: (theme) =>
          //   theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          // textAlign: 'center',
          alignItems:"center",
          justifyContent:"space-around",
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <Box>
          <IconButton aria-label="delete" size="large" color="secondary">
            {isAuth &&
          <Button
                type="submit"
                size="small"
                color="warning"
                onClick={logoutHandler}
                variant="contained"
                sx={{ mt: 0, mb: 0 }}
              >
                Выйти
              </Button>   
          }
          </IconButton>
        </Box>
        {/* <Box>
          <IconButton aria-label="delete" size="large" color="secondary">
            <DeleteIcon fontSize="inherit" />
            <AlarmIcon />
          </IconButton>
        </Box> */}

      </Box>
        </Stack>
    </>
  )
}

export default ButtonNav
