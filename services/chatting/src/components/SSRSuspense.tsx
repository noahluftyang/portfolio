import { Suspense } from 'react';

export const SSRSuspense = ({ fallback, ...props }) => {
  const isClient = typeof window !== 'undefined';

  if (isClient) {
    return <Suspense fallback={fallback} {...props} />;
  }

  return fallback;
};
