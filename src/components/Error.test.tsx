import { render, screen } from '@testing-library/react';
import Error from './Error';

test('Error displays alert message', () => {
  const message = 'Network Error';
  render(<Error message={message} />);
  const el = screen.getByRole('alert');
  expect(el).toBeInTheDocument();
  expect(el).toHaveTextContent(message);
});
