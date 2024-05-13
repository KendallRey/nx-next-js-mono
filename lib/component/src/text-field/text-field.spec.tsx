import { render } from '@testing-library/react';

import MuiTextField from './text-field';

describe('TextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MuiTextField />);
    expect(baseElement).toBeTruthy();
  });
});
