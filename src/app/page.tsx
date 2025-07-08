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
			<Link
				href={"/order-product"}
				className="text-blue-500 hover:underline mt-2"
			>
				Order Product
			</Link>

			<div className="mt-8 flex flex-col items-center">
				<Link
					href={"read-more/bookId?lang=en"}
					className="text-blue-500 hover:underline mt-2"
				>
					Read more in English
				</Link>
				<Link
					href={"read-more/bookId?lang=fr"}
					className="text-blue-500 hover:underline mt-2"
				>
					Read more in French
				</Link>
				<Link
					href={"read-more/bookId?lang=es"}
					className="text-blue-500 hover:underline mt-2"
				>
					Read more in Spanish
				</Link>
			</div>
		</div>
	);
}
