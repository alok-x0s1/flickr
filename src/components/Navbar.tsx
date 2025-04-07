"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { FloatingNav } from "./floating-nav";
import { User } from "next-auth";
import Link from "next/link";
import {
	Github,
	Home,
	LogInIcon,
	LogOutIcon,
	SquareDashedKanban,
	User2,
} from "lucide-react";

const Navbar = () => {
	const { data: session } = useSession();
	const user: User = session?.user as User;

	const navbarItems = {
		isLoggedIn: !!session,
		username: user?.username || "",
	};

	return (
		<>
			<nav className="fixed top-4 right-4 z-50 border border-zinc-800 backdrop-blur px-5 py-3 rounded-full">
				<div className="flex gap-8 font-semibold">
					<Link
						href="/"
						className="hover:scale-110 duration-300 hover:text-blue-500"
					>
						<Home />
					</Link>

					{navbarItems.isLoggedIn && (
						<>
							<Link
								href="/dashboard"
								className="hover:scale-110 duration-300 hover:text-blue-500"
							>
								<SquareDashedKanban />
							</Link>

							<Link
								href="/profile"
								className="hover:scale-110 duration-300 hover:text-blue-500"
							>
								<User2 />
							</Link>

							<Link
								href="#"
								onClick={() => signOut()}
								className="hover:scale-110 duration-300 hover:text-blue-500"
							>
								<LogOutIcon />
							</Link>
						</>
					)}

					{!navbarItems.isLoggedIn && (
						<>
							<Link
								href="/sign-in"
								className="hover:scale-110 duration-300 hover:text-blue-500"
							>
								<LogInIcon />
							</Link>
						</>
					)}

					<Link
						href="https://github.com/alok-x0s1/Flickr"
						className="hover:scale-110 duration-300 hover:text-blue-500"
					>
						<Github />
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
