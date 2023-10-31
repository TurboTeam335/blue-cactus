import React from 'react';
import './AboutPage2.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';

const AboutPage2 = ({ imgSrc, title, paragraph, className }) => {
  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid item xs={12} className='text-container layout2'>
      <Typography variant='h2' className={`${className} title`}>
            {title}
          </Typography>
          <Typography variant='body1' className={`${className} paragraph`}>
            {paragraph}
          </Typography>
      </Grid>
      <Grid item xs={12} className='img-container layout2'>
        <img src={imgSrc} alt='About us' className='about-img layout2' />
      </Grid>
    </div>
  );
};

export default AboutPage2;
