import { verify } from "jsonwebtoken";
import postgres from "postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const decodedToken = verify(
      token,
      process.env.ACCESS_TOKEN_GEN!
    ) as Record<string, string>;
    const query = `SELECT * from clients WHERE clientEmail = '${decodedToken.email}'`;
    const conn = postgres({ssl: require});
    const decodedUser = await conn.unsafe(query);

    return NextResponse.json(decodedUser[0]);
  } catch (error) {
    console.log(error)
    throw new Error("You are not permitted");
  }
}
