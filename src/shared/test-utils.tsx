import { FC } from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies -- Не используется в продакшене
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies -- Не используется в продакшене
import userEvent from '@testing-library/user-event';
import { history } from '@utils/history';

const AllTheProviders: FC = ({ children }) => (
  <HistoryRouter history={history}>{children}</HistoryRouter>
);

const customRender = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1],
) => render(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (
  ui: Parameters<typeof render>[0],
  { route = '/' } = {},
) => {
  history.push(route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders }),
  };
};

// eslint-disable-next-line import/no-extraneous-dependencies -- Не используется в продакшене
export * from '@testing-library/react';
export { customRender as render, renderWithRouter };
