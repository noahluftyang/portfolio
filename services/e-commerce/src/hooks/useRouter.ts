import Router, { useRouter as useNextRouter } from 'next/router';

interface Options {
  suspense: boolean;
}

export function useRouter(options: Options = { suspense: true }) {
  const router = useNextRouter();

  if (!router.isReady && options.suspense) {
    throw waitForRouterReady();
  }

  return router;
}

function waitForRouterReady() {
  return new Promise<void>(Router.ready);
}
