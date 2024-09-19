import { NextRequest,NextResponse } from "next/server";
import { getAllRecipies,getRecipiesByLimitAndSkip } from "@/controllers/recipies";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch recipies with pagination
    const { data: recipies, metadata } = await getRecipiesByLimitAndSkip(skip, limit);
    return NextResponse.json({ recipies, metadata }, { status: 200 });
  }
  
  else {// Fetch all recipies
    const { data: recipies, metadata } = await getAllRecipies();
    return NextResponse.json({ recipies, metadata }, { status: 200 });
  }
}





// all recipies :- https://json-bro.vercel.app/recipies
// single recipies :- https://json-bro.vercel.app/recipies/:id
// limit recipies :- https://json-bro.vercel.app/recipies?limit=2
// skip recipies :- https://json-bro.vercel.app/recipies?skip=2
// limit and skip recipies :- https://json-bro.vercel.app/recipies?limit=2&skip=2
