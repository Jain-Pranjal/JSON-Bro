
// Reciepies controller

import fs from 'fs';
import path from 'path';
import { Recipe } from '@/types/recipieType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';

// all the recipies
export async function getAllRecipies(): Promise<PaginatedResponse<Recipe>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/recipies.json'), 'utf8');
      const recipies: Recipe[] = JSON.parse(data);
  
      // Use the paginate function without skip and limit for default values
      return paginate(recipies);
  
    } catch (error) {
      console.error('Error reading recipies.json:', error);
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
export async function getRecipieById(id: number): Promise<Recipe | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/recipies.json'), 'utf8');
      const recipies: Recipe[] = JSON.parse(data);
  
      // Find the recipie by id
      const recipie = recipies.find(recipie => recipie.id === id);
  
      return recipie || null; // Return null if not found
    } catch (error) {
      console.error('Error reading recipies.json:', error);
      return null;
    }
}
  


// get by limit and skip
export async function getRecipiesByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<Recipe>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/recipies.json'), 'utf8');
      const recipies: Recipe[] = JSON.parse(data);
  
      return paginate(recipies, skip, limit); 
    } catch (error) {
      console.error('Error reading recipies.json:', error);
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



// Random recipie function
export async function getRandomRecipie(): Promise<Recipe | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/recipies.json'), 'utf8');
      const recipies: Recipe[] = JSON.parse(data);
  
      // If no recipies exist, return null
      if (recipies.length === 0) return null;
  
      // Generate a random index and return the recipie at that index
      const randomIndex = Math.floor(Math.random() * recipies.length);
      return recipies[randomIndex];
    } catch (error) {
      console.error('Error reading recipies.json:', error);
      return null;
    }
  }
  

