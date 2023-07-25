import ItemModel from "@/app/models/ItemModel";
import { connectDB } from "@/utils/db"
import { NextResponse } from "next/server";


export const DELETE = async (request, {params})=>{
    const {id}= params
    try {
        await ItemModel.deleteOne({_id: id})
        return NextResponse.json({message:'DELETE Succesfully'})    
    } catch (error) {
        console.log(error)
    }
    
}

