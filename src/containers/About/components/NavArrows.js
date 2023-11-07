import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './NavArrows.css'

const NavArrows = ({ onNext, onPrev }) => {
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Use an effect to detect window resizing
  React.useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', updateSize);
    updateSize(); 
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const arrowBaseStyle = {
    margin: '10px',
    backgroundColor: 'rgba(14, 76, 149, 0.7)',
    color: 'var(--white)',
    pointerEvents: 'auto',
    transition: 'background-color 0.3s ease, color 0.3s ease',

    fontSize: isMobile ? '.75rem' : '2.5rem' 
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
    <div className="nav-arrow"
    style={{ 
      position: 'absolute',
      top:  isMobile ? '90%' :'142%',
      left: '50%',
      transform:  'translate(-50%, -50%)',
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
        <ArrowBackIcon style={{ fontSize: arrowBaseStyle.fontSize }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => setHoverNext(true)}
        onMouseLeave={() => setHoverNext(false)}
        onClick={onNext}
        style={getStyle(hoverNext)}
        aria-label='Next page'
      >
        <ArrowForwardIcon style={{ fontSize: arrowBaseStyle.fontSize }} />
      </IconButton>
    </div>
  );
};

export default NavArrows;
