import React from 'react';
import Chip from '@mui/material/Chip';

const Tag = ({tag}) => {
  return (
    <Chip label={tag} color="primary" />
  )
}

export default Tag;
