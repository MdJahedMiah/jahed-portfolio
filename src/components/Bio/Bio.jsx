import profileImage from "../../assets/jahed.png";
import { motion } from "framer-motion";

const AboutBio = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-30 p-12">
      {/* Image Section */}
      <motion.div 
        className="md:w-1/3 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={profileImage} 
          alt="Md Jahed Miah"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-blue-500"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="md:w-2/3 mt-5 md:mt-0 px-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
          <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed">
  I’m <span className="font-semibold text-blue-500">Md Jahed Miah</span>, a passionate <strong>MERN Stack Developer </strong>  
   with over <strong>2+ years of experience</strong> in building modern, scalable web applications. I specialize in 
  <strong> React.js, Node.js, Express.js, MongoDB, and responsive web design</strong>. 
  My mission is to craft <strong>clean, user-friendly, and high-performance websites</strong> that help businesses grow and succeed online.
</p>

      </motion.div>
    </div>
  );
};

export default AboutBio;
