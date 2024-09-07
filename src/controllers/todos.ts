// here we will make all the function for the todos and then export them 

import fs from 'fs';
import path from 'path';
import { Todo } from '@/types/todoType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';



export async function getAllTodos(): Promise<PaginatedResponse<Todo>> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/todos.json'), 'utf8');
    const todos: Todo[] = JSON.parse(data);

    // Use the paginate function without skip and limit for default values
    return paginate(todos);

  } catch (error) {
    console.error('Error reading todos.json:', error);
    return {
      data: [],
      metadata: {
        total: 0,
        skip: 0,
        limit: 0
      }
    };
  }
}

  
  


// in fetching one todo we will not use the paginate function as we are only fetching one todo
  export async function getTodoById(id: number): Promise<Todo | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/todos.json'), 'utf8');
      const todos: Todo[] = JSON.parse(data);
  
      // Find the todo by id
      const todo = todos.find(todo => todo.id === id);
  
      return todo || null; // Return null if not found
    } catch (error) {
      console.error('Error reading todos.json:', error);
      return null;
    }
  }
  



//  sending the skip and limt but they are default argument so if they are not provided then they will be 0 and 30  
export async function getTodosByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<Todo>> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/todos.json'), 'utf8');
    const todos: Todo[] = JSON.parse(data);

    return paginate(todos, skip, limit); // General paginate function used here
  } catch (error) {
    console.error('Error reading todos.json:', error);
    return {
      data: [],
      metadata: {
        total: 0,
        skip: 0,
        limit: 0
      }
    };
  }
}


// Random todo function
export async function getRandomTodo(): Promise<Todo | null> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/todos.json'), 'utf8');
    const todos: Todo[] = JSON.parse(data);

    // If no todos exist, return null
    if (todos.length === 0) return null;

    // Generate a random index and return the todo at that index
    const randomIndex = Math.floor(Math.random() * todos.length);
    return todos[randomIndex];
  } catch (error) {
    console.error('Error reading todos.json:', error);
    return null;
  }
}


// need to make the POST , DELETE and PUT function also for the todos