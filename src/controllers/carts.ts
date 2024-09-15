// Carts Controller

import fs from 'fs';
import path from 'path';
import { Cart } from '@/types/cartType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';


// all the carts
export async function getAllCarts(): Promise<PaginatedResponse<Cart>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/carts.json'), 'utf8');
      const carts: Cart[] = JSON.parse(data);
  
      // Use the paginate function without skip and limit for default values
      return paginate(carts);
  
    } catch (error) {
      console.error('Error reading carts.json:', error);
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
export async function getCartById(id: number): Promise<Cart | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/carts.json'), 'utf8');
      const carts: Cart[] = JSON.parse(data);
  
      // Find the cart by id
      const cart = carts.find(cart => cart.id === id);
  
      return cart || null; // Return null if not found
    } catch (error) {
      console.error('Error reading carts.json:', error);
      return null;
    }
  }
  

// get by limit and skip
  export async function getCartsByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<Cart>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/carts.json'), 'utf8');
      const carts: Cart[] = JSON.parse(data);
  
      return paginate(carts, skip, limit); // General paginate function used here
    } catch (error) {
      console.error('Error reading carts.json:', error);
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
  
  
  // Random cart function
  export async function getRandomCart(): Promise<Cart | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/carts.json'), 'utf8');
      const carts: Cart[] = JSON.parse(data);
  
      // If no carts exist, return null
      if (carts.length === 0) return null;
  
      // Generate a random index and return the product at that index
      const randomIndex = Math.floor(Math.random() * carts.length);
      return carts[randomIndex];
    } catch (error) {
      console.error('Error reading products.json:', error);
      return null;
    }
  }
