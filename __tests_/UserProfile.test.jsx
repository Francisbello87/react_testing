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
    <UserProfile
      displayName="Francis"
      username="Francis_coder"
      email="bellofrancis91@gmail.com"
      isEmailVerified={false}
    />;
  });
});
