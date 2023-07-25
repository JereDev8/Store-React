import ItemModel from "@/app/models/ItemModel";
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async ()=>{
    await connectDB();
    let price= 0;
    const cartItems= await ItemModel.find({});
    for(let i= 0; i < cartItems.length; i++){
        price += cartItems[i].price 
    }
    return NextResponse.json({products: cartItems, price})
}

export const POST = async (request)=>{
    const dato= await request.json()
    await ItemModel.create(dato)
    return NextResponse.json({message:'POST Successfully'})
}

export const DELETE = async (request)=>{
    await ItemModel.deleteMany({})
    return NextResponse.json({message:'Delete Successfully'})
}