export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<header>
				<nav className="bg-gray-800 text-white p-4">
					<p>Navbar Content for Auth</p>
				</nav>
			</header>
			{children}
			<footer className="bg-gray-800 text-white p-4">
				<p>Footer Content for Auth</p>
			</footer>
		</section>
	);
}
