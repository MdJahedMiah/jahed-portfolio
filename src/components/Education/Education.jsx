import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const education = [
  {
    title: "MSc in Software Engineering",
    institution: "University of Hertfordshire, UK",
    year: "Graduated 2025"
  },
  {
    title: "BSc in Computer Science & Engineering",
    institution: "Leading University, Bangladesh",
    year: "Graduated 2021"
  }
];

const certifications = [
  {
    title: "AWS Fundamentals Certification",
    provider: "Amazon Web Services"
  },
  {
    title: "Full Stack Web Development",
    provider: "Programming Hero"
  },
  {
    title: "React & Node.js Bootcamp",
    provider: "Programming Hero"
  }
];

const Education = () => {
  return (
    <div className="mx-auto p-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-center text-blue-700">Education & Certifications</h2>

      <div className="mt-8">
        <div className="flex items-center">
          <FaGraduationCap className="text-green-500 mr-2 text-2xl font-bold" />
          <h3 className="text-2xl font-bold text-gray-800">Education</h3>
        </div>
        <ul className="mt-3 space-y-3">
          {education.map((edu, index) => (
            <li key={index} className="text-gray-700 font-semibold">
              📚 {edu.title} - <span className="text-gray-500">{edu.institution} ({edu.year})</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center mt-8">
          <FaCheckCircle className="text-green-500 mr-2 text-2xl font-bold" />
          <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
        </div>
        <ul className="mt-3 space-y-3">
          {certifications.map((cert, index) => (
            <li key={index} className="text-gray-700 font-semibold">
              🏆 {cert.title} - <span className="text-gray-500">{cert.provider}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
