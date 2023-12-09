import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json([
    {
      id: 1,
      username: "francis",
    },
    {
      id: 2,
      username: "Joe",
    },
    {
      id: 3,
      username: "Brandy",
    },
  ]);
}

