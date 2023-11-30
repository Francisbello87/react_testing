import UserProfile from "@/app/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName="Francis"
        username="Francis_coder"
        email="bellofrancis91@gmail.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText(/Email verified/)).toBeInTheDocument();
  });

  it("should have text Email not verified when isEmailVerified is false", () => {
    render(
      <UserProfile
        displayName="Francis"
        username="Francis_coder"
        email="bellofrancis91@gmail.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText(/Email verified/)).not.toBeInTheDocument();
    expect(screen.getByText(/Email not verified/)).toBeInTheDocument();
  });

  it("should have display name end with three dots when length is greater than 5 characters", () => {
    render(
      <UserProfile
        displayName="Francis"
        username="Francis_coder"
        email="bellofrancis91@gmail.com"
        isEmailVerified={false}
      />
    );
     const displayNamespanElement = screen.getByText(/Display Name:/);
     expect(displayNamespanElement).toHaveTextContent(/.*\.\.\./);
  });

  it('should not have three dots at end of display name when length is less than 5 characters', () => {
    render(
      <UserProfile
        displayName="Tom"
        username="Francis_coder"
        email="bellofrancis91@gmail.com"
        isEmailVerified={false}
      />
    ); 
    const displayNameSpanElement = screen.getByText(/Display Name:/);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./);   
  });

 
});
