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
       
      ];
    },
  };
  
  export default nextConfig;
  