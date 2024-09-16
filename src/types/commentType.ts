export interface Comment {
    id: number;
    body: string;
    postId: number;
    user: User;
    natureOfComment: string;
  }
  
  interface User {
    username: string;
    email: string;
    userid: number;
  }
  
  