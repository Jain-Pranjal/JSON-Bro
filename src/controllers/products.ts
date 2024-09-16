// Products Controller

import fs from 'fs';
import path from 'path';
import { Product } from '@/types/productsType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';


// all the products
export async function getAllProducts(): Promise<PaginatedResponse<Product>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/products.json'), 'utf8');
      const products: Product[] = JSON.parse(data);
  
      // Use the paginate function without skip and limit for default values
      return paginate(products);
  
    } catch (error) {
      console.error('Error reading products.json:', error);
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
export async function getProductById(id: number): Promise<Product | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/products.json'), 'utf8');
      const products: Product[] = JSON.parse(data);
  
      // Find the product by id
      const product = products.find(product => product.id === id);
  
      return product || null; // Return null if not found
    } catch (error) {
      console.error('Error reading products.json:', error);
      return null;
    }
  }
  

// get by limit and skip
  export async function getProductsByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<Product>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/products.json'), 'utf8');
      const products: Product[] = JSON.parse(data);
  
      return paginate(products, skip, limit); // General paginate function used here
    } catch (error) {
      console.error('Error reading products.json:', error);
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
  
  
  // Random product function
  export async function getRandomProduct(): Promise<Product | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/products.json'), 'utf8');
      const products: Product[] = JSON.parse(data);
  
      // If no products exist, return null
      if (products.length === 0) return null;
  
      // Generate a random index and return the product at that index
      const randomIndex = Math.floor(Math.random() * products.length);
      return products[randomIndex];
    } catch (error) {
      console.error('Error reading products.json:', error);
      return null;
    }
  }
