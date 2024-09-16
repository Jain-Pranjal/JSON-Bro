

// api route for the users

import { NextRequest,NextResponse } from "next/server";
import { getAllUsers,getUsersByLimitAndSkip } from "@/controllers/users";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch users with pagination
    const { data: users, metadata } = await getUsersByLimitAndSkip(skip, limit);
    return NextResponse.json({ users, metadata }, { status: 200 });
  }
  
  else {// Fetch all users
    const { data: users, metadata } = await getAllUsers();
    return NextResponse.json({ users, metadata }, { status: 200 });
  }
}



// export async function POST(request: NextRequest,response: NextResponse) {}
// export async function PUT(request: NextRequest,response: NextResponse) {}
// export async function PATCH(request: NextRequest,response: NextResponse) {}
// export async function DELETE(request: NextRequest,response: NextResponse) {}




// all users :- http://localhost:3000/users
// single users :- http://localhost:3000/users/:id
// limit users :- http://localhost:3000/users?limit=2
// skip users :- http://localhost:3000/users?skip=2
// limit and skip users :- http://localhost:3000/users?limit=2&skip=2
