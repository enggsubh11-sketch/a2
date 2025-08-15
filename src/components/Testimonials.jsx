import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Binod Kumar Mishra",
      title: "Principal",
      school: "Raj English School",
      image: "/testinomial/binod.avif",
      quote: "With real-time data sync and insights across stakeholders, the connected classroom environment ensures timely interventions to improve the learning outcomes of students."
    },
    {
      id: 2,
      name: "Mr. Mohammad Aamir",
      title: "Principal",
      school: "Harihar Singh Academy",
      image: "/testinomial/aamir.png",
      quote: "A2 Developers has revolutionized the way we handle classroom management and communication."
    },
    {
      id: 3,
      name: "Mr. Vivek Yadav",
      title: "Director",
      school: "Little Heaven English School",
      image: "/testinomial/vivek.png",
      quote: "A2 Developers has streamlined our school operations, making it easier to manage student data, generate reports, and improve communication. Highly recommended for any school looking to simplify management tasks!"
    },
    {
      id: 4,
      name: "Mrs. Premlata",
      title: "Vice Principal",
      school: "J.S.S. Public School",
      image: "/testinomial/premLata.png",
      quote: "A2 Developers transformed our online presence with a sleek website and effective SEO strategies. Their team made the entire process seamless, and we saw noticeable improvements in traffic and engagement."
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          {/* Doodle Elements */}
          <path d="M100 100 Q150 50 200 100 T300 100" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <circle cx="80" cy="150" r="30" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M50 200 L80 170 L110 200 L80 230 Z" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M150 250 Q180 220 210 250 Q240 280 270 250" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          
          {/* Right side doodles */}
          <circle cx="1050" cy="120" r="25" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M1100 80 L1130 110 L1160 80 L1130 50 Z" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M1000 200 Q1030 170 1060 200 T1120 200" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          
          {/* Bottom doodles */}
          <circle cx="200" cy="450" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M300 480 L320 460 L340 480 L320 500 Z" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M950 450 Q980 420 1010 450 Q1040 480 1070 450" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          
          {/* Additional elements */}
          <rect x="120" y="350" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M1080 300 L1100 280 L1120 300 L1100 320 Z" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          
          {/* Musical notes */}
          <circle cx="1150" cy="200" r="8" fill="currentColor" className="text-gray-800" />
          <path d="M1158 200 L1158 160 Q1165 155 1170 160 L1170 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-800" />
          
          {/* Hearts */}
          <path d="M80 400 C80 390 90 385 95 390 C100 385 110 390 110 400 C110 410 95 420 95 420 C95 420 80 410 80 400 Z" fill="currentColor" className="text-gray-800" />
          
          {/* Stars */}
          <path d="M150 80 L155 90 L165 90 L157 97 L160 107 L150 100 L140 107 L143 97 L135 90 L145 90 Z" fill="currentColor" className="text-gray-800" />
          <path d="M1050 350 L1055 360 L1065 360 L1057 367 L1060 377 L1050 370 L1040 377 L1043 367 L1035 360 L1045 360 Z" fill="currentColor" className="text-gray-800" />
          
          {/* Cloud shapes */}
          <path d="M50 50 Q40 40 50 30 Q65 25 75 35 Q85 25 95 35 Q105 30 100 45 Q95 55 85 50 Q75 55 65 50 Q55 55 50 50 Z" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
          <path d="M1100 450 Q1090 440 1100 430 Q1115 425 1125 435 Q1135 425 1145 435 Q1155 430 1150 445 Q1145 455 1135 450 Q1125 455 1115 450 Q1105 455 1100 450 Z" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-800" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 lg:text-5xl">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            {/* Quote */}
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-1 shadow-lg">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e2e8f0'/%3E%3Ccircle cx='50' cy='40' r='15' fill='%23cbd5e1'/%3E%3Cpath d='M25 80 Q25 65 35 65 L65 65 Q75 65 75 80' fill='%23cbd5e1'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].title}
                    </h4>
                    <p className="text-blue-100 text-lg">
                      {testimonials[currentTestimonial].school}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-4 right-4 text-6xl opacity-20">
              "
            </div>
          </div>


        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentTestimonial === index
                  ? 'bg-blue-600'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;