// import { http, HttpResponse } from 'msw';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { server } from '../../msw/server';

const renderWithQueryClientProvider = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <UserList setUserId={jest.fn()} />
    </QueryClientProvider>
  );
};

// afterEach(() => {
//   server.resetHandlers(); // Clean up runtime handlers after each test
// });

test('UserList displays loader on data fetch', async () => {
  renderWithQueryClientProvider();
  const el = screen.getByRole('status');
  expect(el).toHaveTextContent('Loading...');
});

test('UserList displays table after successful data fetch', async () => {
  renderWithQueryClientProvider();
  const el = await screen.findByRole('table');
  expect(el).toBeInTheDocument();
});

// test('UserList displays error alert on data fetch failure', async () => {
//   server.use(
//     http.get('/api/users',  () => {
//       // return new HttpResponse(null, { status: 500 });
//       return HttpResponse.json({ message: 'Internal error' }, { status: 500 });
//     }, { once: true })
//   )
//   renderWithQueryClientProvider();
//   const el = await screen.findByRole('alert');
// });
