export default async function Blog() {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
	return (
		<div className="flex min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Blog Page</h1>
		</div>
	);
}
