import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique : true
    },
    url : String,
    detailUrl : String,
    title : Object,
    price : Object,
    quantity : Number,
    description : String,
    discount : String,
    tagline : String,
    rating : Number
},{timestamps : true});

const product = mongoose.model('product', productschema);

export default product;
