import { NextRequest, NextResponse } from "next/server"


export function middleware(req: NextRequest, res: NextResponse) {
    //const pathname = req.nextUrl.pathname;
    //const privateUrls = ['/admin', '/admin/dashboard'];
    //
    //if(!req.cookies["next-auth.session-token"] && privateUrls.find((a) => pathname === a)) {
    //    const url = req.nextUrl.clone()
    //    url.pathname = '/'
    //    return NextResponse.rewrite(url);
    //}

};