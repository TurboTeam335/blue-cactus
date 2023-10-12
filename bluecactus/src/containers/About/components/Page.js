import React from 'react';
import './Page.css';
import { Grid, Typography } from '@mui/material';

const Page = ({ imgSrc, title, paragraph, layoutType }) => {
  return (
    <Grid container className='page-container'>
      {layoutType === 'layout1' && (
        <>
          <Grid item xs={12} md={6} className='text-container'>
            <Typography variant='h4' className='about-us'>
              about us
            </Typography>
            <hr className='underline' /> {/* Add this line back */}
            <Typography variant='h2' className='title'>
              {title}
            </Typography>
            <Typography variant='body1' className='paragraph'>
              {paragraph}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className='img-container'>
            <img src={imgSrc} alt='About us' className='about-img' />
          </Grid>
        </>
      )}
      
      {layoutType === 'layout2' && (
        <>
          <Grid item xs={12} className='text-container layout2'>
            {/* <Typography variant='h4' className='about-us'>
              about us
            </Typography>
            <hr className='underline' /> */}
            <Typography variant='h2' className='title'>
              {title}
            </Typography>
            <Typography variant='body1' className='paragraph'>
              {paragraph}
            </Typography>
          </Grid>
          <Grid item xs={12} className='img-container layout2'>
            <img src={imgSrc} alt='About us' className='about-img layout2' />
          </Grid>
        </>
      )}

{layoutType === 'layout3' && (
        <>
          <Grid item xs={12} md={6} className='img-container layout3'>
            <img src={imgSrc} alt='About us' className='about-img layout3' />
          </Grid>
          <Grid item xs={12} md={6} className='text-container layout3'>
            {/* <Typography variant='h4' className='about-us layout3'>
              about us
            </Typography>
            <hr className='underline layout3' /> */}
            <Typography variant='h2' className='title layout3'>
              {title}
            </Typography>
            <Typography variant='body1' className='paragraph layout3'>
              {paragraph}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Page;

