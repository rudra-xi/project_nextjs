type Author = {
	id: number;
	name: string;
};

export default async function Author({ userId }: { userId: number }) {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	const author: Author = await response.json();
	return (
		<div className="text-white">
			<h3 className="text-xl font-semibold">
				Written by:
				<span className="text-gray-400 pl-2">{author.name}</span>
			</h3>
		</div>
	);
}
