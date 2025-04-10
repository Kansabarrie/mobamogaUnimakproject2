
export default function Services() {
	return (
		<div className="min-h-screen bg-gray-100 text-gray-900">

			<div className="max-w-4xl mx-auto py-12 px-6">
				<h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
				<p className="text-lg text-center mb-8">
					At StudySphere, we provide a range of services designed to enhance learning and mentorship experiences for students.
				</p>
				<div className="space-y-6">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-2xl font-semibold mb-4">1. Student Mentorship</h2>
						<p className="text-gray-700">
							We connect students with experienced mentors who can help them navigate difficult academic challenges and
							provide career guidance.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-2xl font-semibold mb-4">2. Online Study Groups</h2>
						<p className="text-gray-700">
							Join study groups where students collaborate, share knowledge, and prepare for exams together.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-2xl font-semibold mb-4">3. Resource Library</h2>
						<p className="text-gray-700">
							Access a collection of educational materials, including past exam papers, lecture notes, and video tutorials.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
