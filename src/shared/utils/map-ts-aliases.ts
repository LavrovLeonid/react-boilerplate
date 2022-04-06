import path from 'path';

export const resolveStar = (alias: unknown) =>
  typeof alias === 'string' ? alias.replace('/*', '') : '';

export const mapTsAliases = (
  paths: Record<string, string[]>,
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(paths).map(([alias, [tsPath]]) => [
      resolveStar(alias),
      path.resolve(process.cwd(), resolveStar(tsPath)),
    ]),
  );
