import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
			<Link
				href={"/about"}
				className="text-blue-500 hover:underline mt-6"
			>
				About
			</Link>
			<Link
				href={"/products"}
				className="text-blue-500 hover:underline mt-2"
			>
				Products
			</Link>
		</div>
	);
}
