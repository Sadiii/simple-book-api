import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    const conn = postgres({
    ssl: require,
    })
    // select orders from db and execute query
    const query  = "SELECT * FROM orders"
    let orders:Order[] = await conn.unsafe(query);
    return NextResponse.json(orders);
}

export async function POST(request:NextRequest) {

    // fetch bookId and customerName from request body
    const{bookId, customerName } = await request.json()

    // fetch client email from header
    const clientEmail = JSON.parse(request.headers.get("clientemail")!);
    if(!bookId || !customerName)return NextResponse.json({"message":"Missing required data" })

    // generate random order Id
    const orderId = Math.random().toString(36).slice(2)

    // store order data to db
    const query = `INSERT INTO orders (orderId, customerName,clientEmail, bookId)
    VALUES ('${orderId}','${customerName}', '${clientEmail}', ${bookId}) returning *`;
    // execute query
    const conn = postgres({ssl: require});
    const response = await conn.unsafe(query);
    // send post response back
    return NextResponse.json(response, {
        status: 201,
    });

  }
  