
// api route for the quotes

import { NextRequest,NextResponse } from "next/server";
import { getAllQuotes,getQuotesByLimitAndSkip } from "@/controllers/quotes";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch quotes with pagination
    const { data: quotes, metadata } = await getQuotesByLimitAndSkip(skip, limit);
    return NextResponse.json({ quotes, metadata }, { status: 200 });
  }
  
  else {// Fetch all quotes
    const { data: quotes, metadata } = await getAllQuotes();
    return NextResponse.json({ quotes, metadata }, { status: 200 });
  }
}




// all quotes :- https://json-bro.vercel.app/quotes
// single quotes :- https://json-bro.vercel.app/quotes/:id
// limit quotes :- https://json-bro.vercel.app/quotes?limit=2
// skip quotes :- https://json-bro.vercel.app/quotes?skip=2
// limit and skip quotes :- https://json-bro.vercel.app/quotes?limit=2&skip=2
