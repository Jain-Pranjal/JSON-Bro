// ClientProvider.js
'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


// now we have provided the global stale time and cache time for the queries
export const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 1000 * 60 * 5, // 5 minutes
  //     cacheTime: 1000 * 60 * 30, // 30 minutes
  //   },
  // },

});

const ClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition={"top-right"}/>
    </QueryClientProvider>
  );
};

export default ClientProvider;

