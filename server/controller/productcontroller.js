import productModel from '../model/productschema.js';

export const getproducts = async (req,res) =>{
    try{
       const products = await productModel.find({});
       res.status(200).send({ status : 'ok' , data : products}); 
    }
    catch(error)
    {
      res.status(500).send({message : error.message});
      console.log(error);
    }
}

export const getSingleProduct = async (req,res) =>{
  try{
    const myid = req.params.id;
    const Product = await productModel.findOne({ 'id' : myid});
    res.status(200).send(Product);
  }catch(error)
  {
    // console.log(error);
    res.status(500).send({message : error.message});
  }
}