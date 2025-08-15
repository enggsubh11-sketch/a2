import React, { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		contactNumber: '',
		institutionName: '',
		requirements: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		// Reset form
		setFormData({
			name: '',
			email: '',
			contactNumber: '',
			institutionName: '',
			requirements: ''
		});
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 overflow-hidden">
			{/* Background Overlay */}
			<div 
				className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
				onClick={onClose}
			></div>

			{/* Form Container */}
			<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-in-out">
				<div className="flex h-full flex-col">
					{/* Header */}
					<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
						<h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
						<button
							onClick={onClose}
							className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
						>
							<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					{/* Content */}
					<div className="flex-1 overflow-y-auto px-6 py-6">
						<p className="text-gray-600 mb-6">
							Have questions about our Products? Fill out the form below to get a call with us.
						</p>

						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name Field */}
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
									Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Name"
									required
									className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
								/>
							</div>

							{/* Email Field */}
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Email <span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									required
									className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
								/>
							</div>

							{/* Contact Number Field */}
							<div>
								<label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
									Contact Number <span className="text-red-500">*</span>
								</label>
								<div className="flex">
									<div className="flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3">
										<span className="text-gray-700 text-sm">+91</span>
									</div>
									<input
										type="tel"
										id="contactNumber"
										name="contactNumber"
										value={formData.contactNumber}
										onChange={handleChange}
										placeholder="Contact Number"
										required
										className="w-full rounded-r-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
									/>
								</div>
							</div>

							{/* Institution Name Field */}
							<div>
								<label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
									Institution Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="institutionName"
									name="institutionName"
									value={formData.institutionName}
									onChange={handleChange}
									placeholder="Institution Name"
									required
									className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
								/>
							</div>

							{/* Requirements Field */}
							<div>
								<label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
									Requirements
								</label>
								<textarea
									id="requirements"
									name="requirements"
									value={formData.requirements}
									onChange={handleChange}
									placeholder="Requirements"
									rows={4}
									className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200 resize-none"
								/>
							</div>
							
							{/* Submit Button */}
							<button
								type="submit"
								className="w-full rounded-lg bg-[#6366f1] text-white py-3 px-4 font-semibold hover:bg-[#5855eb] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 transition-colors duration-200"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;