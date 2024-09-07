// here we will fetch the todo by id and return it

import { NextRequest, NextResponse } from 'next/server';
import { getTodoById,getRandomTodo } from "@/controllers/todos";
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    if (id === "random") {
      // If 'id' is "random", return a random todo
      const randomTodo = await getRandomTodo();
      if (randomTodo) {
        return NextResponse.json(randomTodo, { status: 200 });
      } else {
        return NextResponse.json({ error: 'No todos available' }, { status: 404 });
      }
    }
  
    // Parse the ID as an integer and fetch the todo by ID
    const todoId = parseInt(id, 10);
  
    if (!isNaN(todoId)) {
      const todo = await getTodoById(todoId);
      if (todo) {
        return NextResponse.json(todo, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
      }
    }
  
    // If the id is not a number and is not "random", return an error
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }
  


// https://localhost:3000/todos/:id
// id can be any number or random string 