import { http, HttpResponse } from 'msw';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import { origin } from '../lib/const';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { server } from '../../msw/server';

const renderWithQueryClientProvider = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <UserList setUserId={jest.fn()} />
    </QueryClientProvider>
  );
};

test('UserList displays loader on data fetch', () => {
  renderWithQueryClientProvider();
  const el = screen.getByRole('status');
  expect(el).toHaveTextContent('Loading...');
});

// test('UserList displays error alert on data fetch failure', async () => {
//   server.use(
//     http.get(`${origin}/api/users`,  () => {
//       return new HttpResponse(null, { status: 500 });
//     }, { once: true })
//   )
//   renderWithQueryClientProvider();
//   const el = await screen.findByRole('alert');
//   screen.debug();
//
//
// });

test('UserList displays user list table after successful data fetch', () => {});
