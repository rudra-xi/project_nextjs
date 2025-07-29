"use client";

import { useEffect } from "react";

export default function ServerError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Something went wrong!</h1>
			<button
				onClick={reset}
				className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
			>
				Try again
			</button>
		</div>
	);
}
