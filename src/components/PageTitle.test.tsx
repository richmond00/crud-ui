import { render, screen } from '@testing-library/react';
import PageTitle from './PageTitle';

test('PageTitle displays main heading', () => {
  render(<PageTitle />);
  const el = screen.getByRole('heading', { level: 1 });
  expect(el).toBeInTheDocument();
});
