import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
    const conn = postgres({
    ssl: require,
    })
    const query  = "SELECT * FROM orders"
    let orders:Order[] = await conn.unsafe(query);
    console.log(orders)
    const results = orders.map(order=>(
    {orderId:order.orderId,
    customerName:order.customerName}
    ))
    return NextResponse.json(results);
}

export async function POST(request:NextRequest) {
    const{bookId, customerName } = await request.json()
    let token = request.headers.get("authorization") as string;
    if(!bookId || !customerName)return NextResponse.json({"message":"Missing required data" })
    const orderId = Math.random().toString(36).slice(2)
    console.log(orderId)
    const query = `INSERT INTO orders (orderId, customerName, accesstoken, bookId)
    VALUES ('${orderId}','${customerName}', '${token}', ${bookId}) returning *`;
    

    const conn = postgres({ssl: require});
    const response = await conn.unsafe(query);
    return NextResponse.json(response, {
        status: 201,
      });
    
  }
  