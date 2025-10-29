import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Client from '@/app/client';
import { getQueryClient, trpc } from '@/trpc/server';

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.hello.queryOptions({ text: 'Archit' }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
}
