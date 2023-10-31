import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NavArrows = ({ onNext, onPrev }) => {
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const arrowBaseStyle = {
    margin: '10px', 
    backgroundColor: 'rgba(14, 76, 149, 0.7)',
    color: 'var(--white)',
    pointerEvents: 'auto', 
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const arrowHoverStyle = {
    backgroundColor: 'rgba(243, 242, 242, 0.7)',
    color: 'var(--blue)',
  };

  const getStyle = (isHovered) => ({
    ...arrowBaseStyle,
    ...(isHovered ? arrowHoverStyle : null),
  });

  return (
    <div style={{ 
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, 1050%)',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 2,
      pointerEvents: 'none',
    }}>
      <IconButton
        onMouseEnter={() => setHoverPrev(true)}
        onMouseLeave={() => setHoverPrev(false)}
        onClick={onPrev}
        style={getStyle(hoverPrev)}
        aria-label='Previous page'
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        onMouseEnter={() => setHoverNext(true)}
        onMouseLeave={() => setHoverNext(false)}
        onClick={onNext}
        style={getStyle(hoverNext)}
        aria-label='Next page'
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

export default NavArrows;
