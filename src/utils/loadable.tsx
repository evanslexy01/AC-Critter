import * as React from 'react';

export const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(
  importFunc: () => T,
  selectorFunc: (s: T extends Promise<infer P> ? P : never) => U,
  fallback: React.ReactNode = null
) => {
  const LazyComponent = React.lazy(() =>
    importFunc().then(module => ({ default: selectorFunc(module) }))
  );
  return (props: React.ComponentProps<U>): JSX.Element => (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};
