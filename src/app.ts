import express, { Express } from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import ApiRouter from './api';
import { errorHandler, resourceNotFound } from './middlewares';

config();

const app: Express = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (_request, response) => {
    response.json({ message: 'Hi there 👋' })
});

app.use('/api/v1', ApiRouter);
app.use(resourceNotFound);
app.use(errorHandler);

export default app;