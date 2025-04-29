import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

type ProjectCategory = "all" | "react" | "node" | "python" | "java";

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  const categories: ProjectCategory[] = ["all", "react", "node", "python", "java"];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and personal projects. Each project represents my skills, 
            problem-solving approach, and attention to detail.
          </p>
        </motion.div>

        <motion.div 
          className="mb-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.2 + index * 0.07,
                ease: "easeOut" 
              }}
            >
              <Button
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`capitalize transition-all duration-300 ${
                  filter === category 
                    ? "font-medium shadow-md" 
                    : "hover:shadow-sm"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                className="aspect-video w-full overflow-hidden relative"
                whileHover="hover"
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                  variants={{
                    hover: { 
                      scale: 1.05,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                  variants={{
                    hover: { 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 text-white font-medium text-sm opacity-0 translate-y-4"
                  variants={{
                    hover: { 
                      opacity: 1,
                      translateY: 0,
                      transition: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View project details</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`text-xs font-medium px-2.5 py-0.5 rounded ${tech.colorClasses}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{project.description}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center"
                  >
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center"
                  >
                    <Button size="sm" className="gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;