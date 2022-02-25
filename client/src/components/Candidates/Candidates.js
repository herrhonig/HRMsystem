import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCandidate } from '../../redux/slices/candidateSlice';
import { getTags } from '../../redux/slices/tagsSlice';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tag from '../Tag/Tag'

function Candidates() {
  // Объявления
  const {id} = useParams();
  const dispatch = useDispatch();
  const candidate = useSelector(state => state.candidate.candidate);
  const tags = useSelector(state => state.tags.tags)

  // useEffect
  useEffect(()=>{
    dispatch(getCandidate(id));
    dispatch(getTags(id));
  }, []);

  // Дополнительные переменные
  const years = (new Date()).getFullYear() - candidate.birthday_year;
  console.log(candidate.photo);

  return (
    <>
    {/* <Див с аватаркой> */}
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'start', margin: '5px'}}>
      <Typography sx={{marginTop: '5px', marginBottom: '5px', marginLeft: '5px'}} variant="h3" gutterBottom component="div">
        {candidate.position}
      </Typography>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent: 'flex-start'}}>
        <Avatar
          alt="Remy Sharp"
          src={candidate.photo}
          sx={{ width: 150, height: 150 }}
        />
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'start', marginLeft: '10px'}} >
          <Typography variant="h4" gutterBottom component="div">
            {candidate.last_name}
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            {candidate.first_name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {`${candidate.birthday_day}.${candidate.birthday_month}.${candidate.birthday_year}, ${years} лет`}
          </Typography>
        </Box>
      </Box>
    </Box>
    {/* </Див с аватаркой > */}
    {/* <Див с доп данными и тегами> */}
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10px'}}>
      <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'start', alignItems:'end', marginLeft: '5px', marginRight: '5px'}}>
        <Typography sx={{marginLeft:'5px', marginRight:'10px'}} variant="subtitle1" gutterBottom component="div">
          {`   ${candidate.phone}   `}
        </Typography>  
        <Typography sx={{marginLeft:'10px'}} variant="subtitle1" gutterBottom component="div">
          {`${candidate.email}`}
        </Typography> 
      </Box>
      <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'start', alignItems:'end', marginLeft: '5px', marginRight: '5px'}}>
        {tags.map((el) => <Tag sx={{marginLeft: '5px', marginRight: '5px'}} key={el.id} tag={el.tag_name} color={el.color} />)}
      </Box>
    </Box>
    {/* </Див с доп данными и тегами> */}
    {/* <Див с чем-то> */}
    <Box>

    </Box>
    {/* </Див с чем-то> */}
    {/* <Див с инфой> */}

    {/* </Див c инфой> */}
    </>
  )
}

export default Candidates;