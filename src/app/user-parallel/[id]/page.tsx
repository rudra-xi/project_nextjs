type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type Album = {
	userId: number;
	id: number;
	title: string;
};

async function fetchPosts(userId: string) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);
	return response.json();
}

async function fetchAlbums(userId: string) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/albums?userId=${userId}`
	);
	return response.json();
}

export default async function ParallelUser({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;

	const postsData = fetchPosts(id);
	const albumsData = fetchAlbums(id);

	const [posts, albums] = await Promise.all([postsData, albumsData]);

	return (
		<div className="flex flex-row min-h-screen justify-center bg-black gap-10 text-white">
			<div className="mt-6 space-y-4 flex flex-col flex-wrap gap-10">
				<h1 className="text-4xl font-bold">Parallel Post</h1>
				{posts.map((post: Post) => (
					<div
						key={post.id}
						className="mt-4 w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg"
					>
						<h2 className="text-3xl font-semibold ">
							{post.title}
						</h2>
						<p className="text-white">{post.body}</p>
					</div>
				))}
			</div>
			<div className="mt-6 space-y-4 flex flex-col flex-wrap gap-10">
				<h1 className="text-4xl font-bold">Parallel Album</h1>
				{albums.map((album: Album) => (
					<div
						key={album.id}
						className="mt-4 w-full max-w-md p-4 bg-gray-700 rounded-lg shadow-lg"
					>
						<h2 className="text-3xl font-semibold ">
							{album.title}
						</h2>
					</div>
				))}
			</div>
		</div>
	);
}
