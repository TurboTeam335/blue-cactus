import * as React from 'react';
import { Box, Typography } from '@mui/material';
import logo from './img/logo2.png';

export default function Logo() {
  return (
    <Box className='logo-container' sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='Company Logo' style={{ width: '100px' }} />
      <Typography variant='h6' color='inherit' sx={{ marginLeft: '8px', fontSize: '28px', fontFamily: 'martel sans' }}>
        blue cactus
      </Typography>
    </Box>
  );
}
