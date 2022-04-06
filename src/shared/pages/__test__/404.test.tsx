import { render } from '@shared/test-utils';
import NotFoundPage from '../404';

test('404 page', () => {
  const { container } = render(<NotFoundPage />);

  expect(container.firstChild).toMatchSnapshot();
});
