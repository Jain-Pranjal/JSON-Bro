
// Reciepies controller

import fs from 'fs';
import path from 'path';
import { Post } from '@/types/postType';
import { paginate } from '@/app/helpers/paginate';
import { PaginatedResponse } from '@/types/paginatedResponse';

// all the posts
export async function getAllPosts(): Promise<PaginatedResponse<Post>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/posts.json'), 'utf8');
      const posts: Post[] = JSON.parse(data);
  
      // Use the paginate function without skip and limit for default values
      return paginate(posts);
  
    } catch (error) {
      console.error('Error reading posts.json:', error);
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
export async function getPostById(id: number): Promise<Post | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/posts.json'), 'utf8');
      const posts: Post[] = JSON.parse(data);
  
      // Find the post by id
      const post = posts.find(post => post.id === id);
  
      return post || null; // Return null if not found
    } catch (error) {
      console.error('Error reading posts.json:', error);
      return null;
    }
}
  


// get by limit and skip
export async function getPostsByLimitAndSkip(skip: number = 0, limit: number = 30): Promise<PaginatedResponse<Post>> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/posts.json'), 'utf8');
      const posts: Post[] = JSON.parse(data);
  
      return paginate(posts, skip, limit); 
    } catch (error) {
      console.error('Error reading posts.json:', error);
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



// Random post function
export async function getRandomPost(): Promise<Post | null> {
    try {
      const data = await fs.promises.readFile(path.join(process.cwd(), 'src/database/posts.json'), 'utf8');
      const posts: Post[] = JSON.parse(data);
  
      // If no posts exist, return null
      if (posts.length === 0) return null;
  
      // Generate a random index and return the quote at that index
      const randomIndex = Math.floor(Math.random() * posts.length);
      return posts[randomIndex];
    } catch (error) {
      console.error('Error reading posts.json:', error);
      return null;
    }
  }
  

