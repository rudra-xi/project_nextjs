import Link from "next/link";

export default function F1() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Welcome to F1</h1>
			<p className="mt-4">This is the F1 page.</p>
			<Link
				href={"/f1/f2"}
				className="text-blue-500 hover:underline mt-6"
			>
				Go to F2
			</Link>
			<Link
				href={"/f3"}
				className="text-blue-500 hover:underline mt-6"
			>
				Go to F3
			</Link>
		</div>
	);
}
