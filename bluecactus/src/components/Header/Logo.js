import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import logo from './img/logo2.png';

export default function Logo() {
  return (
    <Link to="top" smooth={true} duration={500} style={{ cursor: 'pointer' }}> {/* Add cursor: 'pointer' here */}
      <Box className='logo-container' sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='Company Logo' style={{ width: '100px' }} />
        <Typography variant='h6' color='inherit' sx={{ marginLeft: '8px', fontSize: '28px', fontFamily: 'martel sans' }}>
          blue cactus
        </Typography>
      </Box>
    </Link>
  );
}
