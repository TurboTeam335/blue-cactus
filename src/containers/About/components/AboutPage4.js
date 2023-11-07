import React from 'react';
import './AboutPage4.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';
import aboutImage from '../img/about4.png'; // Make sure the path is correct

const AboutPage4 = () => {
  const title = 'our passion…';
  const paragraph = 'We are devoted gardeners, treating every project with personal care and attention. With Blue Cactus, you’re partnering with enthusiasts dedicated to realizing your garden’s full potential.';

  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid item xs={12} className='text-container layout4'>
        <Typography variant='h2'  className='fade-in title'>
          {title}
        </Typography>
        <Typography variant='body1' className='fade-in paragraph'>
          {paragraph}
        </Typography>
      </Grid>
      <Grid item xs={12} className='img-container layout4'>
        <img src={aboutImage} alt='Our passion' className='about-img layout4' />
      </Grid>
    </div>
  );
};

export default AboutPage4;
