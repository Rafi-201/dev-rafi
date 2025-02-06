import { Download } from 'lucide-react'; // Import the download icon from lucide-react
import './CV.css'; // Import external CSS file for custom styles

const CV = () => {
  return (
    <a  href="/rafi.pdf"
    download="rafi.pdf"
    >
      <button className="relative flex items-center gap-3 px-6 py-3 text-lg font-semibold text-black bg-black border border-transparent rounded-lg shadow-xm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ripped-paper-button">
        <Download size={20} />
        CV
      </button>
    </a>
  );
};

export default CV;
