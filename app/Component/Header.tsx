import * as url from "node:url";

const Header = () => {
	return (
		<header className="bg-blue-900 text-white py-4">
			<div className="container mx-auto flex justify-between items-center">
				{/*{*/}
				{/*	url:"images/mogalogo.png",*/}
				{/*	title:*/}

				{/*}*/}

				<h1 className="text-2xl font-bold">MOBA MOGA UNIMAK</h1>
				<nav>
					<a href="/" className="px-4">Home</a>
					<a href="/About us" className="px-4">Shop</a>
					<a href="/Projects" className="px-4">Our Project</a>
					<a href="/Service" className="px-4">Service</a>
					<a href="/Contact" className="px-4">Contact Us</a>
					<a href="/auth/login" className="px-4">Login</a>
					<a href="/auth/register" className="px-4">Register</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
