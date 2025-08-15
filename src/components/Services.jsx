import React, { useState } from "react";

const Services = () => {
	const [expandedService, setExpandedService] = useState(null);

	const services = [
		{
			id: 1,
			icon: "🏫",
			title: "School ERP",
			description: "Comprehensive school management system with student data, attendance tracking, grade management, and parent communication features.",
			details: [
				"Student enrollment and data management",
				"Attendance tracking and reporting",
				"Grade management and report cards",
				"Parent-teacher communication portal",
				"Fee management and billing",
				"Timetable and scheduling"
			],
			color: "from-blue-500 to-blue-600"
		},
		{
			id: 2,
			icon: "🔍",
			title: "SEO (Search Engine Optimization)",
			description: "Boost your online visibility with our comprehensive SEO strategies tailored to drive organic traffic and improve search rankings.",
			details: [
				"Keyword research and analysis",
				"On-page SEO optimization",
				"Technical SEO audits",
				"Content strategy and optimization",
				"Link building campaigns",
				"Local SEO for businesses"
			],
			color: "from-green-500 to-green-600"
		},
		{
			id: 3,
			icon: "🌐",
			title: "Website Design & Development",
			description: "Create stunning, responsive websites that engage users and drive conversions with modern design principles and latest technologies.",
			details: [
				"Responsive web design",
				"Custom web development",
				"E-commerce solutions",
				"CMS integration",
				"Performance optimization",
				"Cross-browser compatibility"
			],
			color: "from-purple-500 to-purple-600"
		},
		{
			id: 4,
			icon: "🛒",
			title: "E-commerce Development",
			description: "Build powerful online stores with secure payment gateways, inventory management, and user-friendly shopping experiences.",
			details: [
				"Custom e-commerce platforms",
				"Payment gateway integration",
				"Inventory management systems",
				"Order tracking and management",
				"Multi-vendor marketplace",
				"Mobile-responsive design"
			],
			color: "from-orange-500 to-orange-600"
		},
		{
			id: 5,
			icon: "📱",
			title: "WordPress Development",
			description: "Custom WordPress solutions including theme development, plugin creation, and performance optimization for scalable websites.",
			details: [
				"Custom theme development",
				"Plugin development and customization",
				"WordPress optimization",
				"Content management training",
				"Security implementation",
				"Migration and maintenance"
			],
			color: "from-indigo-500 to-indigo-600"
		},
		{
			id: 6,
			icon: "📲",
			title: "Android App Development",
			description: "Native Android applications with intuitive user interfaces, robust functionality, and seamless performance across devices.",
			details: [
				"Native Android development",
				"UI/UX design for mobile",
				"API integration",
				"App store optimization",
				"Performance testing",
				"Maintenance and updates"
			],
			color: "from-teal-500 to-teal-600"
		},
		{
			id: 7,
			icon: "📈",
			title: "Digital Marketing",
			description: "Comprehensive digital marketing strategies including social media marketing, PPC campaigns, and content marketing to grow your business.",
			details: [
				"Social media marketing",
				"Google Ads and PPC campaigns",
				"Content marketing strategy",
				"Email marketing automation",
				"Analytics and reporting",
				"Brand reputation management"
			],
			color: "from-pink-500 to-pink-600"
		},
		{
			id: 8,
			icon: "💻",
			title: "Software & System Development",
			description: "Custom software solutions tailored to your business needs with scalable architecture and modern development practices.",
			details: [
				"Custom software development",
				"System integration",
				"Database design and optimization",
				"API development",
				"Cloud-based solutions",
				"Legacy system modernization"
			],
			color: "from-red-500 to-red-600"
		},
		{
  id: 9,
  icon: "📱",
  title: "Web & Mobile Application Development",
  description: "Custom-built web and mobile apps with intuitive design and smooth performance for all platforms.",
  details: [
    "Cross-platform mobile apps (iOS & Android)",
    "Progressive Web Apps (PWAs)",
    "Responsive web applications",
    "E-commerce solutions",
    "UI/UX design and prototyping",
    "Ongoing support and maintenance"
  ],
  color: "from-indigo-500 to-indigo-600"
},
{
  id: 10,
  icon: "🌍",
  title: "Domain & Hosting",
  description: "Reliable domain registration and high-performance hosting solutions with 24/7 technical support.",
  details: [
    "Domain name registration",
    "Web hosting services",
    "SSL certificate setup",
    "Email hosting",
    "Server monitoring",
    "Data backups & recovery"
  ],
  color: "from-yellow-500 to-yellow-600"
},
{
  id: 11,
  icon: "🛠️",
  title: "Social Media & Website Management",
  description: "Professional management of social media accounts and websites to enhance your online presence.",
  details: [
    "Content creation & scheduling",
    "Social media strategy",
    "Website updates & maintenance",
    "SEO optimization",
    "Analytics & reporting",
    "Brand consistency across platforms"
  ],
  color: "from-pink-500 to-pink-600"
},
{
  id: 12,
  icon: "📧",
  title: "Email Services",
  description: "Secure and reliable email solutions for personal and business communication.",
  details: [
    "Custom email addresses",
    "Business email hosting",
    "Spam and malware protection",
    "Email migration services",
    "Cloud-based email solutions",
    "24/7 technical support"
  ],
  color: "from-blue-500 to-blue-600"
}

	];

	const toggleService = (serviceId) => {
		setExpandedService(expandedService === serviceId ? null : serviceId);
	};

	return (
		<section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-black text-gray-900 mb-6 lg:text-5xl">
						Services we offer
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
						We offer a full spectrum of digital services tailored to help your business grow and operate more efficiently-from 
						custom ERP platforms and performance-driven websites to strategic SEO and feature-rich Android apps.
					</p>
				</div>

				{/* Services Grid */}
				<div className="space-y-4">
					{services.map((service) => (
						<div
							key={service.id}
							className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
						>
							{/* Main Service Card */}
							<div
								className="flex items-center justify-between p-6 cursor-pointer"
								onClick={() => toggleService(service.id)}
							>
								<div className="flex items-center gap-4">
									<div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${service.color} text-white text-2xl shadow-lg`}>
										{service.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
											{service.title}
										</h3>
									</div>
								</div>
								
								<div className="flex items-center gap-4">
									<svg 
										className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
											expandedService === service.id ? 'rotate-180' : ''
										}`} 
										fill="none" 
										stroke="currentColor" 
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</div>

							{/* Expanded Content */}
							<div className={`overflow-hidden transition-all duration-500 ${
								expandedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
							}`}>
								<div className="px-6 pb-6">
									<div className="ml-18 space-y-4">
										<p className="text-gray-600 leading-relaxed">
											{service.description}
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
											{service.details.map((detail, index) => (
												<div key={index} className="flex items-center gap-2">
													<div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
													<span className="text-sm text-gray-700">{detail}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Hover Effect Overlay */}
							<div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;