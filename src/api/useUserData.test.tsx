import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { useUserData } from './useUserData';

const wrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('return user list from server', async () => {
  const { result } = renderHook(() => useUserData(), {
    wrapper: wrapper(),
  });
  await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

  expect(result.current.data).toBeDefined();
});
