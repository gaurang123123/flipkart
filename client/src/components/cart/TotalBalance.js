import React, { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material';
import { useCart } from '../../context/CartContext';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`

// component: {
//     // width: '30%'
// },

const TotalBalance = () => {
    const [cart,setCart] = useCart();
    const totalPrice = () =>{
        try{
           let total = 0;
            cart?.map(item =>{
               total = total + item.price.mrp;
            })
            return total;
        }catch(error)
        {
            console.log(error);
        }
    }
    const totalDiscount = () =>{
        try{
           let total = 0;
            cart?.map(item =>{
               total = total + item.price.cost;
            })
            return total;
        }catch(error)
        {
            console.log(error);
        }
    }
    
  return (
   

    <Box style={{marginLeft : 20}}>  
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({} item)
                    <Price component="span">₹{totalPrice()}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{totalPrice()-totalDiscount()}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">{  totalDiscount()>=500 ? -40 : "+40"}</Price>
                </Typography>
                <TotalAmount>Total Amount
                    <Price>₹{
                    totalDiscount()>=500 ? totalDiscount()-40 : totalDiscount()+40
                    
                    }</Price>
                </TotalAmount>
                <Discount>You will save ₹{  totalDiscount()>=500 ? 40+totalPrice()-totalDiscount() : 0+totalPrice()-totalDiscount()} on this order</Discount>
            </Container>
        </Box>
  )
}

export default TotalBalance