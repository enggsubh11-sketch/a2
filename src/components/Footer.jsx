import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#0f1629] text-white">
			<div className="mx-auto w-full max-w-7xl px-6 py-12">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
					{/* Company Info */}
					<div className="lg:col-span-1">
						<h3 className="text-2xl font-bold tracking-tight mb-4 text-white">A2 Developers</h3>
						<p className="text-sm leading-6 text-slate-300 mb-4">
							A2 Developers is the premier agency directory, awards platform, and media hub connecting brands 
							with top agencies in software, app development, design. We deliver vetted reviews, insights, and trends 
							to drive business growth.
						</p>
						<p className="text-xs text-slate-400">
							© A2 Developers {new Date().getFullYear()} - {String(new Date().getFullYear()).slice(2)}, All Rights Reserved
						</p>
					</div>

					{/* WHO WE ARE */}
					<div>
						<h4 className="text-base font-semibold text-white mb-4">WHO WE ARE</h4>
						<ul className="space-y-2 text-sm text-slate-300">
							<li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
							<li><a href="#product" className="hover:text-white transition-colors duration-300">Product</a></li>
							<li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
							<li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
						</ul>
					</div>

					{/* Modules */}
					<div>
						<h4 className="text-base font-semibold text-white mb-4">Modules</h4>
						<ul className="space-y-2 text-sm text-slate-300">
							<li>Student Management</li>
							<li>Fee Management</li>
							<li>Employee Management</li>
							<li>Certificate Management</li>
							<li>Transport Management</li>
							<li>Exam Management</li>
							<li>Report Management</li>
						</ul>
					</div>

					{/* Our Services */}
					<div className="relative">
						<h4 className="text-base font-semibold text-white mb-4">Our Services</h4>
						
						{/* Get in Touch Button - Positioned absolute top right */}
						<button className="absolute top-0 right-0 rounded-lg bg-[#4f7df3] px-4 py-2 text-xs font-semibold text-white hover:bg-[#3d6ae8] transition-colors duration-300">
							Get in Touch
						</button>
						
						<div className="grid grid-cols-2 gap-x-8">
							{/* Left Column - Services List */}
							<div>
								<ul className="space-y-2 text-sm text-slate-300">
									<li>School ERP</li>
									<li>Email Services</li>
									<li>Website Design</li>
									<li>Digital Marketing</li>
									<li>Domain & Hosting</li>
									<li>Wordpress Development</li>
									<li>E-commerce Development</li>
									<li>Android App Development</li>
									<li>Search Engine Optimization</li>
								</ul>
							</div>
							
							{/* Right Column - WhatsApp and Social Icons */}
							<div className="flex flex-col items-start justify-end">
								{/* WhatsApp */}
								<div className="flex items-center gap-2 mb-3">
									<div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
										<span className="text-white text-xs font-bold">W</span>
									</div>
									<span className="text-slate-300 text-sm">WhatsApp</span>
								</div>

								{/* Social Media Icons */}
								<div className="flex items-center gap-3">
									<a href="#" className="hover:scale-110 transition-transform duration-300">
										<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
											<span className="text-white text-xs font-bold">in</span>
										</div>
									</a>
									<a href="#" className="hover:scale-110 transition-transform duration-300">
										<div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
											<span className="text-white text-xs font-bold">f</span>
										</div>
									</a>
									<a href="#" className="hover:scale-110 transition-transform duration-300">
										<div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center">
											<span className="text-white text-xs font-bold">ig</span>
										</div>
									</a>
									<a href="#" className="hover:scale-110 transition-transform duration-300">
										<div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
											<span className="text-white text-xs font-bold">yt</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-8 border-t border-slate-700 pt-6">
					<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
						<a className="hover:text-white transition-colors duration-300" href="#">Sitemap</a>
						<a className="hover:text-white transition-colors duration-300" href="#">Privacy Policy</a>
						<a className="hover:text-white transition-colors duration-300" href="#">Cancellation and Refund Policy</a>
						<a className="hover:text-white transition-colors duration-300" href="#">Shipping and Delivery Policy</a>
						<a className="hover:text-white transition-colors duration-300" href="#">Terms & Condition</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;