import { FC, lazy, StrictMode, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const IndexPage = lazy(
  () =>
    import(
      /* webpackChunkName: "index-page" */
      /* webpackPrefetch: true */
      '@pages/index'
    ),
);

const NotFoundPage = lazy(
  () =>
    import(
      /* webpackChunkName: "not-found-page" */
      /* webpackPrefetch: true */
      '@pages/404'
    ),
);

export const Index: FC = () => (
  <StrictMode>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </StrictMode>
);
