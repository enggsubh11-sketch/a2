import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
			isScrolled 
				? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
				: 'bg-transparent'
		}`}>
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
				{/* Logo Section */}
				<div className="flex items-center gap-3">
					<div className="relative">
						<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-1">
							<div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-600">
								<svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
									<path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM7 13l2.5-3 2 2 2.5-3L17 13H7z"/>
								</svg>
							</div>
						</div>
						<div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-400 to-red-600 opacity-30 blur"></div>
					</div>
					<div className="text-2xl font-black text-white tracking-tight">
						A2 Developers
					</div>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-8 lg:flex">
					{['Home', 'About Us', 'Product', 'Contact Us', 'Services'].map((item) => (
						<a 
							key={item}
							href={`#${item.toLowerCase().replace(' ', '-')}`} 
							className="group relative text-sm font-semibold text-white/90 transition-all duration-300 hover:text-white"
						>
							{item}
							<span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
						</a>
					))}
				</nav>

				{/* Contact Info */}
				<div className="hidden items-center gap-6 xl:flex">
					<div className="flex items-center gap-2 text-sm text-white/80">
						<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
						</svg>
						+91 83038 37930
					</div>
					<div className="flex items-center gap-2 text-sm text-white/80">
						<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
						contactus@a2developers.org
					</div>
				</div>

				{/* CTA Button */}
				<div className="flex items-center gap-4">
					<a 
						href="#demo" 
						className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
					>
						<span className="relative z-10 flex items-center gap-2">
							Book A Demo
							<svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
					</a>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 lg:hidden"
					>
						<span className={`h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
						<span className={`h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
						<span className={`h-0.5 w-5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`lg:hidden transition-all duration-300 overflow-hidden ${
				isMobileMenuOpen ? 'max-h-96 bg-black/95 backdrop-blur-md' : 'max-h-0'
			}`}>
				<nav className="flex flex-col gap-4 px-6 py-6">
					{['Home', 'About Us', 'Product', 'Contact Us', 'Services'].map((item) => (
						<a 
							key={item}
							href={`#${item.toLowerCase().replace(' ', '-')}`} 
							className="text-lg font-semibold text-white/90 transition-colors duration-300 hover:text-white"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{item}
						</a>
					))}
					<div className="mt-4 space-y-2 border-t border-white/10 pt-4">
						<div className="flex items-center gap-2 text-sm text-white/80">
							<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
							</svg>
							+91 83038 37930
						</div>
						<div className="flex items-center gap-2 text-sm text-white/80">
							<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
							</svg>
							contactus@a2developers.org
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;