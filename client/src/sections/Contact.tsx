import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendContactForm } from "@/lib/utils";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram
} from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactInfo = ({ 
  icon, 
  title, 
  children, 
  iconClass 
}: { 
  icon: JSX.Element; 
  title: string; 
  children: React.ReactNode; 
  iconClass: string;
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className={`flex items-center justify-center w-12 h-12 ${iconClass} rounded-lg`}>
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium">{title}</h4>
      {children}
    </div>
  </div>
);

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: JSX.Element; 
  label: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors" 
    aria-label={label}
  >
    {icon}
  </a>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await sendContactForm(data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary dark:bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email" 
                            {...field} 
                            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject of your message" 
                          {...field} 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          {...field} 
                          rows={5}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<FaEnvelope className="text-primary dark:text-primary" />} 
                  title="Email" 
                  iconClass="bg-primary/10 dark:bg-primary/20"
                >
                  <a href="mailto:john.doe@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    john.doe@example.com
                  </a>
                </ContactInfo>
                
                <ContactInfo 
                  icon={<FaMapMarkerAlt className="text-green-500 dark:text-green-400" />} 
                  title="Location" 
                  iconClass="bg-green-100 dark:bg-green-900"
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    San Francisco, CA<br />
                    United States
                  </p>
                </ContactInfo>
                
                <ContactInfo 
                  icon={<FaClock className="text-purple-500 dark:text-purple-400" />} 
                  title="Working Hours" 
                  iconClass="bg-purple-100 dark:bg-purple-900"
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM PST
                  </p>
                </ContactInfo>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com" icon={<FaGithub />} label="GitHub" />
                  <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} label="LinkedIn" />
                  <SocialLink href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
                  <SocialLink href="https://instagram.com" icon={<FaInstagram />} label="Instagram" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
