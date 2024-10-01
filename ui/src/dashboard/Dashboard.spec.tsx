import { render } from '@testing-library/react';

import { Dashboard } from './Dashboard';
import React from 'react';

describe('Dashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dashboard />);
    expect(baseElement).toBeTruthy();
  });
});
