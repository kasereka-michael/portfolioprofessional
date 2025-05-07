import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLanguage } from "react-icons/fa";

const About = () => {
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
  
  const infoBlocks = [
    {
      icon: <FaGraduationCap className="text-primary dark:text-primary" />,
      title: "Education",
      details: [
        "BSc in Computer Science",
        "Adventist University of Central Africa, 2025",
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-primary dark:text-primary" />,
      title: "Location",
      details: [
        "Uganda, Africa",
        "Available for remote work"
      ]
    },
    {
      icon: <FaCode className="text-primary dark:text-primary" />,
      title: "Interests",
      details: [
        "Web Development, System Administration",
        "Computer Networking, IT support",
      ]
    },
    {
      icon: <FaLanguage className="text-primary dark:text-primary" />,
      title: "Languages",
      details: [
        "English ((Conversational) & writing )",
        "French ((Conversational) & writing )",
        "Swahili (speaking & writing )"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="kasereka michael" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-3/5"
          >
            <h3 className="text-2xl font-bold mb-4">Backend developer & Problem Solver</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate professional software engineer with 2+ years of experience building web applications 
              and solving complex problems. My journey in tech started with a Computer Science degree, 
              and I've been hooked on creating elegant solutions ever since.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm specialized in back-end development with a focus on performance optimization and 
              scalability When I'm not coding, you can find me exploring new technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {infoBlocks.map((block, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">{block.icon}</span> {block.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 ml-6">
                    {block.details.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < block.details.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("#contact")} 
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("#projects")}
                className="border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 font-medium"
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
