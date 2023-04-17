import { NextRequest, NextResponse } from "next/server";
import { verifyClient } from "../authenticate/auth";

export async function middleware(request: NextRequest) {
  try {
    const authToken = request.headers.get("authorization")?.split(" ")[1];
    const host = request.headers.get("host")!
    if (!authToken) {
      return NextResponse.json(
        { error: "Authorization Required" },
        {
          status: 401,
        }
      );
    }

    // call to bookstore db to verify user 
    
    const decodedUser = await verifyClient(authToken, host);

    // passing the data by headers
    const headers = new Headers(request.headers);
    headers.set("clientEmail", JSON.stringify(decodedUser.clientemail));
    // returning Response to header
    return NextResponse.next({ headers });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}

export const config = {
  matcher: ["/api/orders/:path*"],
};
