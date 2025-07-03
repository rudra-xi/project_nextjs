export default async function Docs({
	params,
}: {
	params: Promise<{ slug: string[] }>;
}) {
	const { slug } = await params;

	if (slug.length === 2) {
		return (
			<h1 className="flex flex-col gap-10 min-h-screen items-center justify-center bg-black text-white text-4xl font-bold">
				Viewing documentation for feature {slug[0]} and concept{" "}
				{slug[1]}
			</h1>
		);
	} else if (slug.length === 1) {
		return (
			<h1 className="flex flex-col gap-10 min-h-screen items-center justify-center bg-black text-white text-4xl font-bold">
				Viewing documentation for feature {slug[0]}
			</h1>
		);
	}

	//!!  not visible
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Documentation</h1>
			<p className="text-2xl">
				Welcome to the documentation for our product. Here you will
				find all the information you need to get started.
			</p>
		</div>
	);
}
