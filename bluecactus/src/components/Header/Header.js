import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import logo from './img/logo2.png';

export default function Header() {
  const [mobileView, setMobileView] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleResize = () => {
    return window.innerWidth <= 900
      ? setMobileView(true)
      : setMobileView(false);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      // clean up the event listener
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const displayDesktop = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginRight: '25px' }}>
      <Button 
        className="myButton"
        color='inherit' 
        style={{ textTransform: 'none', fontSize: '18px', fontFamily: 'martel sans', marginRight: '25px' }}
      >
        about
      </Button>
      <Button 
        className="myButton"
        color='inherit' 
        style={{ textTransform: 'none', fontSize: '18px', fontFamily: 'martel sans', marginRight: '25px' }}
      >
        gallery
      </Button>
      <Button 
        className="myButton"
        color='inherit' 
        style={{ textTransform: 'none', fontSize: '18px', fontFamily: 'martel sans', marginRight: '25px' }}
      >
        contact
      </Button>
    </Box>
    
    
    );
  };

  const displayMobile = () => {
    return (
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
    );
  };

  let appBarClasses = 'app-bar';
  if (scrolled) {
    appBarClasses += ' scrolled';
  }

  return (
    <AppBar position='sticky' className={`app-bar ${scrolled ? 'scrolled' : ''}`}>
    <Toolbar className='toolbar'>
      <Box className='logo-container' sx={{ display: 'flex', alignItems: 'center',  }}>
        <img src={logo} alt='Company Logo' style={{ width: '100px' }} />
        <Typography variant='h6' color='inherit' sx={{ marginLeft: '8px', fontSize: '28px', fontFamily: 'martel sans' }}>
          blue cactus
        </Typography>
      </Box>
      {mobileView ? displayMobile() : displayDesktop()}
    </Toolbar>
    <Drawer anchor='top' open={drawerOpen} onClose={handleDrawerClose}>
      <List></List>
    </Drawer>
  </AppBar>
  
  
  );
}
