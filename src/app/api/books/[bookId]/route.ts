import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

type Params = {
  bookId:string
}
export async function GET(request: NextRequest, { params }: { params: Params }) {
    // const id = request.url.slice(request.url.lastIndexOf('/')+1);
    const bookId = params.bookId;
    const conn = postgres({
      ssl: require,
    });
    const result = await conn.unsafe(`SELECT * FROM books WHERE id=${bookId}`);
    
    const state = Object.keys(result).length === 0
    return NextResponse.json(state?({'message':`No book with id ${bookId} Exist`}):result);
}