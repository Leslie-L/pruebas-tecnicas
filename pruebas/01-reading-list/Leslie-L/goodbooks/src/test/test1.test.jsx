import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from "../App";
import { describe } from 'vitest';

/*

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText("GoodBooks");
    expect(headline).toBeInTheDocument();
    
  });
});*/

describe('E2E', async ()=>{
  render(<App />)
  test('renders Books text', async () => {
    const headline = screen.getByText("Books displeyed: 13");
     expect(headline).toBeInTheDocument();
     const searchInput = screen.getByPlaceholderText('Titles or author');
     fireEvent.change(searchInput, { target: { value: 'j' } });
     
    
  })

})

