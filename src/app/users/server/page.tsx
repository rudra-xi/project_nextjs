type User = {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
};

export default async function UsersServer() {
	await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay

	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await response.json();
	// console.table(users);

	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Users Server</h1>

			<ul className="mt-6 space-y-4 flex flex-row gap-10 text-balance flex-wrap justify-center">
				{users.map((user) => (
					<li key={user.id} className="mt-4">
						<div>
							<h2 className="text-2xl">{user.name}</h2>
							<p className="text-lg">
								Username: {user.username}
							</p>
							<p className="text-lg">
								Email: {user.email}
							</p>
							<p className="text-lg">
								Phone: {user.phone}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
