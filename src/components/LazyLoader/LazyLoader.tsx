import React, { Suspense } from 'react';

type Props = {
  path: string,
}

const LazyLoader: React.FC<Props> = ({ path }) => {
  const LazyComponent = React.lazy(() => import(`../${path}`));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default LazyLoader;