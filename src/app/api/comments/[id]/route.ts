// returning comment by id and random post


import { NextRequest, NextResponse } from 'next/server';
import { getCommentById,getRandomComment } from '@/controllers/comments';
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random comment
      const randomComment = await getRandomComment();
      if (randomComment) {
        return NextResponse.json(randomComment, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No Comment available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the comment by ID
    const commentId = parseInt(id, 10);
  
    if (!isNaN(commentId)) {
      const comment = await getCommentById(commentId);
      if (comment) {
        return NextResponse.json(comment, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }