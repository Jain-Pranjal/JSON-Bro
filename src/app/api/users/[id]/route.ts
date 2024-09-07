// returning user by id and random user

import { NextRequest, NextResponse } from 'next/server';
import { getUserById,getRandomUser } from "@/controllers/users";
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random user
      const randomUser = await getRandomUser();
      if (randomUser) {
        return NextResponse.json(randomUser, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No user available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the user by ID
    const userId = parseInt(id, 10);
  
    if (!isNaN(userId)) {
      const user = await getUserById(userId);
      if (user) {
        return NextResponse.json(user, { status: 200 });
      } else {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }