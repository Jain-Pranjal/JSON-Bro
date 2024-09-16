import { NextApiRequest, NextApiResponse } from 'next';
import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from "@/config/swaggerConfig";

// Swagger definition
const options = {
  definition: swaggerDefinition,
  apis: ['src/app/api/**/*.ts'], // Files containing the API documentation
};

const swaggerSpec = swaggerJSDoc(options);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
