import blogData from "@/components/Blog/blogData";
import { NextResponse } from "next/server";


export async function GET(req:Request, {params}:{params:{id:string}}) {
  const {id} = params
  if(!id) {
    throw new Error('Invalid ID')
  }
  let data = blogData.find((blog:any) => blog.id == id);
  const response = {
    message: 'Success', 
    data
  };
  
  return NextResponse.json(response)
  
}