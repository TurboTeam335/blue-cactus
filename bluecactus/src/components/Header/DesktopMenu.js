import * as React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-scroll';

export default function DesktopMenu() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', marginRight: '25px' }}
    >
      <Link
        className='myButton'
        to='about'
        smooth={true}
        duration={100}
        offset={-90} 
        style={{
          textTransform: 'none',
          fontSize: '18px',
          fontFamily: 'martel sans',
          marginRight: '25px',
          cursor: 'pointer',
        }}
      >
        about
      </Link>
      <Link
        className='myButton'
        to='gallery'
        smooth={true}
        duration={100}
        offset={-90} 
        style={{
          textTransform: 'none',
          fontSize: '18px',
          fontFamily: 'martel sans',
          marginRight: '25px',
          cursor: 'pointer',
        }}
      >
        gallery
      </Link>
      <Link
        className='myButton'
        to='contact'
        smooth={true}
        duration={100}
        offset={-111} 
        style={{
          textTransform: 'none',
          fontSize: '18px',
          fontFamily: 'martel sans',
          marginRight: '25px',
          cursor: 'pointer',
        }}
      >
        contact
      </Link>
      <Link
        className='myButton'
        to='follow'
        smooth={true}
        duration={100}
        offset={-90} 
        style={{
          textTransform: 'none',
          fontSize: '18px',
          fontFamily: 'martel sans',
          marginRight: '25px',
          cursor: 'pointer',
        }}
      >
        follow
      </Link>
    </Box>
  );
}
