import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
	// const reqHeaders = new Headers(request.headers);
	// console.log(reqHeaders.get("Authorization"));

	const headersList = await headers();
	console.log(headersList.get("Authorization"));
	// return Response.json({ message: "Profile API is working" });

	const theme = request.cookies.get("theme");
	console.log(theme);

	const cookiesStore = await cookies();
	cookiesStore.set("resultPerPage", "20");

	return new Response("<h1>Profile API is working</h1>", {
		headers: {
			"Content-Type": "text/html",
			"Set-Cookie": "theme=dark",
		},
	});
}
