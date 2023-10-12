import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NavArrows = ({ onNext, onPrev }) => {
  return (
    <div style={{ 
          position: 'fixed', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          zIndex: 2 
        }}>
      <IconButton onClick={onPrev} style={{ marginLeft: '10px' }} color='inherit' aria-label='Previous page'>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={onNext} style={{ marginRight: '10px' }} color='inherit' aria-label='Next page'>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

export default NavArrows;
