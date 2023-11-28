import Home from "@/app/page";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  describe("Rendering", () => {
    it("should have Home Page text", () => {
      render(<Home />);
      expect(screen.getByText("Home Page")).toBeInTheDocument();
    });

    it("should have button with text Click Here", () => {
      render(<Home />);
      expect(
        screen.getByRole("button", { name: "Click Here" })
      ).toBeInTheDocument();
    });

    it("should have input field with label Enter Random Text", () => {
      render(<Home />);
      // expect(screen.getByRole("textbox")).toBeInTheDocument(); with role
      expect(screen.getByLabelText(/Enter any text/)).toBeInTheDocument(); //with label
    });
    it("should have input field with placeholder Search", () => {
      render(<Home />);
      expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
    });
    it("should have input field by display value", () => {
      render(<Home />);
      expect(screen.getByDisplayValue(/Arsenal/)).toBeInTheDocument();
    });
    it("should not find element with text: This is the text", () => {
      render(<Home />);
      expect(screen.queryByText("This is the text")).not.toBeInTheDocument();
    });
  });
  describe("Behaviour", () => {
    it("should click on Show Text button and find new text", async () => {
      render(<Home />);
      expect(screen.queryByText('This is the text!')).not.toBeInTheDocument()
      const showTextButton = screen.getByRole('button', {name: 'Show Text'})
      await userEvent.click(showTextButton)
      // expect(screen.getByText("This is the text!")).toBeInTheDocument();
      expect(await screen.findByText("This is the text!", {}, {timeout: 5000})).toBeInTheDocument();
      // await waitFor(() => {
      //   expect(screen.getByText("This is the text!")).toBeInTheDocument();
      // }, {timeout: 1200})
    });
  });
});

// use findBy query whenever you have state updating e.g modal,