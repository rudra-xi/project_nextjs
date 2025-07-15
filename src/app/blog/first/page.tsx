import { redirect } from "next/navigation";

export default function FirstBlogPost() {
	redirect("/blog/second");
	return (
		<div>
			<h1 className="flex min-h-screen items-center justify-center bg-black text-white text-4xl font-bold">
				First Blog Post
			</h1>
		</div>
	);
}
