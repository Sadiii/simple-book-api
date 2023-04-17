import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import postgres from "postgres";


export async function POST(request:NextRequest) {
    try{
    const { clientName, clientEmail } = await request.json();

    if (!clientName || !clientEmail) {
      return NextResponse.json(
        { error: "required fields missing." },
        {
          status: 401,
        }
      );
    }
    const accessToken = jwt.sign(
        {
          email: clientEmail,
        },
        process.env.ACCESS_TOKEN_GEN!,
        { expiresIn: "7d" }
      );

    const query = `INSERT INTO clients VALUES ('${clientEmail}', '${clientName}');`

    const conn = postgres({ssl: require,});
    await conn.unsafe(query);

    return NextResponse.json(
    { accessToken },
    {
        status: 200,
    }
    );
    }catch (error: any) {
        return NextResponse.json(
        { error: "API client already registered." },
        {
            status: 409,
        }
        );
    }

}
