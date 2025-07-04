"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();
	const productId = pathname.split("/")[2];
	const reviewId = pathname.split("/")[4];

	return (
		<div className="flex min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">
				Review {reviewId} Not Found for Product {productId}
			</h1>
		</div>
	);
}
