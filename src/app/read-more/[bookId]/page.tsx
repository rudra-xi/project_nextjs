import Link from "next/link";

export default function BookId({
	params,
	searchParams,
}: {
	params: { bookId: string };
	searchParams: { lang?: "en" | "fr" | "es" };
}) {
	const { bookId } = params;
	const { lang = "en" } = searchParams;
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Book Details</h1>

			<p className="text-lg mt-4">Book Id {bookId}</p>
			<p className="text-lg mt-4">Reading Book in {lang}</p>

			<div className="mt-8 flex flex-col items-center">
				<Link
					href={`/read-more/${bookId}?lang=en`}
					className="text-blue-500 hover:underline mt-2"
				>
					Read more in English
				</Link>
				<Link
					href={`/read-more/${bookId}?lang=fr`}
					className="text-blue-500 hover:underline mt-2"
				>
					Read more in French
				</Link>
				<Link
					href={`/read-more/${bookId}?lang=es`}
					className="text-blue-500 hover:underline mt-2"
				>
					Read more in Spanish
				</Link>
			</div>
		</div>
	);
}
