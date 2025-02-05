
// api route for the products

import { NextRequest,NextResponse } from "next/server";
import { getAllProducts,getProductsByLimitAndSkip } from "@/controllers/products";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch products with pagination
    const { data: products, metadata } = await getProductsByLimitAndSkip(skip, limit);
    return NextResponse.json({ products, metadata }, { status: 200 });
  }
  
  else {// Fetch all products
    const { data: products, metadata } = await getAllProducts();
    return NextResponse.json({ products, metadata }, { status: 200 });
  }
}




// all products :- https://json-bro.vercel.app/products
// single products :- https://json-bro.vercel.app/products/:id
// limit products :- https://json-bro.vercel.app/products?limit=2
// skip products :- https://json-bro.vercel.app/products?skip=2
// limit and skip products :- https://json-bro.vercel.app/products?limit=2&skip=2
