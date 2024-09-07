import { NextRequest,NextResponse } from "next/server";
import { getAllTodos,getTodoById,getTodosByLimitAndSkip } from "@/controllers/todos"


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const skip = parseInt(url.searchParams.get('skip') || '0', 10);
  const limit = parseInt(url.searchParams.get('limit') || '30', 10);

  // Validate skip and limit
  const isValidNumber = (value: number) => !isNaN(value) && value >= 0;

  if (isValidNumber(skip) && isValidNumber(limit)) {
    // Fetch todos with pagination
    const { data: todos, metadata } = await getTodosByLimitAndSkip(skip, limit);
    return NextResponse.json({ todos, metadata }, { status: 200 });
  }
  
  else {// Fetch all todos
    const { data: todos, metadata } = await getAllTodos();
    return NextResponse.json({ todos, metadata }, { status: 200 });
  }
}

  
  // in this page we are extracting the records from the backeend and also we will be displaying them on the fromtend









// this is the api page that will give the resposne as it is the backend only that will give the respsne to the frontend

// all todo :- http://localhost:3000/todos
// single todo :- http://localhost:3000/todos/:id
// limit todo :- http://localhost:3000/todos?limit=2
// skip todo :- http://localhost:3000/todos?skip=2
// limit and skip todo :- http://localhost:3000/todos?limit=2&skip=2
