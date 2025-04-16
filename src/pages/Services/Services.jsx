import { motion } from "framer-motion";
import { 
  FaSearch, FaFacebook, FaGoogle, FaEnvelope, 
  FaWordpress, FaChartLine, FaCode, FaReact, FaServer 
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-indigo-600 text-5xl" />, 
    title: "Web Development", 
    description: "Custom websites and web apps built with modern technologies tailored to your business needs."
  },
  {
    icon: <FaReact className="text-cyan-500 text-5xl" />, 
    title: "Front-End React Development", 
    description: "Build high-performance user interfaces using modern React.js practices and UI frameworks."
  },
  {
    icon: <FaServer className="text-gray-800 text-5xl" />, 
    title: "MERN Stack Development", 
    description: "Full-stack web applications using MongoDB, Express, React, and Node.js for dynamic, scalable solutions."
  },
  {
    icon: <FaWordpress className="text-gray-700 text-5xl" />, 
    title: "WordPress Website Design", 
    description: "Build stunning and responsive WordPress websites tailored to your brand and business."
  },
  {
    icon: <FaSearch className="text-blue-500 text-5xl" />, 
    title: "SEO Optimization", 
    description: "Boost your website's ranking and organic traffic with expert SEO strategies."
  },
  {
    icon: <FaFacebook className="text-blue-600 text-5xl" />, 
    title: "Social Media Management", 
    description: "Grow your brand on social platforms with engaging content and targeted audience strategies."
  },
  {
    icon: <FaGoogle className="text-red-500 text-5xl" />, 
    title: "Google & Social Media Ads", 
    description: "Run high-converting paid ads on Google, Facebook, and Instagram to drive traffic and sales."
  },

];

const Services = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center mt-24">
      <motion.h2 
        className="text-4xl font-bold mb-6 text-blue-700 tracking-wide"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        My Services
      </motion.h2>
      <p className="text-gray-600 text-lg mb-12">
        I specialize in full-stack web development using modern technologies, and also provide effective digital marketing services to help businesses grow online.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="hover:shadow-lg transition-shadow duration-300 bg-white p-6 rounded-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <a href="mailto:mdjahedahmed12@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition-all">
          Hire Me Now
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
