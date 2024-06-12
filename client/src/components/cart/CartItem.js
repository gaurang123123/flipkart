import { Typography,Box,styled } from '@mui/material'
import React from 'react'
import ButtonGroup from './ButtonGroup';
import { useCart } from '../../context/CartContext';
const Component = styled(Box)`
  border-top : 1px solid #f0f0f0;
  display : flex;
`

const LeftComponent = styled(Box)`
margin: 20px;
display : flex;
flex-direction: column;
`
const SmallText = styled(Typography)`
  color : #878787;
  font-size : 14px;
  margin-top : 30px;
`
const CartItem = ({item}) => {
    const [cart,setCart] = useCart();
    const removeCartItem = (pid)=>{
        try{
            let mycart = [...cart]
            let index = mycart.findIndex(item => item._id === pid)
            mycart.splice(index,1);
            setCart(mycart);
            localStorage.setItem('cart',JSON.stringify(mycart))
        }catch(error)
        {
            console.log(error);
        }
    }
    const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


  return (
    <Component>
        <LeftComponent>
           <img src={item.url} alt="image" style={{height : '100px', width : '100px'}}/>
           <ButtonGroup/>

        </LeftComponent>
        <Box>
           <Typography>{item.title.longTitle}</Typography>
           <SmallText>Seller:RetailNet<Box component="span"><
            
            img src={fassured} style={{width : 50 ,marginLeft : 10}}/>
           </Box> </SmallText>
           <Typography style={{marginTop : '20px'}}>
           <Box
          component="span"
          style={{ color: "#878787", marginTop: 40, marginLeft: 10 ,fontSize: 14,}}
        >
          <strike>₹{item?.price.mrp}</strike>
        </Box>
        <Box
          component="span"
          style={{ fontSize: 16, marginLeft: 10, fontWeight: "500" }}
        >
          ₹{item?.price.cost}
        </Box>
        
        <Box
          component="span"
          style={{
            color: "green",
            marginTop: 10,
            marginLeft: 10,
            fontWeight: "400",
            fontSize: 14,
          }}
        >
          {item?.price.discount} off
        </Box>
        <Box
          component="span"
          style={{
            color: "green",
            marginTop: 10,
            marginLeft: 10,
            fontWeight: "400",
          }}
        >
        2 offers available
        </Box>
      </Typography>
      <Box style={{display : 'flex'}}>
        <Typography style={{margin : 10}}>Save For Later</Typography>
        <Typography onClick={()=>removeCartItem(item._id)} style={{margin : 10}}>Remove</Typography>
      </Box>
        </Box>
    </Component>
  )
}

export default CartItem