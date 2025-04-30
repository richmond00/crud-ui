import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/UserList');

test('page displays page title', () => {
  render(<App />);

  const title = screen.getByRole('heading', { level: 1 });

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('User list');

  // test
});
