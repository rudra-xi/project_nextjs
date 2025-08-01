import Link from "next/link";

export default function F6() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Welcome to F6</h1>
			<p className="mt-4">This is the F6 page.</p>

			<Link
				href={"/f5"}
				className="text-blue-500 hover:underline mt-6"
			>
				Go to F5
			</Link>
		</div>
	);
}
