import {
	Kanit,
	Rubik,
	Lobster,
	Baskervville,
	Orbitron,
	Montserrat
} from "next/font/google";

export const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const rubik = Rubik({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const orbitron = Orbitron({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-orbitron",
});

export const lobster = Lobster({
	weight: ["400"],
	subsets: ["latin"],
});

export const baskervville = Baskervville({
	weight: ["400"],
	subsets: ["latin"],
});

export const kanit = Kanit({
	weight: ["400"],
	subsets: ["latin"],
});
