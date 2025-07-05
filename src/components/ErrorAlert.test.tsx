import { render, screen } from '@testing-library/react';
import ErrorAlert from './ErrorAlert';

test('ErrorAlert displays alert message', () => {
  const message = 'Network ErrorAlert';
  render(<ErrorAlert message={message} />);
  const el = screen.getByRole('alert');
  expect(el).toBeInTheDocument();
  expect(el).toHaveTextContent(message);
});
