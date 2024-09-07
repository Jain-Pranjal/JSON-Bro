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
          source: '/products',
          destination: '/api/products',
        },
        {
          source: '/posts',
          destination: '/api/posts',
        }
       
      ];
    },
  };
  
  export default nextConfig;
  