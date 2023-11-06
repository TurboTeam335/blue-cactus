import { Typography, Box } from '@mui/material';

const SectionHeader = () => {
  return (
    <Box textAlign='center' mt={5} bgcolor='#ECEBE8'>
      <Typography
        variant='h4'
        sx={{
          py: 4,
          fontSize: { xs: '12px', sm: '18px' },
          fontFamily: "'Martel Sans', sans-serif",
        }}
      >
        about
      </Typography>
      {/* <Box
        className='underline'
        width='3%'
        mx='auto'
        borderBottom={1}
        borderColor='grey.500'
        mb={5}
      /> */}
    </Box>
  );
};

export default SectionHeader