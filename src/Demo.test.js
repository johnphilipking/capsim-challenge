import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Demo from './Demo';

test('renders Demo element', () => {
  
  render(<Demo />);

  const element = screen.getByText('Click a link, above, to view Demo pages.'); 

  expect(element).toBeInTheDocument();
});