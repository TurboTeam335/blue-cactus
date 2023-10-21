import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import logo from './img/logo2.png';
import logo2 from './img/Logo4.png';

export default function Logo({ scrolled }) { // Add 'scrolled' as a prop
  return (
    <Link to="top" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
      <Box className='logo-container' sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={scrolled ? logo : logo2} alt='Company Logo' style={{ width: '100px' }} /> {/* Change the logo based on 'scrolled' */}
        <Typography variant='h6' color='inherit' sx={{ marginLeft: '8px', fontSize: '28px', fontFamily: 'martel sans' }}>
          blue cactus
        </Typography>
      </Box>
    </Link>
  );
}
