import { FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import TypingEffect from "@/components/TypingEffect";
import { motion } from "framer-motion";

const Hero = () => {
  const specializations = [
    "Full Stack Development",
    "React.js",
    "Node.js",
    "Java Spring Boot",
    "Cloud Architecture"
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 lg:pt-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 flex flex-col items-start space-y-6"
        >
          <span className="text-sm font-semibold px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full">
            Software Engineer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-primary dark:text-primary">John Doe</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-xl">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Specialized in{" "}
            <TypingEffect
              texts={specializations}
              className="text-primary dark:text-primary font-medium"
            />
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download CV
            </Button>
          </div>
          <div className="flex items-center space-x-5 pt-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="John Doe" 
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 z-20 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg flex items-center">
              <span className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <button 
          onClick={() => scrollToSection("#about")} 
          className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <FaChevronDown className="text-2xl" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
