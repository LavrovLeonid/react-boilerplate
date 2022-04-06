import { renderWithRouter, screen, waitFor } from '@shared/test-utils';
import { Index } from '..';

test('index page', async () => {
  renderWithRouter(<Index />);

  await waitFor(() => expect(screen.getByText('index')).toBeInTheDocument());
});

test('not found page', async () => {
  renderWithRouter(<Index />, { route: '/unknown' });

  await waitFor(() =>
    expect(screen.getByText('not found')).toBeInTheDocument(),
  );
});
