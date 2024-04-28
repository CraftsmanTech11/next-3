import { NextResponse } from "next/server"
import blogData from "@/components/Blog/blogData";

export async function GET(request: Request) {
  const response = {
    message: 'Success', 
    data: blogData
  };

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // return NextResponse.json({}, { status: 500, statusText: 'Bad Request2' });
  return NextResponse.json(response)

}