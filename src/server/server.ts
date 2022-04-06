import path from 'path';
import express from 'express';
import compression from 'compression';
import { renderHandler } from './render-handler';
import 'dotenv/config';

const app = express();

app.use(compression());
app.use('/client', express.static(path.join(process.cwd(), 'dist', 'client')));

app.get('*', renderHandler);

export { app };
