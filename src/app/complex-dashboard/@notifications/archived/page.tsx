import Link from "next/link";

export default function ArchivedNotifications() {
	return (
		<div>
			<h1 className="text-4xl font-bold">Archived Notifications</h1>
			<p className="mt-2 text-gray-400">
				You have no archived notifications.
			</p>
			<Link
				href="/complex-dashboard"
				className="mt-4 text-blue-500 hover:underline"
			>
				Go back to Dashboard
			</Link>
		</div>
	);
}
