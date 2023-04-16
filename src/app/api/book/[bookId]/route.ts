import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    const id = request.url.slice(request.url.lastIndexOf('/')+1);

  const conn = postgres({
    ssl: require,
  });
  const result = await conn.unsafe(`SELECT * FROM books WHERE id=${id}`);
  
  const state = Object.keys(result).length === 0
  return new NextResponse(state?JSON.stringify({'message':`No book with id ${id} Exist`}):JSON.stringify(result));
}