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
});