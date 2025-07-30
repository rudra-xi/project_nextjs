import { Suspense } from "react";
import Author from "./author";

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export default async function PostSequential() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts: Post[] = await response.json();

	const filteredPosts = posts.filter((post) => post.id % 10 === 1);
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">Post Sequential</h1>
			<div className="mt-6 space-y-4 flex flex-row items-center flex-wrap justify-center gap-10">
				{filteredPosts.map((post) => (
					<div
						key={post.id}
						className="mt-4 w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg"
					>
						<h2 className="text-3xl font-semibold ">
							{post.title}
						</h2>
						<p className="text-white">{post.body}</p>
						<Suspense fallback={<div>Loading author...</div>}>
							<Author userId={post.userId} />
						</Suspense>
					</div>
				))}
			</div>
		</div>
	);
}
