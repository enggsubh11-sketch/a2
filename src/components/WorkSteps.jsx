import React from "react";

const WorkSteps = () => {
  const steps = [
    {
      id: 1,
      number: "1",
      title: "ANALYSIS",
      description: "Our Team will have a detailed understanding about your Business after having a Face to Face Meeting / google meet. We will also understand your website design requirements clearly before proceeding.",
      image: "/workStep/step1.svg",
      position: "right"
    },
    {
      id: 2,
      number: "2", 
      title: "Ideas",
      description: "Based on the discussion you had with our Team, our designers will provide you with the list of generic designs to understand more about your website requirement. This will help us to understand effectively.",
      image: "/workStep/step2.svg",
      position: "left"
    },
    {
      id: 3,
      number: "3",
      title: "DEVELOPMENT", 
      description: "Upon confirmation of the sample designs that we have shared by our designers as well as the additional ideas & contents provided by the client, we will start working on the complete website development.",
      image: "/workStep/step3.svg",
      position: "right"
    },
    {
      id: 4,
      number: "4",
      title: "DELIGHT",
      description: "We will deliver the site as promised by our Team in a much effective way as per our promised deadline. We will make any necessary changes (if required) and deliver the complete website to you.",
      image: "/workStep/step4.svg", 
      position: "left"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-6 lg:text-5xl">
            WE WORK PRECISELY ON EVERY STEP
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Step Number */}
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Image */}
                    <div className="w-64 h-48 flex items-center justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23e2e8f0'/%3E%3Ctext x='100' y='75' text-anchor='middle' fill='%23cbd5e1' font-size='14'%3EStep " + step.number + "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="max-w-md">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  {step.position === "right" ? (
                    // Right side layout
                    <div className="flex items-center">
                      {/* Left side - Image */}
                      <div className="w-1/2 pr-16 flex justify-end">
                        <div className="w-80 h-64 flex items-center justify-center">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e2e8f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%23cbd5e1' font-size='16'%3EStep " + step.number + "%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      </div>

                      {/* Center - Timeline dot and number */}
                      <div className="relative flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold shadow-lg z-10 relative">
                          {step.number}
                        </div>
                        {/* Large number background */}
                        <div className="absolute -top-8 text-8xl font-black text-gray-100 z-0">
                          {step.number}
                        </div>
                      </div>

                      {/* Right side - Content */}
                      <div className="w-1/2 pl-16">
                        <div className="max-w-md">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Left side layout
                    <div className="flex items-center">
                      {/* Left side - Content */}
                      <div className="w-1/2 pr-16 flex justify-end">
                        <div className="max-w-md text-right">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Center - Timeline dot and number */}
                      <div className="relative flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-2xl font-bold shadow-lg z-10 relative">
                          {step.number}
                        </div>
                        {/* Large number background */}
                        <div className="absolute -top-8 text-8xl font-black text-gray-100 z-0">
                          {step.number}
                        </div>
                      </div>

                      {/* Right side - Image */}
                      <div className="w-1/2 pl-16">
                        <div className="w-80 h-64 flex items-center justify-center">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e2e8f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%23cbd5e1' font-size='16'%3EStep " + step.number + "%3C/text%3E%3C/svg%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;