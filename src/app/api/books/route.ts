import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const type = searchParams.get('type');
    const conn = postgres({
    ssl: require,
    });

    const books:Book[] = await conn.unsafe(
        (limit && type)?`SELECT * FROM books WHERE type='${type}' LIMIT ${limit}`:limit?`SELECT * FROM books ORDER BY id asc limit ${limit}`:type? `SELECT * FROM books WHERE type='${type}'`:"SELECT * FROM books"
    );
    const results = books.map(book=>(
    {id:book.id,
    name:book.name,
    type:book.type,
    available:book.available}
    ))
    return NextResponse.json(results, {
        status: 200,
      });
}