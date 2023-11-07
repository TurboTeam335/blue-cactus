import React from 'react';
import './AboutPage2.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';
import aboutImage from '../img/about2.jpg'; // Make sure the path is correct

const AboutPage2 = () => {
  const title = 'what we do…';
  const paragraph = 'We offer premium gardening services to upscale residential properties, including pruning, edible garden planning, and landscape installations. Our detailed and creative approach caters to your specific garden needs.';

  return (
    <div className='page-container layout2'>
      <SectionHeader />
      <Grid container spacing={2}>
        <Grid item xs={12} className='text-container'>
          <Typography variant='h2'  className='fade-in title'>
            {title}
          </Typography>
          <Typography variant='body1' className='fade-in paragraph'>
            {paragraph}
          </Typography>
        </Grid>
        <Grid item xs={12} className='img-container'>
          <img src={aboutImage} alt='What we do' className='about-img' />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage2;
