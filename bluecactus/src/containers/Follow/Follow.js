import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Follow.css'
import bgImage from './background.png'

const Follow = () => {
  return (
    <Box
      className="follow-background" 
      sx={{
        height: '100vh',
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
          width: '55vh',
          height: '25vh',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'space-between', // Change this line
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
