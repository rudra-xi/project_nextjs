export default async function ProductDetails({
	params,
}: {
	params: Promise<{ productId: string }>;
}) {
	const productId = (await params).productId;
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Product Details</h1>
			<p className="text-2xl">
				Details about the product with{" "}
				<span className="font-bold italic">ID {productId}</span>{" "}
				will be displayed here.
			</p>
		</div>
	);
}
