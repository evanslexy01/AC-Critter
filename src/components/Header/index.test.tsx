import Header from '.';
import { render } from '@testing-library/react';
import * as React from 'react';

describe('Header component', () => {
  it('renders correctly (MLPEligible true)', () => {
    render(<Header isMultiLender={true} />); // Test for runtime errors
  });

  it('renders correctly (MLPEligible false)', () => {
    render(<Header isMultiLender={false} />); // Test for runtime errors
  });
});
