
// api route for the carts

import { NextRequest,NextResponse } from "next/server";
import { getAllCarts,getCartsByLimitAndSkip } from "@/controllers/carts";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch carts with pagination
    const { data: carts, metadata } = await getCartsByLimitAndSkip(skip, limit);
    return NextResponse.json({ carts, metadata }, { status: 200 });
  }
  
  else {// Fetch all carts
    const { data: carts, metadata } = await getAllCarts();
    return NextResponse.json({ carts, metadata }, { status: 200 });
  }
}













// all carts :- https://json-bro.vercel.app/carts
// single carts :- https://json-bro.vercel.app/carts/:id
// limit carts :- https://json-bro.vercel.app/carts?limit=2
// skip carts :- https://json-bro.vercel.app/carts?skip=2
// limit and skip carts :- https://json-bro.vercel.app/carts?limit=2&skip=2
