import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('Loader displays loading status', () => {
  render(<Loader />);
  const el = screen.getByRole('status');
  expect(el).toBeInTheDocument();
});
