import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { portfolioData } from "@/data/portfolio";

const SkillCategory = ({ 
  title, 
  icon, 
  skills, 
  colorClass 
}: { 
  title: string; 
  icon: JSX.Element; 
  skills: { name: string; level: number }[]; 
  colorClass: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105"
  >
    <div className="text-center mb-6">
      <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClass} rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    
    {skills.map((skill, index) => (
      <div key={index} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
        </div>
        <Progress value={skill.level} className="h-2" indicatorClassName={colorClass.includes('primary') ? 'bg-primary' : colorClass.includes('green') ? 'bg-green-500' : 'bg-purple-500'} />
      </div>
    ))}
  </motion.div>
);

const Skills = () => {
  const { skills } = portfolioData;
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Here are the technologies I work with and my proficiency in each.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCategory 
            title="Programming Languages" 
            icon={<FaCode className="text-2xl text-primary dark:text-primary" />} 
            skills={skills.programming} 
            colorClass="bg-primary/10 dark:bg-primary/20" 
          />
          
          <SkillCategory 
            title="Frameworks & Libraries" 
            icon={<FaLayerGroup className="text-2xl text-green-500 dark:text-green-400" />} 
            skills={skills.frameworks} 
            colorClass="bg-green-100 dark:bg-green-900" 
          />
          
          <SkillCategory 
            title="Tools & Platforms" 
            icon={<FaTools className="text-2xl text-purple-500 dark:text-purple-400" />} 
            skills={skills.tools} 
            colorClass="bg-purple-100 dark:bg-purple-900" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Other Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.other.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
