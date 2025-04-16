import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Web Developer",
    company: "Print In London",
    duration: "2023 – 2024",
    description: "Collaborated with cross-functional teams to design and develop responsive web applications using modern technologies like React and Node.js. Focused on optimizing user experience and ensuring high-performance UI."
  },
  {
    title: "MERN Stack Developer (Freelance)",
    company: "Personal & Client Projects",
    duration: "2021 – Present",
    description: "Built full-stack web applications including TaskMate (an AI-integrated marketplace) and AbdurPortfolio (a digital marketing portfolio site). Technologies used include React.js, Node.js, Express.js, MongoDB, and Tailwind CSS."
  }
];

const WorkExperience = () => {
  return (
    <div className="mx-auto p-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-blue-600">Work Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-blue-50 p-5 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold flex items-center">
              <FaBriefcase className="text-blue-500 mr-2" /> {exp.title}
            </h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
