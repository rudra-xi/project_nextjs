"use client";

import { useState, useEffect } from "react";

type User = {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
};

export default function UsersClient() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchUser() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch users");
				}
				const data = await response.json();
				setUser(data);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError("An unknown error occurred");
				}
			} finally {
				setLoading(false);
			}
		}
		fetchUser();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Users Client</h1>

			<ul className="mt-6 space-y-4 flex flex-row gap-10 text-balance flex-wrap justify-center">
				{user.map((user) => (
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
