import React, { useRef, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';

const CustomButton = styled(Button)`
  background-color: #0e4c95 !important;
  transition: opacity 0.3s ease-in-out;
  text-transform: none;
  &:hover {
    background-color: #0e4c95 !important;
    opacity: 0.8;
  }
`;

// const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    // .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  message: yup.string().required('Message is required'),
});


const ContactForm = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmitting(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          result => {
            console.log('EmailJS result', result.text);
            setFormSubmitted(true);
            resetForm({});
          },
          error => {
            console.log('EmailJS error', error.text);
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
 <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent='center'>
        <Grid item xs={12} sm={5}>
          <TextField
            fullWidth
            id='name'
            name='name'
            label='name'
            variant='filled'
            sx={{
              mt: 2,
              mx: { xs: 1, sm: 2 },
              width: { xs: '85vw', sm: '41vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            InputProps={{
              disableUnderline: true,
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
            label='email'
            variant='filled'
            sx={{
              mt: 2,
              mx: { xs: 1, sm: 2 },
              width: { xs: '85vw', sm: '41vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            InputProps={{
              disableUnderline: true,
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
            label='phone'
            variant='filled'
            sx={{
              mt: 2,
              mx: { xs: 1, sm: 2 },
              width: { xs: '85vw', sm: '41vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            InputProps={{
              disableUnderline: true,
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
            label='message'
            multiline
            rows={7.5}
            variant='filled'
            sx={{
              mt: {xs: 0, sm:2},
              mx: { xs: 1, sm: 2 },
              width: { xs: '85vw', sm: '41vw' },
              backgroundColor: 'white',
              borderRadius: 1,
            }}
            InputProps={{
              disableUnderline: true,
            }}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent={{ xs: 'center' }} sx={{ my: 3 }}>
  <CustomButton
    variant='contained'
    type='submit'
    disabled={submitting || formSubmitted}
 
  >
    send
  </CustomButton>
</Grid>

      {formSubmitted && (
        <Typography color='#0e4c95' gutterBottom>
          Message sent successfully!
        </Typography>
      )}
    </form>
  );
};

export default ContactForm;
