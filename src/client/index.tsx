import { createRoot } from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Index } from '@shared/index';
import { history } from '@shared/utils/history';
import { prependDocument } from './utils';

prependDocument();

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <HistoryRouter history={history}>
      <Index />
    </HistoryRouter>,
  );
}
