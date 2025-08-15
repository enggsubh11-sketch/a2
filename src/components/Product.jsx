import React from "react";

const Product = () => {
	const features = [
		{
			id: 1,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6L7 6.5V7.5C7 8.1 6.6 8.5 6 8.5S5 8.1 5 7.5V6.5L3 7V9H21ZM12 9C10.9 9 10 9.9 10 11V22H14V11C14 9.9 13.1 9 12 9Z"/>
				</svg>
			),
			title: "Student Data Management",
			description: "Manage balance fees, fines, fee defaulters, and class/students-wise dues, extra income, and ledger with 10+ filters using the Student Data Management system.",
			color: "from-blue-500 to-blue-600",
			bgColor: "bg-blue-50",
			iconColor: "text-blue-600"
		},
		{
			id: 2,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM11 7H13C13.6 7 14 7.4 14 8V22H12V15H10V22H8V8C8 7.4 8.4 7 9 7H11Z"/>
				</svg>
			),
			title: "Fee Management",
			description: "The Fee Management system helps collect fees from specific students or parents anytime, ensuring smooth fee collection processes.",
			color: "from-green-500 to-green-600",
			bgColor: "bg-green-50",
			iconColor: "text-green-600"
		},
		{
			id: 3,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
				</svg>
			),
			title: "Certificate Management",
			description: "The Certificate Management system allows you to view schedules, reports, activities, and class timings of every teacher, and assign permissions based on roles.",
			color: "from-purple-500 to-purple-600",
			bgColor: "bg-purple-50",
			iconColor: "text-purple-600"
		},
		{
			id: 4,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
				</svg>
			),
			title: "Transport Management",
			description: "Send unlimited push notifications to all students or specific classes through the Transport Management system, along with the lowest-cost SMS services on demand.",
			color: "from-orange-500 to-orange-600",
			bgColor: "bg-orange-50",
			iconColor: "text-orange-600"
		},
		{
			id: 5,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
				</svg>
			),
			title: "Exam Management",
			description: "The Exam Management system enables the generation of dynamic marksheets, offering over 100+ customizable options to fit your institution's requirements.",
			color: "from-indigo-500 to-indigo-600",
			bgColor: "bg-indigo-50",
			iconColor: "text-indigo-600"
		},
		{
			id: 6,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6L7 6.5V7.5C7 8.1 6.6 8.5 6 8.5S5 8.1 5 7.5V6.5L3 7V9H21Z"/>
				</svg>
			),
			title: "Report Card Management",
			description: "Our Report Card Management system uses advanced technologies like fingerprint, face recognition, and RFID cards to ensure efficient and cloud-based biometric attendance tracking.",
			color: "from-teal-500 to-teal-600",
			bgColor: "bg-teal-50",
			iconColor: "text-teal-600"
		},
		{
			id: 7,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
				</svg>
			),
			title: "Multi-User Access Control",
			description: "Enable secure and flexible access to the exam system for admins, teachers, and students with customized user roles and permissions, ensuring a seamless workflow across all user types.",
			color: "from-cyan-500 to-cyan-600",
			bgColor: "bg-cyan-50",
			iconColor: "text-cyan-600"
		},
		{
			id: 8,
			icon: (
				<svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M5,19V5H19V19H5M17,17H7V15H17V17M17,13H7V11H17V13M17,9H7V7H17V9Z"/>
				</svg>
			),
			title: "Homework",
			description: "Easily manage homework assignments and track attendance using advanced tech like biometric scanners, face recognition, and RFID cards, all integrated with cloud-based systems.",
			color: "from-pink-500 to-pink-600",
			bgColor: "bg-pink-50",
			iconColor: "text-pink-600"
		}
	];

	return (
		<section id="product" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
				<div className="absolute bottom-40 right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
				<div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
			</div>

			<div className="relative mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-black text-gray-900 mb-4 lg:text-5xl">
						Product <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vidyamint</span> for every Learning need
					</h2>
					
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={feature.id}
							className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
							style={{
								animationDelay: `${index * 0.1}s`
							}}
						>
							{/* Background Gradient */}
							<div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
							
							{/* Icon */}
							<div className={`relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor} ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
								{feature.icon}
							</div>

							{/* Content */}
							<div className="relative z-10">
								<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed text-sm mb-6">
									{feature.description}
								</p>
							</div>

							{/* Hover Border Effect */}
							<div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${feature.color} transition-all duration-300`}></div>
							
							{/* Corner Accent */}
							<div className={`absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Product;