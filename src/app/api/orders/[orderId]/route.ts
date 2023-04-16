import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

type Params = {
    orderId:string
}

export async function GET(request: NextRequest,{params}:{params:Params} ) {
    // const id = request.url.slice(request.url.lastIndexOf('/')+1);
    const orderId = params.orderId;

    const conn = postgres({
        ssl: require,
    });
    const result = await conn.unsafe(`SELECT * FROM orders WHERE orderId='${orderId}'`);
    const state = Object.keys(result).length === 0
    return NextResponse.json(state?({'message':`No order with id ${orderId} Exist`}):result);
    }

export async function DELETE(request: NextRequest, {params}:{params:Params}) {
    const orderId = params.orderId;
    const conn = postgres({
        ssl: require,
    });
    const result = await conn.unsafe(`DELETE FROM orders
    WHERE orderId='${orderId}'`);
    const state = Object.keys(result).length === 0
    return NextResponse.json(state?({'message':`No order with id ${orderId} Exist`}):result);
}

