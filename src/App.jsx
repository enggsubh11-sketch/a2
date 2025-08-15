import React, { useState } from "react";
import {
  Navbar,
  Hero,
  About,
  ContactForm,
  Product,
  Testimonials,
  WorkSteps,
  Values,
  Services,
  Footer
} from "./components";

export default function App() {
  // Add state to control contact form visibility
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Function to open the contact form
  const handleBookDemo = () => {
    setIsContactFormOpen(true);
  };

  // Function to close the contact form
  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Product />
      <Services />
      <About onBookDemo={handleBookDemo} />
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={handleCloseContactForm} 
      />
      <Testimonials/>
      <WorkSteps/>
      <Values />
      <Footer onBookDemo={handleBookDemo} />
    </div>
  );
}