import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
	return (
		<header className="bg-blue-900 text-white py-4 shadow-md">
			<div className="container mx-auto flex justify-between float-left px-20">
				{/* Logo and Title */}
				<div className="flex items-left">
					<Image src="/images/mogalogo.png" alt="MOBA MOGA Logo" width={50} height={50} className="mr-3" />
					<h1 className="text-2xl font-bold">MOBA MOGA UNIMAK</h1>
				</div>

				{/* Navigation Menu */}
				<nav className="flex space-x-6 float-right px-0">
					<Link href="/" className="hover:underline">Home</Link>
					<Link href="/about" className="hover:underline">About</Link>
					<Link href="/projects" className="hover:underline">Our Projects</Link>
					<Link href="/services" className="hover:underline">Services</Link>
					<Link href="/contact" className="hover:underline">Contact Us</Link>
					<Link href="/auth/login" className="hover:underline">Login</Link>
					<Link href="/auth/register" className="hover:underline">Register</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
