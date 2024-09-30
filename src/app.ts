import express from 'express';
import registerRoutes from './routes/register-routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Register API',
            version: '1.0.0',
            description: 'API for managing user registrations',
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
                description: 'Local server',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use('/api/v1', registerRoutes);

export default app;
