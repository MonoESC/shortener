// export { auth as middleware } from "@/auth";

import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
    const pathname = req.nextUrl.pathname;

    if (!req.auth && pathname !== "/signin") {
        return NextResponse.redirect(new URL("/signin", req.url));
    }
    // if (req.auth && pathname === "/signin") {
    //     return NextResponse.redirect(new URL("/_", req.url));
    // }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
