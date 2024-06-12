import express from "express";
import {userSignup,userLogin,testController} from '../controller/usercontroller.js';
import { getproducts,getSingleProduct} from '../controller/productcontroller.js';

const router = express.Router();
//re
router.post('/signup',userSignup);

//login
router.post('/login' , userLogin);
//
router.get('/products',getproducts);
// //
router.get('/product/:id',getSingleProduct);
//



export default router;