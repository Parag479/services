
import React from 'react';
import { render } from '@testing-library/react';
import SignupPage from './SignupPage';

test('renders SignupPage component', () => {
    const { getByText } = render(<SignupPage />);
    const linkElement = getByText(/This is the SignupPage component/i);
    expect(linkElement).toBeInTheDocument();
});
