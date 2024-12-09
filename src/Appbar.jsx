import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const options = [
  'Home'
];

export default function Appbar(props) {
  // State to control the menu open/close
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Handle MenuIcon click to open the menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate('/');
  };

  const handleSignUp = ()=>{
    navigate('/user/SignUp');
  }
  
  const handleSignIn = ()=>{
    navigate('/user/SignIn')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* MenuIcon Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon/>
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>

          {/* Button */}
          <Button color="inherit" onClick={handleSignUp}>Sign Up</Button>
          <Button color="inherit" onClick={handleSignIn}>Sign In</Button>
        </Toolbar>
      </AppBar>

      {/* The Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}  // Anchor the menu to the MenuIcon
        open={open}           // Control the menu open/close state
        onClose={handleMenuClose}  // Close the menu when clicking outside or selecting an item
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleMenuClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
