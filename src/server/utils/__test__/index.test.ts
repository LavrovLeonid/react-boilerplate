import { getPublicEnvironmentVariables } from '..';

describe('environments', () => {
  const originalEnvironments = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnvironments };
  });

  afterAll(() => {
    process.env = originalEnvironments;
  });

  test('getPublicEnvironmentVariables', () => {
    process.env.API_URL = 'test-env';

    expect(getPublicEnvironmentVariables()).toEqual(
      JSON.stringify({
        env: {
          API_URL: 'test-env',
        },
      }),
    );

    process.env.API_URL = '';

    expect(getPublicEnvironmentVariables()).toEqual(
      JSON.stringify({
        env: {
          API_URL: '',
        },
      }),
    );
  });
});
