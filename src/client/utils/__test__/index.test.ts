import { prependDocument } from '..';

describe('init app', () => {
  beforeAll(() => {
    const scriptElement = document.createElement('script');
    scriptElement.id = 'env';

    document.body.appendChild(scriptElement);
  });

  test('prependDocument', () => {
    expect(document.querySelector('#env')).not.toBe(null);

    prependDocument();

    expect(document.querySelector('#env')).toBe(null);
  });
});
