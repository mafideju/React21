import { render } from '@testing-library/react';
import App from '../App';
import StoreLocator from '../StoreLocator';

describe("APP TESTS", () => {
  const { container } = render(<StoreLocator />);
  
  test('RENDERS STORE LOCATION COMPONENT', () => {
    expect(container).toBeInTheDocument();
  });
});
