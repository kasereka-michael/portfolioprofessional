import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FaCalendarAlt, 
  FaArrowRight 
} from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";

const BlogCard = ({ 
  image, 
  category, 
  date, 
  title, 
  excerpt,
  categoryColor 
}: { 
  image: string; 
  category: string; 
  date: string; 
  title: string; 
  excerpt: string;
  categoryColor: string;
}) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
  >
    <div className="relative overflow-hidden h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className={`absolute bottom-0 left-0 ${categoryColor} text-white text-xs px-2 py-1 m-2 rounded`}>
        {category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
        <FaCalendarAlt className="mr-2" />
        <span>{formatDate(date)}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {excerpt}
      </p>
      <a href="#" className="text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 font-medium inline-flex items-center">
        Read Article <FaArrowRight className="ml-2" />
      </a>
    </div>
  </motion.article>
);

const Blog = () => {
  const { blogs } = portfolioData;

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Thoughts, technical guides, and insights about software development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              image={blog.image}
              category={blog.category.name}
              categoryColor={blog.category.colorClass}
              date={blog.date}
              title={blog.title}
              excerpt={blog.excerpt}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium inline-flex items-center">
            View All Articles <FaArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
