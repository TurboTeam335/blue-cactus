import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <Box
      textAlign='center'

      bgcolor='#ECEBE8'
      style={{ zIndex: 2, overflow: 'hidden' }}
    >
      <Typography
        variant='h4'
        sx={{
          mt: 4,
          fontSize: { xs: '12px', sm: '18px' },
          fontFamily: "'Martel Sans', sans-serif",
        }}
      >
        contact
      </Typography>
      <Box
        className='underline'
        width='3%'
        mx='auto'
        borderBottom={1}
        borderColor='grey.500'
        mb={5}
      />
      <ContactForm />
    </Box>
  );
};

export default Contact;
