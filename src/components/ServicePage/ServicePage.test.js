
import React from 'react';
import { render } from '@testing-library/react';
import ServicePage from './ServicePage';

test('renders ServicePage component', () => {
    const { getByText } = render(<ServicePage />);
    const linkElement = getByText(/This is the ServicePage component/i);
    expect(linkElement).toBeInTheDocument();
});
