import { comments } from "../data";

import { NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	const comment = comments.find((c) => c.id === parseInt(id));
	if (!comment) {
		return new Response(JSON.stringify({ error: "Comment not found" }), {
			status: 404,
		});
	}
	return Response.json(comment);
}

export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = await params;
	const body = await request.json();
	const { text } = body;

	const idx = comments.findIndex((c) => c.id === parseInt(id));
	comments[idx].text = text;
	return Response.json(comments[idx]);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = await params;
	const idx = comments.findIndex((c) => c.id === parseInt(id));
	const delComment = comments[idx];
	comments.splice(idx, 1);
	return Response.json(delComment);
}
