import React, { useState, useEffect } from "react";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	
	const slides = [
		{
			video: "/hero/1 (2).mp4",
			title: "All Your Information in One Place",
			subtitle: "Simplify Management with a Unified Data Platform.",
			background: "bg-gradient-to-br from-blue-900/80 to-black/80"
		},
		{
			video: "/hero/2 (2).mp4",
			title: "Access Anytime, Anywhere",
			subtitle: "Empowering You with Data on Demand Across Devices.",
			background: "bg-gradient-to-br from-purple-900/80 to-black/80"
		},
		{
			video: "/hero/3 (2).mp4",
			title: "Lower Costs, Higher Value",
			subtitle: "Offering Premium Features at a Fraction of the Price.",
			background: "bg-gradient-to-br from-green-900/80 to-black/80"
		}
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000); // Change slide every 4 seconds

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<section id="home" className="relative isolate min-h-screen overflow-hidden">
			{/* Video Background */}
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === currentSlide ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="h-full w-full object-cover"
					>
						<source src={slide.video} type="video/mp4" />
					</video>
					<div className={`absolute inset-0 ${slide.background}`} />
				</div>
			))}

			{/* Animated Network Pattern Overlay */}
			<div className="absolute inset-0 z-10">
				<div className="relative h-full w-full">
					{/* Animated dots and connections */}
					<div className="absolute top-20 left-10 h-4 w-4 rounded-full bg-cyan-400 animate-pulse"></div>
					<div className="absolute top-40 right-20 h-3 w-3 rounded-full bg-blue-400 animate-bounce"></div>
					<div className="absolute bottom-40 left-20 h-5 w-5 rounded-full bg-green-400 animate-ping"></div>
					<div className="absolute bottom-20 right-10 h-3 w-3 rounded-full bg-purple-400 animate-pulse"></div>
					<div className="absolute top-60 left-1/3 h-4 w-4 rounded-full bg-cyan-300 animate-bounce"></div>
					<div className="absolute top-80 right-1/3 h-3 w-3 rounded-full bg-blue-300 animate-ping"></div>
					
					{/* Connection lines */}
					<svg className="absolute inset-0 h-full w-full">
						<defs>
							<linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
								<stop offset="100%" stopColor="rgba(16, 185, 129, 0.5)" />
							</linearGradient>
						</defs>
						<line x1="10%" y1="20%" x2="80%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.6" />
						<line x1="20%" y1="60%" x2="70%" y2="20%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.4" />
						<line x1="30%" y1="80%" x2="90%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" opacity="0.5" />
					</svg>

					{/* Floating icons */}
					<div className="absolute top-32 right-40 text-cyan-400 animate-float">
						<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
					</div>
					<div className="absolute bottom-60 left-40 text-blue-400 animate-float" style={{animationDelay: '1s'}}>
						<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
				<div className="space-y-6">
					<h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
						<span className="block transition-all duration-700 ease-in-out">
							{slides[currentSlide].title}
						</span>
					</h1>
					<p className="mx-auto max-w-3xl text-xl font-medium text-white/90 transition-all duration-700 ease-in-out md:text-2xl">
						{slides[currentSlide].subtitle}
					</p>
					<div className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:justify-center">
						<a 
							href="#demo" 
							className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
						>
							<span className="relative z-10">Book A Demo</span>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
						</a>
						<a 
							href="#learn-more" 
							className="group flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
						>
							Learn More
							<svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			{/* Slide Indicators */}
			<div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`h-3 w-3 rounded-full transition-all duration-300 ${
							index === currentSlide 
								? 'bg-white scale-125' 
								: 'bg-white/50 hover:bg-white/75'
						}`}
					/>
				))}
			</div>

			{/* Side Navigation Dots */}
			<div className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`h-4 w-4 rounded-full transition-all duration-300 ${
							index === currentSlide 
								? 'bg-red-500 scale-125' 
								: 'bg-white/70 hover:bg-white'
						}`}
					/>
				))}
			</div>
		</section>
	);
};

// Add custom CSS for floating animation
const style = document.createElement('style');
style.textContent = `
	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		33% { transform: translateY(-10px) rotate(3deg); }
		66% { transform: translateY(5px) rotate(-2deg); }
	}
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
`;
document.head.appendChild(style);

export default Hero;