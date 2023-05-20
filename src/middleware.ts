import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export { default } from "next-auth/middleware";
export const config = { matcher: ["/secret"] };
