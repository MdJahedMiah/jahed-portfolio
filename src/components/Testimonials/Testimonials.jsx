import { motion } from "framer-motion";

const testimonials = [
  { 
    name: "John Doe", 
    feedback: "Built a fast, modern website that exceeded my expectations. The design and performance are top-notch!",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  { 
    name: "Imranuzzaman Imran",
    address: "Romford, London, United Kingdom", 
    feedback: "Incredible web development service! My site is now super responsive and looks amazing on all devices.",
    image: "/src/assets/imran.JPG"
  },
  { 
    name: "Michael Lee", 
    feedback: "Highly skilled! Built my site with React.js and everything runs smoothly and fast.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="p-12 bg-gradient-to-r from-purple-50 to-indigo-100 my-0.5">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 tracking-wide py-8">
        What My Clients Say
      </h2>
      
      <div className="mt-12 grid gap-8 md:grid-cols-3 mb-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="p-6 border rounded-lg shadow-lg bg-white flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(75, 0, 130, 0.3)" }}
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-20 h-20 rounded-full shadow-md border-4 border-purple-300"
            />
            <h3 className="text-xl font-semibold mt-4 text-indigo-700">{testimonial.name}</h3>
            <p className="text-xl font-medium mt-4 text-indigo-500">{testimonial.address}</p>
            <p className="text-gray-600 leading-relaxed mt-2 italic font-light">
              {testimonial.feedback}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
