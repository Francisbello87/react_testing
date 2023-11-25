import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe('Home Page - Rendering', () => {
  it('should have Home Page text', () =>{
    render(<Home/>);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should have button with text Click Here", () => {
    render(<Home/>)
    expect(screen.getByRole("button", { name: "Click Here" })).toBeInTheDocument();
  });

  it('should have input field with label Enter Random Text', () => {
    render(<Home/>)
    // expect(screen.getByRole("textbox")).toBeInTheDocument(); with role
    expect(screen.getByLabelText(/Enter any text/)).toBeInTheDocument() //with label
  })
  it('should have input field with placeholder Search', () => {
    render(<Home/>)
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  })
  it('should have input field by display value', () => {
    render(<Home/>)
    screen.getByDisplayValue(/Arsenal/)
    
  })
});