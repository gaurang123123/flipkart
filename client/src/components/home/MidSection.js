import React from 'react'
import {Grid,styled} from '@mui/material';
import { imageURL } from '../../constraints/data';


const MidSection = () => {
  return (
    <Grid lg={12} sm={12} md={12} xs={12} container spacing={2} style={{marginTop : 10}}>
 {
        
        imageURL.map(image =>{
            return  (
                <Grid item lg={4} md={4} sm={12} xs={12}>
<img src={image} alt="image" style={{width :'100%'}}/>
</Grid>
            )
           
        })
    }
    </Grid>
   
  )
}

export default MidSection