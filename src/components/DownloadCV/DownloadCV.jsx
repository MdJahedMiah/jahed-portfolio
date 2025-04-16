import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <div className="text-center p-10">
      <a 
        href="/cv.docx" 
        download 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition flex items-center justify-center"
      >
        <FaDownload className="mr-2" /> Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
