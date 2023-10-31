import * as React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-scroll';
import logo from './img/logo2.png';
import logo2 from './img/Logo4.png';

export default function Logo({ scrolled }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Link to="top" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
      <Box className='logo-container' sx={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={scrolled ? logo : logo2} 
          alt='Company Logo' 
          style={{ width: isMobile ? '60px' : '100px' }}
        />
        <Typography 
          variant='h6' 
          color='inherit' 
          sx={{ 
            marginLeft: '8px', 
            fontSize: isMobile ? '18px' : '28px', 
            fontFamily: 'martel sans'
          }}
        >
          blue cactus
        </Typography>
      </Box>
    </Link>
  );
}
