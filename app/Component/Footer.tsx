import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-white py-6 mt-12">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<div className="flex justify-center space-x-6 mb-4">
					<Link href="/">
						<span className="hover:text-gray-400 cursor-pointer">Home</span>
					</Link>
					<Link href="/about">
						<span className="hover:text-gray-400 cursor-pointer">About</span>
					</Link>
					<Link href="/services">
						<span className="hover:text-gray-400 cursor-pointer">Services</span>
					</Link>
					<Link href="/contact">
						<span className="hover:text-gray-400 cursor-pointer">Contact</span>
					</Link>
				</div>
				<div className="flex justify-center space-x-4 mb-4">
					<a href="https://www.facebook.com/saidou.barrie.5" className="hover:text-gray-400">🔵 Facebook</a>
					<a href="#" className="hover:text-gray-400">🟣 Instagram</a>
					<a href="https://www.linkedin.com/in/chernor-saidu-barrie-6305b423b" className="hover:text-gray-400">🔷 LinkedIn</a>
				</div>
				<p className="text-sm">&copy; {new Date().getFullYear()} MobaMoga. All rights reserved.</p>
			</div>
		</footer>
	);
}
