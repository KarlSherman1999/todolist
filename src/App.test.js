import { render, screen } from '@testing-library/react';
import App from './App';

const mockData ={
    "test1"
    "test2"
}

describe("todo tests",()=>{
    test('renders the heading',()=>{
        render(<Todo todos={mockData}/>)
        const element = screen.getByText(/delete/i);
        expect(element.length).toBe(2);
    });
})

test('renders learn react link', () => {
render(<App />);
const linkElement = screen.getByRole('button');
expect(linkElement).toBeInTheDocument();
});