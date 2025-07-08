"use client";
import { useEffect } from "react";

export default function Error({
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
			<h2 className="text-4xl font-bold">Something went wrong!</h2>
			<button onClick={reset} className="mt-4 p-2 bg-blue-500 rounded">
				Try again
			</button>
		</div>
	);
}
