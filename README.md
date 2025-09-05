# JSON-Bro

A powerful and user-friendly fake JSON API designed for testing and prototyping. Built with Next.js, it provides realistic JSON responses for frontend development without needing a backend server.

## Features

- **Fake API Responses**: Generate realistic JSON data for common endpoints
- **Pagination Support**: Query parameters for `limit` and `skip`
- **Multiple Endpoints**: Users, posts, comments, products, todos, quotes, recipes, and carts
- **Free & Unlimited**: No registration or rate limits
- **Modern UI**: Clean web interface with documentation pages



### API Endpoints

Base URL: `https://json-bro.vercel.app/api` (or `http://localhost:3000/api` locally)

#### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID

#### Posts

- `GET /posts` - Get all posts
- `GET /posts/:id` - Get post by ID

#### Comments

- `GET /comments` - Get all comments
- `GET /comments/:id` - Get comment by ID

#### Products

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

#### Todos

- `GET /todos` - Get all todos
- `GET /todos/:id` - Get todo by ID

#### Quotes

- `GET /quotes` - Get all quotes
- `GET /quotes/:id` - Get quote by ID

#### Recipes

- `GET /recipies` - Get all recipes
- `GET /recipies/:id` - Get recipe by ID

#### Carts

- `GET /carts` - Get all carts
- `GET /carts/:id` - Get cart by ID

### Query Parameters

- `limit`: Number of items to return (default: 30)
- `skip`: Number of items to skip (default: 0)

Example: `GET /api/posts?limit=5&skip=10`


## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Particles**: TS Particles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Pranjal Jain - [pranjalworkon@gmail.com](mailto:pranjalworkon@gmail.com)
