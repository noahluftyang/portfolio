import { Suspense } from 'react';
import { isClient } from 'utils/is';

export const SSRSuspense = ({ fallback, ...props }) => {
  if (isClient()) {
    return <Suspense fallback={fallback} {...props} />;
  }

  return fallback;
};
