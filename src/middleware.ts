import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// return NextResponse.redirect(new URL("/", request.url));

	if (request.nextUrl.pathname === "/about") {
		return NextResponse.rewrite(new URL("/blog", request.nextUrl));
	}

	const response = NextResponse.next();
	const themePreference = request.cookies.get("theme");
	if (!themePreference) {
		response.cookies.set("theme", "dark");
	}

	response.headers.set("Custom-Header", "This is a custom header");

	return response;
}

// export const config = {
// 	matcher: "/profile",
// };
