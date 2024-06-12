import { Typography,Box, Menu, MenuItem ,styled} from "@mui/material";
import React, {useState} from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import { useAuth } from "../../context/DataProvider";
// import { Link } from "react-router-dom";
 const Component = styled(Menu)`
 margin-top : 40px;
 margin-left: -20px;
 padding: 10px;
 `
 const ComIcon = styled(Typography)`
 margin-bottom : 3px;
 font-size : 16px;
 width : 100px;
 cursor: pointer;
 `
function Profile({account,setAccount}) {
  const [open, setOpen] = useState(false);
  // const [auth,setAuth] = useAuth()
  const handleclick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () =>{
      setAccount("")
      //  setAuth({
      //   ...auth ,
      //   user : null,
      //   token : ""
      //  })
       localStorage.removeItem('auth');
       alert("Logout Successfully..")
  }
  return (
    <>
      <Box onClick={handleclick}>
        <ComIcon Component="span">
           Account ^
            </ComIcon>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
            <AccountCircleIcon color="primary"/>
            My Profile({account})</MenuItem>
        <MenuItem onClick={handleClose}>
            <ShoppingCartIcon color="primary"/>
            Orders</MenuItem>
        <MenuItem onClick={handleClose}>
            <FavoriteBorderIcon color="primary"/>
            Wishlists</MenuItem>
        <MenuItem onClick={handleClose}>
            <BlindsClosedIcon color="primary"/>
            Coupons</MenuItem>
            {/* <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}  `} style={{textDecoration : 'none' , color : '#000' }}> */}
            <MenuItem onClick={handleClose}>
            <DashboardIcon color="primary"/>
            Dashboard</MenuItem>
            {/* </Link> */}
          
        <MenuItem onClick={handleClose}>
            <NotificationsIcon color="primary"/>
            Notification</MenuItem>
        <MenuItem onClick={() =>{handleClose();
        handleLogout();
        
        }}>
            <PowerSettingsNewIcon color="primary"/>
            Logout</MenuItem>
      </Component>
    </>
  );
}

export default Profile;
