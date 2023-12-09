import UserList from "@/app/components/UserList";
import { server } from "@/mocks/server";
import { render, screen } from "@testing-library/react";
import { http } from "msw";

describe("UserList - Rendering", () => {
  it("should have the text Francis", async () => {
    render(<UserList />);
    expect(await screen.findByTexT("Francis")).toBeInTheDocument();
    expect(screen.queryByText("No Users")).not.toBeInTheDocument();
  });

  it("should have username mike rendered", async () => {
    server.use(
      http.get("/api/users", (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: "mike" }]));
      })
    );
    render(<UserList />);
    expect(await screen.findByTexT("Francis")).toBeInTheDocument();
  });
});
