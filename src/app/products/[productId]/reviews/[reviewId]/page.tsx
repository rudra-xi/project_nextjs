import { notFound } from "next/navigation";

const getRandomNumber = (count: number) => {
	return Math.floor(Math.random() * count);
};

export default async function ReviewDetails({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) {
	const random = getRandomNumber(2);
	if (random === 1) {
		throw new Error("Error Loading Review Details.");
	}
	const { productId, reviewId } = await params;

	if (parseInt(reviewId) > 100) {
		notFound();
	}
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Review Details</h1>
			<p className="text-2xl">
				Details about the review with{" "}
				<span className="font-bold">ID {reviewId}</span> for{" "}
				<span className="font-bold">product {productId}</span> will
				be displayed here.
			</p>
		</div>
	);
}
