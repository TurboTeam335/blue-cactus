import React from 'react';
import './AboutPage3.css'; // Make sure this CSS file is updated with styles consistent with AboutPage1 but for layout3
import SectionHeader from './SectionHeader';
import { Grid, Typography, Box } from '@mui/material';

const AboutPage3 = ({ imgSrc, title, paragraph, className }) => {
  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid container spacing={2}>
        {/* Image on the left */}
        <Grid item xs={12} md={6} className='img-container'>
          <img src={imgSrc} alt='About us' className='about-img' />
        </Grid>
        {/* Text on the right, centered vertically */}
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 4  // Adjust padding as needed
        }}>
       <Typography variant='h2' className={`${className} title`}>
            {title}
          </Typography>
          <Typography variant='body1' className={`${className} paragraph`}>
            {paragraph}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage3;
