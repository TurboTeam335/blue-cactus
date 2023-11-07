import React from 'react';
import './AboutPage1.css';
import SectionHeader from './SectionHeader';
import { Grid, Typography } from '@mui/material';
import aboutImage from '../img/about1.JPG'; // Make sure the path is correct

const AboutPage1 = () => {
  const title = 'who we are...';
  const paragraph = 'Blue Cactus Horticulture is your partner in sustainable gardening in Seattle. Our small, passionate team is dedicated to enhancing and maintaining your garden’s beauty and health.';

  return (
    <div className='page-container'>
      <SectionHeader />
      <Grid container spacing={2}>
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
          <Typography variant='h2'  className='fade-in title'>
            {title}
          </Typography>
          <Typography variant='body1'  className='fade-in paragraph'>
            {paragraph}
          </Typography>
        </Grid>

        <Grid item xs={5} md={6} className='img-container'>
          <img src={aboutImage} alt='About us' className='about-img' />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage1;
