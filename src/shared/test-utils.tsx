import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies -- Не используется в продакшене
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies -- Не используется в продакшене
import userEvent from '@testing-library/user-event';

const AllTheProviders: FC = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1],
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (
  ui: Parameters<typeof render>[0],
  { route = '/' } = {},
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders }),
  };
};

// eslint-disable-next-line import/no-extraneous-dependencies -- Не используется в продакшене
export * from '@testing-library/react';
export { customRender as render, renderWithRouter };
