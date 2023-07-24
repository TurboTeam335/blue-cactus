import React from "react";
import "./About.css";
import { Container, Typography, Box, Grid } from "@mui/material";

const About = () => {
  return (
    <Container className="about-section">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Typography className="h2" variant="h2" gutterBottom>
            About
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box className="body">
            <Typography variant="body1" gutterBottom>
              Blue Cactus Horticulture is a reputable provider of sustainable
              gardening solutions, dedicated to the beautification of high-end
              residential properties in the heart of Seattle. With a meticulous
              approach towards the management, maintenance, and transformation
              of established gardens, our suite of services includes specialized
              pruning, innovative edible garden planning and management, elegant
              landscape installations and maintenance, effective soil building,
              and meticulous planting and transplanting. We are a devoted team
              of horticulture enthusiasts, combining our expertise and passion
              to collaboratively work with our clients, and create the lush,
              captivating landscapes they've always envisioned.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
