import axios from 'axios';

export const authenticateSignup = async (data) =>{
    try{
     return await axios.post(`http://localhost:8080/signup`,data)
    }catch(error){
        console.log(error);
    }
}
export const authenticateLogin = async (data) =>{
    try{
     return await axios.post(`http://localhost:8080/login`,data)
    }catch(error){
        console.log(error);
    }
}

export const getProducts = async () =>{
    try{

     let data = await axios.get(`http://localhost:8080/products`);
     console.log(data);
     return data;
   
    }catch(error)
    {
        console.log(error);
        return error.message;
    }
}

export const getSingleProducts = async (id) =>{
    try{
        console.log(id);
      let data = await axios.get(`http://localhost:8080/product/${id}`);
      return data;
    //   let data2 = (data.data.data)
    // console.log(data.data.data.description)
    //   return data2;
    }catch(error){
        console.log(error);
        return error.message;
    }
}
