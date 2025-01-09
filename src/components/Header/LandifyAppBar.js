import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function LandifyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{
      boxShadow:'none',
      height:'100px'
    }} color='#2B2B2B'  position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: {lg:"24px",xs:'12px'},
              lineHeight: "24px",
              display: "flex",
              alignItems: "center",
              color: "#FFFFFF",
              textDecoration:'none',
              position:'relative',
              left:{lg:'50px',xs:'0'},
              top:'33px'
              
            }}
          >
          Wallet
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' },
        
        justifyContent:{lg:'flex-end',xs:'flex-end'},gap:'30px'}}>
           <Button sx={{
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: {lg:"24px",xs:'12px'},
              lineHeight: "32px",
              textAlign: "right",
              color: "#FFFFFF",
              textTransform:'none',
                  right:'50px',
              top:'33px'
           }}>
            Sign up 
           </Button>
           <Button sx={{
              width: {lg:"175px",xs:'90px'},
              height: "50px",
              background: "#BFAFF2",
              borderRadius: "15px",
              color:'#333333',
                  right:'50px',
              top:'33px'
           }}>
          Log In
           </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LandifyAppBar;
