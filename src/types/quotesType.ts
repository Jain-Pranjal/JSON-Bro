export interface Quote {
    id: number;
    quote: string;
    author: string;
    date: string; // This could be changed to Date if necessary
    tags: string[];
  }
  