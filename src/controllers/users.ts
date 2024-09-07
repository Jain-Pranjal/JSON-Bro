// yeah vala fucntion aapke sare ke sare users ko return karega


import fs from 'fs';
import path from 'path';
import { User } from '@/types/userType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';


// all the users
export async function getAllUsers(): Promise<PaginatedResponse<User>> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/users.json'), 'utf8');
    const users: User[] = JSON.parse(data);

    // Use the paginate function without skip and limit for default values
    return paginate(users);

  } catch (error) {
    console.error('Error reading users.json:', error);
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


//   get by id 
export async function getUserById(id: number): Promise<User | null> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/users.json'), 'utf8');
    const users: User[] = JSON.parse(data);

    // Find the user by id
    const user = users.find(todo => todo.id === id);

    return user || null; // Return null if not found
  } catch (error) {
    console.error('Error reading users.json:', error);
    return null;
  }
}


// get by limit and skip
export async function getUsersByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<User>> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/users.json'), 'utf8');
    const users: User[] = JSON.parse(data);

    return paginate(users, skip, limit); // General paginate function used here
  } catch (error) {
    console.error('Error reading users.json:', error);
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


// Random user function
export async function getRandomUser(): Promise<User | null> {
  try {
    const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/users.json'), 'utf8');
    const users: User[] = JSON.parse(data);

    // If no user exist, return null
    if (users.length === 0) return null;

    // Generate a random index and return the user at that index
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  } catch (error) {
    console.error('Error reading users.json:', error);
    return null;
  }
}
