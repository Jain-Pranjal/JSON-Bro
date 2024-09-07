export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    authorId: number;
    date: string;  // Can be converted to Date type if necessary
    tags: string[];
    likes: number;
    views: number;
    comments: Comment[];
  }
  
  interface Comment {
    user: string;
    comment: string;
    date: string;  // Can be converted to Date type if necessary
  }
  