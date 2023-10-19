import * as React from 'react';
import { Box, Button } from '@mui/material';

export default function DesktopMenu() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginRight: '25px' }}>
      <Button 
        className="myButton"
        color='inherit' 
        style={{ textTransform: 'none', fontSize: '18px', fontFamily: 'martel sans', marginRight: '25px' }}
      >
        about
      </Button>
      <Button 
        className="myButton"
        color='inherit' 
        style={{ textTransform: 'none', fontSize: '18px', fontFamily: 'martel sans', marginRight: '25px' }}
      >
        gallery
      </Button>
      <Button 
        className="myButton"
        color='inherit' 
        style={{ textTransform: 'none', fontSize: '18px', fontFamily: 'martel sans', marginRight: '25px' }}
      >
        contact
      </Button>
    </Box>
  );
}
