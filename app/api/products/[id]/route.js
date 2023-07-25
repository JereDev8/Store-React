import ProductModel from "@/app/models/ProductModel";
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request, {params})=>{
    const {id} = await params
    await connectDB();
    console.log(params.id)
    const producto= await ProductModel.findById({_id: id});

    return NextResponse.json(producto)
}