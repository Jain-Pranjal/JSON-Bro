
// api route for the posts

import { NextRequest,NextResponse } from "next/server";
import { getAllPosts,getPostsByLimitAndSkip } from "@/controllers/posts";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch posts with pagination
    const { data: posts, metadata } = await getPostsByLimitAndSkip(skip, limit);
    return NextResponse.json({ posts, metadata }, { status: 200 });
  }
  
  else {// Fetch all posts
    const { data: posts, metadata } = await getAllPosts();
    return NextResponse.json({ posts, metadata }, { status: 200 });
  }
}













// all posts :- https://json-bro.vercel.app/posts
// single posts :- https://json-bro.vercel.app/posts/:id
// limit posts :- https://json-bro.vercel.app/posts?limit=2
// skip posts :- https://json-bro.vercel.app/posts?skip=2
// limit and skip posts :- https://json-bro.vercel.app/posts?limit=2&skip=2
