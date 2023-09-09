import { render, screen } from '@testing-library/react';
import App from "../App";

/*

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText("GoodBooks");
    expect(headline).toBeInTheDocument();
    
  });
});*/


test('renders Books text', async () => {
  render(<App />)
  await screen.findByText('GoodBooksBooks displeyed: 13')
})
