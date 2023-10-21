import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import './Header.css';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

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

  return (
    <AppBar
      position='sticky'
      className={`app-bar ${scrolled ? 'scrolled' : ''}`}
    >
      <Toolbar className='toolbar'>
        <Logo />
        {mobileView ? (
          <MobileMenu
            handleDrawerOpen={handleDrawerOpen}
            drawerOpen={drawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
        ) : (
          <DesktopMenu />
        )}
      </Toolbar>
    </AppBar>
  );
}
