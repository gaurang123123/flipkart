import { Container ,Grid, Typography,Box ,styled} from '@mui/material'
import React from 'react'
const Component = styled(Box)`
background : #F6FCFB;
color : #AFB5B4 !important;
height : 40vh;
padding: 40px;
`
const Footer = () => {
  return (
   <Component>
    <Grid container >
      <Grid item lg={3}>
        <Typography variant='h4' style={{fontSize : 12 , color : 'grey'}}>ABOUT</Typography>
        <Typography variant='h6' style={{fontSize : 12 , color : '#AFB5B4'}}>Contact Us</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>About Us</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Careers</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Press</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Corporate Information</Typography>
      </Grid>
      <Grid item lg={3}>
        <Typography variant='h4' style={{fontSize : 12 , color : 'grey'}}>HELP</Typography>
        <Typography variant='h6' style={{fontSize : 12 , color : '#AFB5B4'}}>Payments</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Shipping</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Cancellation & Return</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>FAQ</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Report Infringement</Typography>
      </Grid>
      <Grid item lg={3}>
        <Typography variant='h4' style={{fontSize : 12 , color : 'grey'}}>Consumer Policy</Typography>
        <Typography variant='h6' style={{fontSize : 12 , color : '#AFB5B4'}}>Return Policy</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Terms of Use</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Security</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Privacy</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Sitemap</Typography>
      </Grid>
      <Grid item lg={3}>
        <Typography variant='h4' style={{fontSize : 12 , color : 'grey'}}>Social</Typography>
        <Typography variant='h6' style={{fontSize : 12 , color : '#AFB5B4'}}>Facebook</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Twitter</Typography>
        <Typography variant='h6'style={{fontSize : 12,color : '#AFB5B4'}}>Youtube</Typography>
      </Grid>
    
    </Grid>
   </Component>
  )
}

export default Footer