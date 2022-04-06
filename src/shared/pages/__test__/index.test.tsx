import { render } from '@shared/test-utils';
import IndexPage from '..';

test('index page', () => {
  const { container } = render(<IndexPage />);

  expect(container.firstChild).toMatchSnapshot();
});
