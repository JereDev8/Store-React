import mongoose from "mongoose";

const schema = new mongoose.Schema({
    genre:{
        type:String,
        enum:['male', 'female',],
        required: true
    },
    name:{
        type:String,
        minLength:4,
        maxLength: 40
    },
    category:{
        type:String,
        enum:["women's coat", "Mini Bags", "women's t-shirt", "men's coat", "men's t-shirt", "men's shirts"],
        required: true
    },
    price:{
        type: Number
    },
    image:{
        type: String
    }
})

const ProductModel = mongoose.models?.products || mongoose.model('products', schema) 

export default ProductModel   