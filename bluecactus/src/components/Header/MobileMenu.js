import * as React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileMenu({ handleDrawerOpen }) {
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
}
