import * as React from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import logo from "./img/logo.png";


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
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // clean up the event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const displayDesktop = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About Us</Button>
        {/* <Button color="inherit">Services</Button> */}
        <Button color="inherit">Galleries</Button>
        <Button color="inherit">Testimonials</Button>
        {/* <Button color="inherit">FAQ</Button> */}
        <Button color="inherit">Contact</Button>
      </Box>
    );
  };

  const displayMobile = () => {
    return (
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
    );
  };

  let appBarClasses = "app-bar";
  if (scrolled) {
    appBarClasses += " scrolled";
  }

  return (
    <AppBar position="sticky" className={`app-bar ${scrolled ? 'scrolled' : ''}`}>
      <Toolbar className="toolbar">
        <Box className="logo-container">
          <img src={logo} alt="Company Logo" className="logo"/>
        </Box>
        {mobileView ? displayMobile() : displayDesktop()}
      </Toolbar>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <List>
          {/* ... */}
        </List>
      </Drawer>
    </AppBar>
  );
}
