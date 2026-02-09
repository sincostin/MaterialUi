// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MaterialUi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MaterialUi/i);
    expect(titleElement).toBeInTheDocument();
});
