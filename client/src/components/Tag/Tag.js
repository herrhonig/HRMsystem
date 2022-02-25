import React from 'react';
import Chip from '@mui/material/Chip';

const Tag = ({tag, color}) => {
  
  return (
    <Chip label={tag} color={color} />
  )
}

export default Tag;
