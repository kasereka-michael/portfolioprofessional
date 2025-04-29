import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useIsMobile } from "@/hooks/use-mobile";

const TestimonialCard = ({ 
  content, 
  name, 
  position, 
  image, 
  accentColor 
}: { 
  content: string; 
  name: string; 
  position: string; 
  image: string; 
  accentColor: string;
}) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative">
    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 ${accentColor} rotate-45`}></div>
    <div className="text-gray-600 dark:text-gray-300 mb-6 relative">
      <svg 
        className="w-8 h-8 text-primary/20 dark:text-primary/20 absolute -top-2 -left-2" 
        fill="currentColor" 
        viewBox="0 0 32 32"
      >
        <path d="M10 8v10c0 2.2 1.8 4 4 4h10c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2h-6c-1.1 0-2-0.9-2-2v0c0-1.1 0.9-2 2-2h8v-4h-8c-2.2 0-4 1.8-4 4v0c0 1.1 0.9 2 2 2h6c1.1 0 2 0.9 2 2v4h-6c-1.1 0-2-0.9-2-2v-6h-4z M26 8v10c0 2.2 1.8 4 4 4h10c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2h-6c-1.1 0-2-0.9-2-2v0c0-1.1 0.9-2 2-2h8v-4h-8c-2.2 0-4 1.8-4 4v0c0 1.1 0.9 2 2 2h6c1.1 0 2 0.9 2 2v4h-6c-1.1 0-2-0.9-2-2v-6h-4z"></path>
      </svg>
      <p className="relative z-10 pt-4">
        {content}
      </p>
    </div>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className={`text-sm ${accentColor.includes('primary') ? 'text-primary dark:text-primary' : accentColor.includes('green') ? 'text-green-500 dark:text-green-400' : 'text-purple-500 dark:text-purple-400'}`}>
          {position}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const accentColors = [
    "bg-primary", 
    "bg-green-500", 
    "bg-purple-500"
  ];

  const nextTestimonial = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const displayedTestimonials = isMobile 
    ? [testimonials[currentIndex]] 
    : testimonials;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={isMobile ? currentIndex : index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <TestimonialCard 
                    content={testimonial.content}
                    name={testimonial.name}
                    position={testimonial.position}
                    image={testimonial.image}
                    accentColor={accentColors[index % accentColors.length]}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {isMobile && (
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary mr-4"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
