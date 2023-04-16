import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    const conn = postgres({
    ssl: require,
    });
    let orders:Order[] = await conn.unsafe("SELECT * FROM orders");

    const results = orders.map(order=>(
    {orderId:order.orderId,
    customerName:order.customerName}
    ))
    return new NextResponse(JSON.stringify(results));
}

export async function POST(request:NextRequest) {
    const{bookId, customerName } = await request.json()
    console.log(request.headers)
    if(!bookId || !customerName)return NextResponse.json({"message":"Missing required data" })

    console.log(bookId, customerName)
    // const conn = postgres({
    //     ssl: require,
    //     });
    //     let orders:Order[] = await conn.unsafe(`INSERT INTO orders VALUES (${bookId}, '${customerName}', 9.99);`);
    
  }
  