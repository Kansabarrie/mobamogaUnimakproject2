'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		setError('');

		// Simulating authentication process
		if (email === 'user@example.com' && password === 'password123') {
			router.push('/dashboard');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center px-4 bg-cover bg-center bg-no-repeat bg-blend-overlay from-black/70 to-black/30 bg-[url('/images/mogalogo.png')]">
			<div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
				<h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>
				{error && <p className="mb-4 text-center text-red-500">{error}</p>}
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
					>
						Login
					</button>
				</form>
				<p className="mt-4 text-center text-sm text-gray-600">
					Don't have an account? <Link href="/auth/register" className="text-blue-500 hover:underline">Sign up</Link>
				</p>
			</div>
		</div>
	);
}

