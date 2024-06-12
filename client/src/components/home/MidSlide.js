import  Slide from './Slide';
import React from 'react'
import { Box , styled} from '@mui/material'

 const Component = styled(Box)`
 display : flex
 ` 
 const LeftComponent = styled(Box)(({theme}) => ({
 width : '83%',
  [theme.breakpoints.down('md')] : {
     width : '100%'
  }

 }));
 const RightComponent = styled(Box)(({theme}) => ({
  marginTop: '10px',
  marginLeft: '10px',
  background: '#FFFFFF',
  width: '17%',
   height: '7%',
  padding: '25px',
  textAlign: 'center',
  [theme.breakpoints.down('md')] : {
    display : 'none'
  }

 }));
const MidSlide = ({products,title,timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Component>
    <LeftComponent>
     
        <Slide 
            products={products} 
            title={title}
            timer={timer} 
        />
    </LeftComponent>
    <RightComponent>
        <img src={adURL} style={{width: 200 , height: 290 , padding : 0}}/>
    </RightComponent>
</Component>
  )
}

export default MidSlide