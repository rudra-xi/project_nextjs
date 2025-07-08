"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
	const router = useRouter();
	const handleClick = () => {
		console.log("Product ordered successfully!");
		router.replace("/");
	};
	return (
		<div className="flex flex-col min-h-screen items-center justify-center p-6">
			<h1 className="text-2xl font-bold mb-4">Order Product</h1>
			<p className="mb-4">Details about the product will go here.</p>
			<button
				onClick={handleClick}
				className="bg-blue-500 text-white py-2 px-4 rounded"
			>
				Order Product
			</button>
		</div>
	);
}
