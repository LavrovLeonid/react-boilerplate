import { RequestHandler } from 'express';
import path from 'path';
import fs from 'fs';
import { getPublicEnvironmentVariables } from './utils';

export const renderHandler: RequestHandler = async (_, response) => {
  try {
    const htmlFile = await fs.promises.readFile(
      path.join(process.cwd(), 'dist', 'client', 'index.html'),
      'utf-8',
    );

    const html = htmlFile.replace(
      '{{env}}',
      `process = ${getPublicEnvironmentVariables()}`,
    );

    response.send(html);
  } catch {
    response.statusCode = 404;
    response.send('Not found');
  }
};
