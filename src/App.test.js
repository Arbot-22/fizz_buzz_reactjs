import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title Fizz Buzz', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fizz Buzz/i);
  expect(linkElement).toBeInTheDocument();
});
