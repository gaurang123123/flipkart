import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  display: flex;
  padding: 15px 20px;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;

const Timer = styled(Box)`
  color: #7f7f7f;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
function Slide({ products, title, timer }) {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} style={{ width: 24 }} alt="time clock" />
            <Countdown date={Date.now() + 5.04e7} />
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
   
      <Carousel
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
      
      >
        
  
   
       {
         

         products && products.map(pro => {
               return (
      <Link to={`product/${pro.id}`} style={{textDecoration : 'none'}} key={pro._id}>
        <Box textAlign="center" style={{padding :'25px 15px', border : '0.05px solid #C1C1C1',marginLeft : '8px'}} >
            <Image src={pro.url} alt="alt" />
             <Text style={{ fontWeight: 600, color: '#212121' }}>{pro.title.shortTitle}</Text>
             <Text style={{ color: 'green' }} >{pro.discount}</Text> 
<Text  style={{ color: '#212121', opacity: '.6' }}>{pro.tagline}</Text>
              </Box>

              </Link>
               )
         


   
         
              
          
         })

        }
       
      
 </Carousel>
       
         


     </Component>
  );
}

export default Slide;
