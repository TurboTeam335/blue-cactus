import React, { useRef } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  background-color: #0e4c95 !important;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    background-color: #0e4c95 !important;
    opacity: 0.8;
  }
`;

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          form.current,
          'YOUR_PUBLIC_KEY'
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id='name'
            name='name'
            label='Name'
            variant='filled'
            sx={{
              mt: 2,
              width: { xs: '70vw', sm: '31.5vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            variant='filled'
            sx={{
              mt: 2,
              width: { xs: '70vw', sm: '31.5vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id='phone'
            name='phone'
            label='Phone'
            variant='filled'
            sx={{
              mt: 2,
              width: { xs: '70vw', sm: '31.5vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id='message'
            name='message'
            label='Message'
            multiline
            rows={7.5}
            variant='filled'
            sx={{
              mt: 2,
              width: { xs: '70vw', sm: '31.5vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
      </Grid>
      <CustomButton
        variant='contained'
        fullWidth
        type='submit'
        sx={{ mt: 3, mb: 3, width: 85 }}
      >
        Send
      </CustomButton>
    </form>
  );
};

export default ContactForm;
