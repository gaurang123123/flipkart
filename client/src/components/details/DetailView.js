import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box, Typography, styled , Grid} from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
import { getSingleProducts } from "../../service/api";
const Component = styled(Box)`
 background : #f2f2f2;
  margin-top : 50px;
`
const ImgContainer = styled(Grid)(({theme}) =>({
  background : '#fff',
  display : 'flex',
  [theme.breakpoints.down('md')] : {
    margin: 0
  }
}))


const RightComponent = styled(Box)`
 margin-top : 50px;
 margin-left : 20px;
`
const DetailView = () => {
  const [product, setProduct] = useState([]);
  const parms = useParams();
 

  useEffect(() => {
    try{

      getSingleProducts(parms.id).then((val) => {
        console.log("inside then");
        setProduct(val);
      });
    }catch(error)
    {
      console.log(error)
    }
  }, [product]);

  return (
    
    <Component>
      {product && (
        <ImgContainer container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem  product={product?.data}/>
          </Grid>
          <RightComponent item lg={8} md={8} sm={8} xs={12}>
         
            <ProductDetail product={product}/>
          </RightComponent>
        </ImgContainer>
      )}
    </Component>
  );
};

export default DetailView;
