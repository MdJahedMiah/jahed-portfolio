import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import profileImage from "../../assets/jahed.png"; // Import Image

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-[#06B6D6] text-white pt-36 md:pt-46 pb-30 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Image Section */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImage}
            alt="Abdur Rahman, Digital Marketing and SEO Expert"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-2/3 mt-5 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-yellow-300">Md Jahed Miah</span>
          </h1>
          <motion.p
            className="text-base md:text-xl mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A{" "}
            <span className="font-semibold text-yellow-300">
            Frontend & MERN Stack Web Developer{" "}
            </span>
             crafting modern, fast & responsive websites using React.js and the latest web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link to="/contact">
              <motion.button
                className="px-2 md:px-6 py-1 md:py-3 bg-yellow-400 text-black font-semibold rounded shadow-lg hover:bg-yellow-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get Expert Web Developer
              </motion.button>
            </Link>

            <Link to="/portfolio">
              <motion.button
                className="px-2 md:px-6 py-1 md:py-3 bg-white text-blue-600 font-semibold rounded shadow-lg hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Portfolio
              </motion.button>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-5">
            <a
              href="https://www.linkedin.com/in/md-jahed-miah-1601b3211/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl hover:text-blue-600 transition-colors duration-300" />
            </a>

            <a
              href="https://www.facebook.com/mdjahedmiahuk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah Facebook Profile"
            >
              <FaFacebook className="text-3xl hover:text-blue-500 transition-colors duration-300" />
            </a>

            <a
              href="https://www.instagram.com/jahed.miah98/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah Instagram Profile"
            >
              <FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300" />
            </a>

            <a
              href="https://github.com/MdJahedMiah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Md Jahed Miah GitHub Profile"
            >
              <FaGithub className="text-3xl hover:text-green-500 transition-colors duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
