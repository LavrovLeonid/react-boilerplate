import { app } from './server';

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console -- Лог на сервере
  console.log(`App is running on port ${port}`);
});
