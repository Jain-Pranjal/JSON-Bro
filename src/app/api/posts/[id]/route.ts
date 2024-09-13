// returning post by id and random post


import { NextRequest, NextResponse } from 'next/server';
import { getPostById,getRandomPost } from '@/controllers/posts';
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random post
      const randomPost = await getRandomPost();
      if (randomPost) {
        return NextResponse.json(randomPost, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No Post available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the post by ID
    const postId = parseInt(id, 10);
  
    if (!isNaN(postId)) {
      const post = await getPostById(postId);
      if (post) {
        return NextResponse.json(post, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }