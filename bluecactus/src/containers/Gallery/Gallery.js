import React from 'react';
import { Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './img/img20.JPG';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.png';
import img11 from './img/img11.png';
import img12 from './img/img12.jpg';
import img13 from './img/img13.jpeg';
import img14 from './img/img14.jpeg';
import img15 from './img/img15.JPG';
import img16 from './img/img16.JPG';
import img17 from './img/img17.jpeg';
import img18 from './img/img18.jpg';
import img19 from './img/img19.JPG';
import img20 from './img/img1.jpg';
import img21 from './img/img21.jpg';

const Gallery = () => {
  // Image array - replace 'image1.jpg', 'image2.jpg', etc. with the actual paths to your images
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      textAlign='center'
      mt={5}
      bgcolor='#f3f2f2'
      style={{ zIndex: 2, overflow: 'hidden', backgroundColor: '#f3f2f2' }}
    >
      <Typography
        variant='h4'
        gutterBottom
        sx={{
          mt: 4,
          fontSize: { xs: '12px', sm: '18px' },
          fontFamily: "'Martel Sans', sans-serif",
        }}
      >
        galleries
      </Typography>
      <Box
        className='underline'
        width='3%'
        mx='auto'
        borderBottom={1}
        borderColor='grey.500'
        mb={5}
      />

      <Box
        maxHeight='65vh'
        maxWidth='125vh'
        width={{ xs: '100%', sm: '100%' }}
        mx='auto'
        bgcolor='#f3f2f2'
        style={{ zIndex: 2, backgroundColor: "#f3f2f2", }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Gallery ${index}`}
                style={{ width: '100%', height: 'auto',  paddingBottom: '20px'  }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Gallery;
