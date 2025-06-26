import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { orbitron, montserrat } from "@/data/font";

export const metadata: Metadata = {
	title: "Flickr_rr.",
	description: "An anonymous feedback application for the people.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<AuthProvider>
				<body
					className={[orbitron.variable, montserrat.className].join(" ")}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
					<Toaster />
				</body>
			</AuthProvider>
		</html>
	);
}
