import { app } from '@server/server';
import request from 'supertest';

describe('server', () => {
  test('root path', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });

  test('unknown path', async () => {
    const response = await request(app).get('/unknown path');

    expect(response.statusCode).toBe(200);
  });

  test('error', async () => {
    const resolveSpy = jest
      .spyOn(process, 'cwd')
      .mockReturnValue('/unknown path');

    const response = await request(app).get('/unknown path');

    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Not found');

    resolveSpy.mockRestore();
  });
});
