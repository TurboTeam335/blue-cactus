import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the about section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/who we are/i); 
  expect(aboutElement).toBeInTheDocument();
});