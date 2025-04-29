import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaCertificate, 
  FaAward 
} from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

const TimelineItem = ({ 
  align, 
  period, 
  title, 
  company, 
  description, 
  achievements 
}: { 
  align: "left" | "right";
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}) => {
  const containerClass = align === "left" 
    ? "flex flex-col md:flex-row items-start" 
    : "flex flex-col md:flex-row items-start";

  const dateClass = align === "left"
    ? "md:hidden text-sm font-semibold text-primary dark:text-primary pl-6 md:pl-0"
    : "md:hidden text-sm font-semibold text-primary dark:text-primary pl-6 md:pl-0";

  const titleContainerClass = align === "left"
    ? "pl-6 md:pl-0 md:text-right md:items-end"
    : "pl-6 md:pl-0";

  const contentContainerClass = align === "left"
    ? "md:w-1/2 md:pl-8 pl-6 pt-2 md:pt-0"
    : "md:w-1/2 md:pl-8 pl-6 pt-2 md:pt-0";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative z-10 mb-12"
    >
      <div className={containerClass}>
        <div className={`flex flex-col md:w-1/2 md:pr-8 ${align === "left" ? "md:text-right md:items-end" : ""}`}>
          {/* Mobile timeline dot */}
          <span className="inline-block md:hidden absolute left-[-8px] w-4 h-4 bg-primary dark:bg-primary rounded-full border-4 border-white dark:border-gray-900"></span>
          
          {/* Desktop timeline dot */}
          <span className="hidden md:inline-block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary dark:bg-primary rounded-full border-4 border-white dark:border-gray-900"></span>
          
          {/* Mobile date */}
          <span className={dateClass}>{period}</span>
          
          <div className={titleContainerClass}>
            <h3 className="text-xl font-bold">{title}</h3>
            <h4 className="text-lg text-primary dark:text-primary font-medium">{company}</h4>
            {/* Desktop date */}
            <span className="hidden md:block text-sm font-semibold text-gray-500 dark:text-gray-400">{period}</span>
          </div>
        </div>
        <div className={contentContainerClass}>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const EducationItem = ({
  icon,
  title,
  organization,
  year,
  description,
  iconClass
}: {
  icon: JSX.Element;
  title: string;
  organization: string;
  year: string;
  description: string;
  iconClass: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row gap-4"
  >
    <div className="flex items-center justify-center md:w-1/5">
      <div className={`w-16 h-16 ${iconClass} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
    </div>
    <div className="md:w-4/5">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-primary dark:text-primary">{organization}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{year}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  </motion.div>
);

const Experience = () => {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-primary/20 dark:bg-primary/20 transform md:translate-x-[-50%]"></div>
          
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              align={index % 2 === 0 ? "left" : "right"}
              period={exp.period}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              achievements={exp.achievements}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Education & Certifications</h3>
          
          <div className="space-y-6">
            <EducationItem 
              icon={<FaGraduationCap className="text-2xl text-primary dark:text-primary" />}
              title={education[0].degree}
              organization={education[0].institution}
              year={education[0].years}
              description={education[0].description}
              iconClass="bg-primary/10 dark:bg-primary/20"
            />
            
            <EducationItem 
              icon={<FaCertificate className="text-2xl text-green-500 dark:text-green-400" />}
              title={education[1].degree}
              organization={education[1].institution}
              year={education[1].years}
              description={education[1].description}
              iconClass="bg-green-100 dark:bg-green-900"
            />
            
            <EducationItem 
              icon={<FaAward className="text-2xl text-purple-500 dark:text-purple-400" />}
              title={education[2].degree}
              organization={education[2].institution}
              year={education[2].years}
              description={education[2].description}
              iconClass="bg-purple-100 dark:bg-purple-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
