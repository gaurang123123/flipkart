import React,{useState,useEffect} from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box ,Container,styled} from '@mui/material'
import { getProducts } from '../../service/api'
import Slide from './Slide'
// import Slide from './Slide';
import MidSection from './MidSection'
import MidSlide from './MidSlide'
const Component = styled(Box)`
   padding : 15px 0px;
   background : #f2f2f2;

`
const Home = () => {
  const [product,setProduct] = useState([]);
  const url = 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70';
   

  useEffect ( () =>{
    try{
      getProducts().then(val => {
        console.log("useeffect")
        setProduct(val.data)
      });

    }catch(error)
    {
      console.log(error);
    }
  },[])
  return (
    <>
        <NavBar/>
    <Component>
        <Banner/>
        {
          product != "" && 
          <MidSlide products={product?.data} title="Deal of the Day" timer={true}/>
           
        }
        <MidSection/>
        <MidSection/>
        {
          product != "" && 
            <>
            <Slide products={product?.data} title="Discounts for you" timer={false}/> 
<Slide products={product?.data} title="Suggested items" timer={false}/> 
<Slide products={product?.data} title="Top selection" timer={false}/> 
<Slide products={product?.data} title="Tranding Offers" timer={false}/> 
<Slide products={product?.data} title="Recommended items" timer={false}/></>
          
        }
    </Component>
    </>
  )
}

export default Home