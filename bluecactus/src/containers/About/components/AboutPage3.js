import React from 'react';
import './AboutPage3.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';

const AboutPage3 = ({ imgSrc, title, paragraph, className }) => {
  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid container spacing={2}>
        <Grid item xs={5} md={6} className='img-container'>
          <img src={imgSrc} alt='About us' className='about-img' />
        </Grid>

        <Grid
          item
          xs={7}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 1, 
          }}
        >
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
