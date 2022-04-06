export const getPublicEnvironmentVariables = (): string =>
  JSON.stringify({
    env: {
      API_URL: process.env.API_URL,
    },
  });
