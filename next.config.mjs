/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/todos',
          destination: '/api/todos',
        },
        {
          source: '/products',
          destination: '/api/products',
        },
        {
          source: '/users',
          destination: '/api/users',
        },
        {
          source: '/posts',
          destination: '/api/posts',
        },
        {
          source: '/todos/:id',
          destination: '/api/todos/:id',
        }
        // Add more rewrites as needed for other routes
      ];
    },
  };
  
  export default nextConfig;
  