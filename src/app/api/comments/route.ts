
// api route for the comments

import { NextRequest,NextResponse } from "next/server";
import { getAllComments,getCommentsByLimitAndSkip } from "@/controllers/comments";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch comments with pagination
    const { data: comments, metadata } = await getCommentsByLimitAndSkip(skip, limit);
    return NextResponse.json({ comments, metadata }, { status: 200 });
  }
  
  else {// Fetch all comments
    const { data: comments, metadata } = await getAllComments();
    return NextResponse.json({ comments, metadata }, { status: 200 });
  }
}













// all posts :- http://localhost:3000/posts
// single posts :- http://localhost:3000/posts/:id
// limit posts :- http://localhost:3000/posts?limit=2
// skip posts :- http://localhost:3000/posts?skip=2
// limit and skip posts :- http://localhost:3000/posts?limit=2&skip=2
