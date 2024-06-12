import {products} from './constants/data.js';

import product from './model/productschema.js';
const DefaultData = async () =>{
   try{
      // await product.deleteMany({});
      await product.insertMany(products);
      console.log('data inserted');
   }catch(error)
   {
    console.log("error" , error.message);
   }
}

export default DefaultData;