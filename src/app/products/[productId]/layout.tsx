export default function ProductDetailsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<h1 className="text-2xl text-center font-bold my-4">
				Product Details
			</h1>
			<p className="text-gray-600 mb-4 text-center">
				Here you can find detailed information about the product.
			</p>
			{children}
		</section>
	);
}
