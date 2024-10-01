import { render } from '@testing-library/react';

import React from 'react';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigation routes={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
