import { InputBase ,Box,styled,List,ListItem} from '@mui/material'
import React,{useState,useEffect} from 'react'
import { getProducts } from '../../service/api'
import  SearchIcon  from '@mui/icons-material/Search'
import {Link} from 'react-router-dom';
const Component = styled(Box)
`
background : #ECFCF9;
height: 60%;
width:49%;
border-radius: 7px;
margin-left: 30px;
display : flex;
`
const InputControl = styled(InputBase)`
padding-left:20px;
height : 100%;
width: 100%;
font-size : unset;
`
const Searchicon = styled(Box)`
color : black;
padding : 0px;
display : flex;
margin: 6px;
`

const Listwrapper = styled(List)`
    position : absolute;
    background : #ffffff;
    color : #000;
    margin-top : 36px;
`
const Search = () => {
  const [text,setText] = useState('');
  const [product,setProduct] = useState([]);
  const getText = (text) =>{
       console.log(text)
        setText(text)
        
  }
  useEffect(() =>{
    try{

       getProducts().then(val =>{
          setProduct(val.data.data);
       })
    }catch(error)
    {
      console.log(error)
    }
  },[])
  return (
<Component>

    <Searchicon>
        <SearchIcon/>
    </Searchicon>
    <InputControl  placeholder='Search for Products, Brands and More' onChange={(e) =>{getText(e.target.value)}} />

    {
    text && <Listwrapper>
      {

        // console.log(product)
        
        product.filter(pro => pro?.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(pro =>{
          return (

            <ListItem>
              <Link to={`/product/${pro.id}`
              
            } style={{textDecoration : 'none' , color : 'inherit'}}
              onClick={() => setText('')}
              >
              {pro.title.longTitle}
              </Link>

            </ListItem>
          )
            
             
             
        }) 
        // product.map(item =>{
        //     console.log(item.title.longTitle)
        //     //     <ListItem>
              
              
        //     //       item.title.longTitle
                
               
              
        //     // </ListItem>
        // })
      }
    </Listwrapper>
  }
</Component>
  )
}

export default Search