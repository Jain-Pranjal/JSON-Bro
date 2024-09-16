/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/todos',
          destination: '/api/todos',
        },
        {
          source: '/todos/:id',
          destination: '/api/todos/:id',
        },
        {
          source: '/quotes',
          destination: '/api/quotes/',
        },
        {
          source: '/quotes/:id',
          destination: '/api/quotes/:id',
        },
        {
          source: '/users',
          destination: '/api/users',
        },
        {
          source: '/users/:id',
          destination: '/api/users/:id',
        },
        {
          source: '/products',
          destination: '/api/products',
        },
        {
          source: '/products/:id',
          destination: '/api/products/:id',
        },
        {
          source: '/posts',
          destination: '/api/posts',
        },
        {
          source: '/posts/:id',
          destination: '/api/posts/:id',
        },
        {
          source: '/carts',
          destination: '/api/carts',
        },
        {
          source: '/carts/:id',
          destination: '/api/carts/:id',
        },
        {
          source: '/recipies',
          destination: '/api/recipies',
        },
        {
          source: '/recipies/:id',
          destination: '/api/recipies/:id',
        },
        {
          source: '/comments',
          destination: '/api/comments',
        },
        {
          source: '/comments/:id',
          destination: '/api/comments/:id',
        },
       
      ];
    },
  };
  
  export default nextConfig;
  