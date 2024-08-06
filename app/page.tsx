export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-100">
			<header className="w-full py-4 bg-blue-600 text-white text-center">
				<h1 className="text-3xl font-bold">Welcome to the Next.js 14 Boilerplate</h1>
			</header>
			<section className="flex flex-col items-center justify-center flex-1 text-center">
				<p className="text-xl mb-4">
					This is a Next.js 14, Shadcn UI, Biome, and Lefthook boilerplate.
				</p>
			</section>
			<footer className="w-full py-4 bg-blue-600 text-white text-center">
				<p>&copy; {new Date().getFullYear()} Arnav Sharma. All rights reserved.</p>
			</footer>
		</main>
	);
}
