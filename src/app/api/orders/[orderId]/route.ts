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

export async function PATCH(request: NextRequest,{params}:{params:Params} ) {
    try {
        const orderId  = params.orderId;
        const { customerName } = await request.json();
    
        if (!customerName) {
        return NextResponse.json(
            { error: "required fields missing." },
            {
            status: 401,
            }
        );
        }
        
        const conn = postgres({
            ssl: require,
        });

        // write and execute a query to update customerName based on orderId
        await conn.unsafe(`UPDATE orders
        SET customerName = '${customerName}'
        WHERE orderId = '${orderId}'`);

        const result = await conn.unsafe(`Select * from orders
        WHERE orderId = '${orderId}'`);

        return NextResponse.json(result, {
        status: 200,
        });
    } catch (error: any) {
        console.log(error);
    
        return NextResponse.json(
        { error: error.message || "Somethineg went wrong" },
        {
            status: 500,
        }
        );
    }
    }

export async function DELETE(request: NextRequest, {params}:{params:Params}) {

    const orderId = params.orderId;
    const conn = postgres({
        ssl: require,
    });
    // check if the order Id Exists
    const result = await conn.unsafe(`Select * FROM orders
    WHERE orderId='${orderId}'`);
    // check if there is result against query
    
    const state = Object.keys(result).length === 0
    !state && await conn.unsafe(`DELETE FROM orders
    WHERE orderId='${orderId}'`);
    return NextResponse.json(state?({'message':`No order with id ${orderId} Exist`}):{'message':`Order ${orderId} is Deleted`});
}

