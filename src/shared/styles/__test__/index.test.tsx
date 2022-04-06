import { render } from '@shared/test-utils';
import { StyledIndexPage } from '..';

describe('index styles', () => {
  test('StyledIndexPage', () => {
    const { container } = render(
      <StyledIndexPage>page content</StyledIndexPage>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
