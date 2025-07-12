import Link from "next/link";

export default function Notifications() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Notifications</h1>
			<div className="mt-4 p-4 bg-gray-800">
				<Link
					href="/complex-dashboard/archived"
					className="text-gray-300"
				>
					Archived
				</Link>
			</div>
		</div>
	);
}
