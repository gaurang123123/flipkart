import { Box, Button,styled } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useCart } from '../../context/CartContext';
const Leftcontainer = styled(Box)(({theme}) =>({
  minWidth : '40%',
  padding : '40px 0 0 80px',
  [theme.breakpoints.down('md')] : {
    padding : '10px 18px'
  }

}))



const Image = styled('img')`
 padding : 15px;

width : 90%;
`
const Styledbutton = styled(Button)(({theme}) =>({
  width : '48%',
  height: '55px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')] : {
    width : '47%',
  },
  [theme.breakpoints.down('sm')] : {
    width : '47%',
  }
}))


const ActionItem = ({product}) => {
  const [cart,setCart] = useCart();
  return (
    <Leftcontainer>
      <Box style={{padding : '15px 20px' , border : '1px solid #f0f0f0'}}>
      <Image src={product?.detailUrl} alt="img"/> 
      </Box>
       <Box style={{marginTop : 10}}>
      <Styledbutton   onClick={()=>{
        setCart([...cart,product]);
        localStorage.setItem('cart',JSON.stringify([...cart,product]))
        alert("Item added successfully");
       }} variant='contained' style={{marginRight : 10 , background : '#ff9f00'}}><ShoppingCartIcon/>ADD TO CART</Styledbutton>
       <Styledbutton variant='contained' style={{ marginLeft: 2 , background : '#fb5413'}}><FlashOnIcon/>BUY NOW</Styledbutton>
       </Box>
  

    
       
    </Leftcontainer>
  )
}

export default ActionItem;