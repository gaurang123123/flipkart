import { Badge, Box, Button, Typography,styled } from '@mui/material'
import React, { useState , useContext} from 'react'
import  ShoppingCartICon  from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from "../../context/DataProvider";
import { useCart } from '../../context/CartContext';

import Profile from './Profile';
import { Link } from 'react-router-dom';

const Wrapper = styled(Box)(({theme}) =>({
    display : 'flex',
    // margin :'0 3% 0 auto',
    marginLeft : '31px',
    marginBottom : "10px",
    '& > *' : {
        marginRight : '20px !important',
        marginTop : '10px !important',
        fontSize : 16,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{
        display : 'none'
    }
}))
const CustomButton = () => {
    const [open,setOpen] = useState(false);
    const [cart,setCart] = useCart();
    const {account,setAccount} = useContext(DataContext);
  
    const handleOpen = ()=>{
        if(account == "")
        setOpen(true);
        else
        setOpen(false);
    }
  return (
    <Wrapper>
        

        <Box style={{color : '#5B6C69' , display : 'flex',cursor : "pointer"}}  onClick={()=>{handleOpen()}} >
        <AccountCircleIcon style={{marginRight : '5'}}/>
        <Typography style={{textTransform : 'none'}} >{account != "" ? <Profile account={account} setAccount={setAccount}/> : "Login"}</Typography>
    </Box>
    <Link to={'/cart'} style={{textDecoration : 'none'}}>

    <Box style={{color : '#5B6C69' , display : 'flex' ,marginLeft : '40px'}} >
        <Badge badgeContent={cart?.length} color="secondary">

        <ShoppingCartICon style={{marginRight : '0'}}/>
        </Badge>
        <Typography >Cart</Typography>
    </Box>
    </Link>
    <Box style={{color : '#5B6C69' , display : 'flex',marginLeft : '20px'}} >
        <StorefrontIcon style={{marginRight : '10'}}/>
        <Typography >Become a Seller</Typography>
    </Box>
    <MoreVertIcon style={{color: '#5B6C69',marginLeft : '10px'}}/>
    <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButton