// Quotes Controller

import fs from 'fs';
import path from 'path';
import { Quote } from '@/types/quotesType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';


// all the quotes
export async function getAllQuotes(): Promise<PaginatedResponse<Quote>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/quotes.json'), 'utf8');
      const quotes: Quote[] = JSON.parse(data);
  
      // Use the paginate function without skip and limit for default values
      return paginate(quotes);
  
    } catch (error) {
      console.error('Error reading quotes.json:', error);
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
export async function getQuoteById(id: number): Promise<Quote | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/quotes.json'), 'utf8');
      const quotes: Quote[] = JSON.parse(data);
  
      // Find the quote by id
      const quote = quotes.find(todo => todo.id === id);
  
      return quote || null; // Return null if not found
    } catch (error) {
      console.error('Error reading todos.json:', error);
      return null;
    }
  }
  

// get by limit and skip
  export async function getQuotesByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<Quote>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/quotes.json'), 'utf8');
      const quotes: Quote[] = JSON.parse(data);
  
      return paginate(quotes, skip, limit); // General paginate function used here
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
  
  
  // Random quote function
  export async function getRandomQuote(): Promise<Quote | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/quotes.json'), 'utf8');
      const quotes: Quote[] = JSON.parse(data);
  
      // If no quotes exist, return null
      if (quotes.length === 0) return null;
  
      // Generate a random index and return the quote at that index
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    } catch (error) {
      console.error('Error reading todos.json:', error);
      return null;
    }
  }
