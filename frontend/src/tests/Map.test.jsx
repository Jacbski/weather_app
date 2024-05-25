import React from 'react';
import { render } from '@testing-library/react';
import Map from '../components/Map.jsx';

test('renders map component without crashing', () => {
  const { container } = render(<Map coordinates={[54.372158, 18.638306]} />);
  expect(container).toBeInTheDocument();
});
