import { OpenAPIV3 } from 'openapi-types';

const swaggerDefinition: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'JSON Bro Documentation', // Title of the API documentation
    version: '1.0.0', // Version of your API
    description: 'This is the API documentation for Json Bro application ', // Description of your API
  },
  servers: [
    {
      url: 'http://localhost:3000/api', // Base URL for your API
    },
  ],
  components: {
    schemas: {
      Todo: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Todo ID',
          },
          title: {
            type: 'string',
            description: 'Title of the todo',
          },
          completed: {
            type: 'boolean',
            description: 'Status of the todo',
          },
          userId: {
            type: 'integer',
            description: 'User ID associated with the todo',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
            description: 'Due date of the todo',
          },
        },
      },
      Quote: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Quote ID',
          },
          quote: {
            type: 'string',
            description: 'The quote itself',
          },
          author: {
            type: 'string',
            description: 'Author of the quote',
          },
          date: {
            type: 'string',
            format: 'date-time',
            description: 'Date when the quote was added',
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'Tags for the quote',
          },
        },
      },
    },
  },
  paths: {
    '/todos': {
      get: {
        summary: 'Get all todos',
        responses: {
          200: {
            description: 'A list of todos',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Todo',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/todos/{id}': {
      get: {
        summary: 'Get a todo by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
            },
            description: 'ID of the todo to retrieve',
          },
        ],
        responses: {
          200: {
            description: 'A single todo',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Todo',
                },
              },
            },
          },
          404: {
            description: 'Todo not found',
          },
        },
      },
    },
    '/quotes': {
      get: {
        summary: 'Get all quotes',
        responses: {
          200: {
            description: 'A list of quotes',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Quote',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/quotes/{id}': {
      get: {
        summary: 'Get a quote by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
            },
            description: 'ID of the quote to retrieve',
          },
        ],
        responses: {
          200: {
            description: 'A single quote',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Quote',
                },
              },
            },
          },
          404: {
            description: 'Quote not found',
          },
        },
      },
    },
  },
};

export default swaggerDefinition;
