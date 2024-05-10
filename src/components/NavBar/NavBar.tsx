import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { AccountBox, Forum, People } from '@mui/icons-material';

const NavBar = ({ id }: { id: number }) => {
  return (
    <Box sx={{ gridArea: 'b', position: 'sticky' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: {
            width: 240,
            boxSizing: 'border-box',
            top: 'auto',
            left: 'auto',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', margin: '10px' }}>
          <List sx={{ gridArea: 'b' }}>
            {[
              { name: 'Профиль', link: `/profile/${id}`, icon: <AccountBox /> },
              { name: 'Сообщения', link: '/messages', icon: <Forum /> },
              { name: 'Пользователи', link: '/users', icon: <People /> },
            ].map(({ name, link, icon }) => (
              <NavLink key={name} to={link} style={{ textDecoration: 'none' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
