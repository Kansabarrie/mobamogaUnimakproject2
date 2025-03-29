
// components/Banner.tsx
"use client";

import { useState, useEffect } from "react";

// Array of images with titles and descriptions
const images = [
	{
		url: "images/mobamoga1.jpg",
		title: "Meet Moba Moga Unimak",
		description: "This is a cross section of Magburaka Old Boys and Mathora Old Girls Association executive and members !"
	},
	{
		url: "images/mssb1.jpg",
		title: "Former students of MSSB",
		description: ""
	},
	{
		url: "images/mssg1.jpg",
		title: "Girls Students from Mathora",
		description: ""
	},
	{
		url: "images/mssb2.jpg",
		title: "Government Secondary School for Boys Magburaka",
		description: "The lower boding home for government Secondary School for Boys Magbura"
	},
	{
		url: "images/gssg2.jpg",
		title: ""
	},
	{
		url: "images/mssb3.jpg",
		title: ""
	}
];


const Banner = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Automatically change the image every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000); // 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative overflow-hidden w-full h-[700px]"> {/* Increased height to 600px */}
			<div
				className="flex transition-transform duration-1000"
				style={{
					transform: `translateX(-${currentIndex * 100}%)`
				}}
			>
				{images.map((image, index) => (
					<div
						key={index}
						className="w-full flex-shrink-0 h-[900px] bg-cover bg-center relative" // Increased height to 600px
						style={{ backgroundImage: `url(${image.url})` }}
					>
						{/* Overlay with Title and Description */}
						<div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white p-4">
							<h1 className="text-4xl font-bold mb-2">{image.title}</h1>
							<p className="text-lg text-center">{image.description}</p>
						</div>
					</div>
				))}
			</div>
			{/* Navigation Dots */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full ${
							currentIndex === index ? "bg-red-900" : "bg-blue-900"
						}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Banner;