export default async function ReviewDetails({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) {
	const { productId, reviewId } = await params;

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
