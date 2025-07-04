export default function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<header>
				<nav className="bg-gray-800 text-white p-4">
					<p>Navbar Content for Products</p>
				</nav>
			</header>
			{children}
			<footer className="bg-gray-800 text-white p-4">
				<p>Footer Content for Products</p>
			</footer>
		</section>
	);
}
