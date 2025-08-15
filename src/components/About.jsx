import React from "react";

const About = ({ onBookDemo }) => {
	return (
		<section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left Side - Image */}
					<div className="relative">
						<div className="relative z-10">
							<img 
								src="/demoImage.svg" 
								alt="Educational Management" 
								className="w-full h-auto max-w-lg mx-auto"
							/>
						</div>
						{/* Background Elements */}
						<div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-blue-200/30 blur-xl animate-pulse"></div>
						<div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-purple-200/30 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
						<div className="absolute top-1/2 left-0 h-12 w-12 rounded-full bg-green-200/30 blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
					</div>

					{/* Right Side - Content */}
					<div className="space-y-8">
						<div>
							<h2 className="text-4xl font-black text-gray-900 mb-6 lg:text-5xl leading-tight">
								User in a new era of{" "}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									Educational Management
								</span>
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								Eliminate errors and inefficiencies with an advanced ERP system designed 
								for education. Streamline operations, automate tasks, and enhance 
								productivity effortlessly. Say goodbye to manual hassles and embrace a 
								smarter, faster way to manage your institution!
							</p>
						</div>

						{/* CTA Button */}
						<div>
							<button 
								onClick={onBookDemo}
								className="group inline-flex items-center gap-3 bg-[#4f7df3] hover:bg-[#3d6ae8] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
							>
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
								Book a Free Demo
								<svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;