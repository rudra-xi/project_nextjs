"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ href: "/login", label: "Login" },
	{ href: "/register", label: "Register" },
	{ href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [input, setInput] = useState("");
	const pathname = usePathname();
	return (
		<section>
			<header>
				<nav className="bg-gray-800 text-white p-4">
					<p>Navbar Content for Auth</p>

					{/* -------------------------<template.tsx>--------------------------- */}
					<div>
						<input
							className="border border-gray-300 p-2 rounded w-full"
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</div>
					{/* -------------------------<template.tsx>--------------------------- */}

					<div className="flex justify-center mt-6">
						{navLinks.map((link) => {
							const isActive =
								pathname === link.href ||
								(pathname.startsWith(link.href) &&
									link.href !== "/");
							return (
								<Link
									key={link.href}
									href={link.href}
									className={
										isActive
											? "text-pink-700 font-bold"
											: "text-white hover:text-red-500"
									}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</nav>
			</header>
			{children}
			<footer className="bg-gray-800 text-white p-4">
				<p>Footer Content for Auth</p>
			</footer>
		</section>
	);
}
