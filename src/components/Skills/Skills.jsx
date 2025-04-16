import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaUsers, FaEnvelope, FaLaptopCode, FaYoutube } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const services = [
  { 
    title: "React Frontend Development", 
    description: "Build fast, dynamic, and responsive user interfaces using React.js and modern frontend libraries.", 
    icon: <FaReact className="text-blue-500 text-4xl" />,
    metaDescription: "Expert React frontend development services for modern and responsive web apps.",
    metaKeywords: "React.js, frontend development, responsive UI, React developer"
  },
  { 
    title: "Node.js & Express Backend", 
    description: "Develop scalable and efficient server-side applications using Node.js and Express for RESTful APIs.", 
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
    metaDescription: "Backend development with Node.js and Express to power fast and scalable web apps.",
    metaKeywords: "Node.js, Express.js, backend development, REST API"
  },
  { 
    title: "MongoDB Database Integration", 
    description: "Seamless integration of MongoDB to store and manage data efficiently for dynamic web applications.", 
    icon: <FaDatabase className="text-indigo-600 text-4xl" />,
    metaDescription: "MongoDB database integration services for scalable and high-performance web applications.",
    metaKeywords: "MongoDB, database integration, MERN stack, NoSQL"
  },
  { 
    title: "HTML5 & CSS3 Development", 
    description: "Clean, semantic HTML and modern, responsive CSS to ensure beautiful and accessible web designs.", 
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    metaDescription: "Responsive and semantic web design with HTML5 and CSS3.",
    metaKeywords: "HTML5, CSS3, responsive web design, frontend basics"
  },
  { 
    title: "Full-Stack MERN Projects", 
    description: "End-to-end MERN stack web applications tailored to your business needs, from concept to deployment.", 
    icon: <FaCode className="text-gray-700 text-4xl" />,
    metaDescription: "Custom full-stack MERN applications built with modern web technologies.",
    metaKeywords: "MERN stack, full-stack web app, MongoDB, Express, React, Node"
  },
  { 
    title: "Modern Web Design", 
    description: "Crafting clean, intuitive, and mobile-first website designs that deliver great user experiences.", 
    icon: <FaCss3Alt className="text-blue-700 text-4xl" />,
    metaDescription: "Modern mobile-friendly web design focused on user experience and performance.",
    metaKeywords: "web design, responsive layout, UI/UX, CSS3"
  }
]

const Skills = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 pt-20 pb-20">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 tracking-wide pb-4">My Skills</h2>
<p className="text-lg text-center text-gray-600 max-w-5xl mx-auto">
  I specialize in building full-stack web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong focus on clean code, responsive design, and user experience, I create modern, scalable, and high-performing websites that meet both business and user needs.
</p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article 
            key={index} 
            className="p-8 rounded-lg shadow-lg bg-white flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 100, 255, 0.3)" }}
          >
            {/* Set dynamic meta tags using Helmet */}
            {/* <Helmet>
              <title>{service.title} | Abdur Rahman</title>
              <meta name="description" content={service.metaDescription} />
              <meta name="keywords" content={service.metaKeywords} />
              <meta property="og:title" content={service.title} />
              <meta property="og:description" content={service.metaDescription} />
              <meta property="og:image" content="/path/to/image.jpg" /> {/* Add appropriate image 
            </Helmet> */}

            {service.icon}
            <h3 className="text-2xl font-bold mt-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed mt-2">{service.description}</p>
            <a href={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-700 mt-4">
              Learn More
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
