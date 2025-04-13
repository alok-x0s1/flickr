import { FeaturesSection } from "@/components/FeaturedSection";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

const words = [
	{
		text: "Anonymous",
	},
	{
		text: "Messaging",
	},
	{
		text: "Made",
	},
	{
		text: "Simple",
	},
	{
		text: "With",
	},
	{
		text: "Flickr.",
		className: "text-blue-500 dark:text-blue-500",
	},
];

const Home = () => {
	return (
		<main className="flex min-h-screen justify-start items-center flex-col">
			<div className="flex flex-col justify-center items-center px-4 py-20 w-full">
				<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center font-orbitron">
					Flickr_rr...
				</h1>

				<div className="mt-4 w-full max-w-3xl px-2 sm:px-6 text-center">
					<TypewriterEffectSmooth
						words={words}
						className="text-sm sm:text-base md:text-lg lg:text-xl"
					/>
				</div>

				<p className="max-w-4xl text-xs sm:text-sm md:text-base text-start md:text-center mt-2 mb-8 px-2 sm:px-6">
					We believe in the power of private and meaningful
					conversations. Whether you’re looking to share your
					thoughts, seek feedback, or just connect with others without
					revealing your identity, our platform is designed to provide
					a secure and user-friendly space for anonymous interactions.
				</p>

				<div className="flex flex-col md:flex-row items-center gap-4">
					<Link href="/sign-in">
						<Button>Join now</Button>
					</Link>
				</div>
			</div>

			<div className="p-4 md:p-8">
				<h2 className="md:text-5xl text-3xl lg:text-6xl font-bold text-start font-orbitron">
					Featured section
				</h2>
				<FeaturesSection />
			</div>
		</main>
	);
};

export default Home;
