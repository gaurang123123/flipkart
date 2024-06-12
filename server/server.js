import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import DefaultData from './default.js';
import connectDB  from './database/db.js';
// import morgan from 'morgan';
import router from './routes/route.js';
// import categoryrouter from './routes/CategoryRoutes.js'
// import productrouter from './routes/ProductRoute.js'
dotenv.config();

//

//

const app = express();
//

// app.use(morgan('dev'))
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/',router);
// app.use('/category',categoryrouter);
// app.use('/product',productrouter);
connectDB()




const port = process.env.PORT || 8080;
app.listen(port , () =>{
    console.log(`server running on port ${port}`);
});