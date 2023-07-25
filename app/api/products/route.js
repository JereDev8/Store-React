import ProductModel from "@/app/models/ProductModel";
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async ()=>{
    await connectDB();
    const productos= await ProductModel.find({});
    return NextResponse.json(productos)
}