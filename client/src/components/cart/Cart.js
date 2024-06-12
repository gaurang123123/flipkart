import React from 'react'
import { useCart } from '../../context/CartContext'
import { Box, Button, Grid, Typography,styled } from '@mui/material';
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';


const Container = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('md')] : {
    padding: '15px 0'
  }

}));
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('sm')]: {
      marginBottom: 15
  }
}));

const StyledButton = styled(Button)`
display : flex;
margin-left: auto;
background : #fb641b;
color : #fff;
width : 250px;
height : 51px;
border-radius: 2px;
`
const ButtonWrapper = styled(Box)`
padding : 16px 22px;
background : #fff;
box-shadow : 0 -2px 10px 0 rgb(0 0 0 /10%);
`
const Cart = () => {
  const [cart,setCart] = useCart();
  return (
    <>
    {
      cart ? <Container container style={{marginTop : 50,background: '#f2f2f2'}} >
         <LeftComponent item lg={9} md={9} sm={12} style={{background: 'white'}}>
              <Box style={{padding : '15px 24px'}}>
                <Typography>My Cart ({cart?.length})</Typography>

              </Box>
              {
                cart && cart?.map(item =>{
                  return(

                   <CartItem item={item}/>
                  )
                })
              }
              <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
              </ButtonWrapper>
         </LeftComponent>
         <Grid item lg={3} md={3} sm={12}>
          <TotalBalance/>
         </Grid>
      </Container> : <div></div>
    }
    </>
  )
}

export default Cart