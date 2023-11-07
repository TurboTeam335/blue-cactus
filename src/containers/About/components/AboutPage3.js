import React from 'react';
import './AboutPage3.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';
import aboutImage from '../img/about3.jpg'; // Make sure the path is correct

const AboutPage3 = () => {
  const title = 'our approach…';
  const paragraph = 'We value relationships with clients and gardens. Our focus is on sustainable practices, ensuring your landscape is eco-friendly and aesthetically pleasing, flourishing throughout the seasons.';

  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid container spacing={2}>
        <Grid item xs={5} sm={6} className='img-container'>
          <img src={aboutImage} alt='Our approach' className='about-img' />
        </Grid>

        <Grid
          item
          xs={7}
          md={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 1, 
          }}
        >
          <Typography variant='h2'  className='fade-in title'>
            {title}
          </Typography>
          <Typography variant='body1' className='fade-in paragraph'>
            {paragraph}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage3;
