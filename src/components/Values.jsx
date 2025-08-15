import React, { useState } from "react";

const Values = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	const values = [
		{
			id: 1,
			icon: "/value/better.svg",
			title: "Better ourselves, every day",
			description: "We are driven by a strong determination to surpass our own limits and continuously improve. Our focus is on enhancing our performance in every aspect, striving for excellence with each step.",
			borderColor: "border-green-400",
			hoverBg: "hover:bg-green-50",
			iconBg: "bg-green-100"
		},
		{
			id: 2,
			icon: "/value/owner.svg",
			title: "Be an owner",
			description: "We take full ownership of our actions and decisions, ensuring accountability in everything we do. By effectively delegating responsibilities, we foster teamwork and efficiency, creating a culture of trust and reliability.",
			borderColor: "border-purple-400",
			hoverBg: "hover:bg-purple-50",
			iconBg: "bg-purple-100"
		},
		{
			id: 3,
			icon: "/value/respect.svg",
			title: "Respect everyone",
			description: "We deeply value our people and customers, treating everyone with the utmost respect and appreciation. Our commitment to fostering strong relationships is at the heart of everything we do.",
			borderColor: "border-pink-400",
			hoverBg: "hover:bg-pink-50",
			iconBg: "bg-pink-100"
		},
		{
			id: 4,
			icon: "/value/customer.svg",
			title: "Customer obsession",
			description: "We prioritize our users' happiness, knowing that their satisfaction drives our success. When our users thrive, everything else naturally falls into place, creating a strong foundation for growth.",
			borderColor: "border-orange-400",
			hoverBg: "hover:bg-orange-50",
			iconBg: "bg-orange-100"
		},
		{
			id: 5,
			icon: "/value/right.webp",
			title: "Do the right thing",
			description: "We are committed to making ethical decisions and upholding integrity in all our actions. By staying true to our values, we build trust and foster a culture of honesty and responsibility.",
			borderColor: "border-teal-400",
			hoverBg: "hover:bg-teal-50",
			iconBg: "bg-teal-100"
		},
		{
			id: 6,
			icon: "/value/transpency.svg",
			title: "Transparency",
			description: "We believe in open, honest, and transparent communication in everything we do. By being straightforward, we foster trust, clarity, and strong relationships with everyone we interact with.",
			borderColor: "border-yellow-400",
			hoverBg: "hover:bg-yellow-50",
			iconBg: "bg-yellow-100"
		}
	];

	return (
		<section id="values" className="py-20 bg-gradient-to-br from-gray-50 to-white">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl font-black text-gray-900 mb-6 lg:text-5xl">
						VALUE THAT DEFINES US
					</h2>
					<p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
						At A2 Developers, we believe that people move the world forward and deserve the best 
						technology in this pursuit.
					</p>
				</div>

				{/* Values Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{values.map((value) => (
						<div
							key={value.id}
							className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-2 ${
								hoveredCard === value.id ? value.borderColor : 'border-gray-200'
							} ${value.hoverBg}`}
							onMouseEnter={() => setHoveredCard(value.id)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							{/* Icon */}
							<div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${value.iconBg} transition-transform duration-300 group-hover:scale-110`}>
								<img 
									src={value.icon} 
									alt={value.title}
									className="h-10 w-10 object-contain"
								/>
							</div>

							{/* Content */}
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
									{value.title}
								</h3>
								<p className="text-gray-600 leading-relaxed text-sm">
									{value.description}
								</p>
							</div>

							{/* Hover Border Effect */}
							<div className={`absolute inset-0 rounded-2xl border-2 ${value.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
							
							{/* Corner Accent */}
							<div className={`absolute top-0 right-0 h-20 w-20 ${value.borderColor.replace('border-', 'bg-').replace('-400', '-200')} opacity-0 group-hover:opacity-30 rounded-bl-full transition-opacity duration-500`}></div>

							{/* Glow Effect */}
							<div className={`absolute -inset-1 rounded-2xl ${value.borderColor.replace('border-', 'bg-')} opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Values;