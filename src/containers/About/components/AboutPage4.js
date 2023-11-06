import React from 'react';
import './AboutPage4.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';

const AboutPage4 = ({ imgSrc, title, paragraph, className }) => {
  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid item xs={12} className='text-container layout4'>
      <Typography variant='h2' className={`${className} title`}>
            {title}
          </Typography>
          <Typography variant='body1' className={`${className} paragraph`}>
            {paragraph}
          </Typography>
      </Grid>
      <Grid item xs={12} className='img-container layout4'>
        <img src={imgSrc} alt='About us' className='about-img layout4' />
      </Grid>
    </div>
  );
};

export default AboutPage4;
