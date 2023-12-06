import { NextResponse } from "next/server";

export async function GET() {
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

export async function POST() {}
