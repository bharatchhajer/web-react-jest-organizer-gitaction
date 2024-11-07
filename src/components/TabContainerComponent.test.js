import { render, screen } from '@testing-library/react';
import TabContainerComponent from './TabContainerComponent';

test('renders six TabComponents inside TabContainerComponent', () => {
  render(<TabContainerComponent />);
  
  // Check if there are exactly six TabComponent elements rendered
  const tabComponents = screen.getAllByText('TabComponent');
  expect(tabComponents.length).toBe(8);
});

