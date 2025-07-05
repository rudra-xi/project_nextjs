import Link from "next/link";

export default function Products() {
	return (
		<div className="flex flex-col gap-10 min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Products Page</h1>

			<div className="flex items-center mt-6 gap-10 text-2xl">
				<Link href={"/products/1"} className="italic list-disc">
					Product -1
				</Link>
				<Link href={"/products/2"} className="italic list-disc">
					Product -2
				</Link>
				<Link href={"/products/3"} replace className="italic list-disc">
					Product -3
				</Link>
			</div>
		</div>
	);
}
