
import './App.css';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js';
import { Box } from '@mui/material';
import DetailView from './components/details/DetailView.js';
import DataProvider from './context/DataProvider.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart.js';
import { CartProvider } from './context/CartContext.js';
function App() {
  return (
    <DataProvider>
      <CartProvider>

      <BrowserRouter>
   
     <Header/>
     <Box style={{background :'#f2f2f2',marginTop: 10,padding : 10}}>

     <Box style={{marginRight: 10,background : 'white'}}>
    <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/product/:id' element={<DetailView/>} />
     <Route path='/cart' element={<Cart/>}/>
    </Routes>
     </Box>
     </Box>
     <Footer/>
     </BrowserRouter>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
