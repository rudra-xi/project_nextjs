import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
	// const reqHeaders = new Headers(request.headers);
	// console.log(reqHeaders.get("Authorization"));

	const headersList = await headers();
	console.log(headersList.get("Authorization"));
	// return Response.json({ message: "Profile API is working" });
	return new Response("<h1>Profile API is working</h1>", {
		headers: {
			"Content-Type": "text/html",
		},
	});
}
