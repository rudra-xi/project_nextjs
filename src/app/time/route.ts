export const dynamic = "force-dynamic";

export async function GET() {
	const currentTime = new Date().toLocaleTimeString();
	return new Response(JSON.stringify({ currentTime }), {
		headers: { "Content-Type": "application/json" },
	});
}
