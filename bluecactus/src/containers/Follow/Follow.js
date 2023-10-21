import React from 'react';
import { Typography, Box, IconButton, useMediaQuery } from '@mui/material'; // Import useMediaQuery
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Follow.css'
import bgImage from './background.png'

const Follow = () => {
  const matches = useMediaQuery('(max-width:900px)'); // Add this line

  return (
    <Box
      className="follow-background" 
      sx={{
        height: matches ? '60vh' : '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', 
        backgroundColor: '#1d1d1f'
      }}
    >
      <div className="background-image" /> 
      <Box
        sx={{
          border: '3px solid #f3f2f2',
          padding: 2,
          borderRadius: 1,
          width: matches ? '70vw' : '55vh', // Change this line
          height: matches ? '25vh' : '25vh', // Change this line
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant='h4'
          gutterBottom
          sx={{
            mt: 4,
            fontSize: { xs: '12px', sm: '18px' },
            fontFamily: "'Martel Sans', sans-serif",
            position: 'relative',
            zIndex: 1,
            color: '#f3f2f2',
          }}
        >
          follow us
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, mb: 4 }}> 
          <IconButton href="https://www.facebook.com" target="_blank">
            <FacebookIcon sx={{ color: '#f3f2f2', fontSize: 30 }} />
          </IconButton>
          <IconButton href="https://www.instagram.com/bluecactushorticulture/" target="_blank">
            <InstagramIcon sx={{ color: '#f3f2f2', fontSize: 30 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Follow
