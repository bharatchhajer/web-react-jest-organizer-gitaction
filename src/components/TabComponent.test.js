import { render, screen } from '@testing-library/react';
import TabComponent from './TabComponent';

test('renders TabComponent with correct text', () => {
  render(<TabComponent />);
  
  // Check if the text "TabComponent" is rendered
  expect(screen.getByText('TabComponent')).toBeInTheDocument();
});