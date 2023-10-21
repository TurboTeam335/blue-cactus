import * as React from 'react';
import { IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import './MobileMenu.css';

export default function MobileMenu({
  handleDrawerOpen,
  drawerOpen,
  handleDrawerClose,
}) {
  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ className: 'drawerPaper' }}
      >
        <List
          style={{
            color: 'var(--white)',
            width: 'fit-content',
          }}
        >
          <ListItem button>
            <Link
              className='myButton'
              to='about'
              smooth={true}
              duration={100}
              style={{
                textTransform: 'none',
                fontSize: '16px',
                fontFamily: 'martel sans',
                marginRight: '25px',
                color: 'var(--white)',
              }}
              onClick={handleDrawerClose}
            >
              about
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              className='myButton'
              to='gallery'
              smooth={true}
              duration={100}
              style={{
                textTransform: 'none',
                fontSize: '16px',
                fontFamily: 'martel sans',
                marginRight: '25px',
              }}
              onClick={handleDrawerClose}
            >
              gallery
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              className='myButton'
              to='contact'
              smooth={true}
              duration={100}
              style={{
                textTransform: 'none',
                fontSize: '16px',
                fontFamily: 'martel sans',
                marginRight: '25px',
              }}
              onClick={handleDrawerClose}
            >
              contact
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              className='myButton'
              to='follow'
              smooth={true}
              duration={100}
              style={{
                textTransform: 'none',
                fontSize: '16px',
                fontFamily: 'martel sans',
                marginRight: '25px',
              }}
              onClick={handleDrawerClose}
            >
              follow
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
