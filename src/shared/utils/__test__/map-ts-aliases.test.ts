import { mapTsAliases, resolveStar } from '../map-ts-aliases';

describe('map ts config aliases', () => {
  test('resolveStar', () => {
    expect(resolveStar([])).toBe('');
    expect(resolveStar({})).toBe('');
    expect(resolveStar('')).toBe('');
    expect(resolveStar('/*')).toBe('');
    expect(resolveStar('0/*12')).toBe('012');
  });

  test('mapTsAliases', () => {
    expect(mapTsAliases({})).toEqual({});

    const resolveSpy = jest.spyOn(process, 'cwd').mockReturnValue('/path');

    expect(
      mapTsAliases({
        test: ['test'],
      }),
    ).toEqual({
      test: '/path/test',
    });

    expect(
      mapTsAliases({
        '@shared/*': ['src/shared/*'],
        '@client/*': ['src/client/*'],
        '@server/*': ['src/server/*'],
        '@pages/*': ['src/shared/pages/*'],
        '@utils/*': ['src/shared/utils/*'],
        '@public/*': ['public/*'],
      }),
    ).toEqual({
      '@shared': '/path/src/shared',
      '@client': '/path/src/client',
      '@server': '/path/src/server',
      '@pages': '/path/src/shared/pages',
      '@utils': '/path/src/shared/utils',
      '@public': '/path/public',
    });

    resolveSpy.mockRestore();
  });
});
