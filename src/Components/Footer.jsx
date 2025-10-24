import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="bg-green-600 w-full p-6 flex flex-col sm:flex-row sm:justify-around sm:text-left text-center text-white">
        
        <div className="mb-6 sm:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="list-none text-sm space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/plants">Explore Plants</Link></li>
            <li><Link to="/tour">Virtual Tour</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="mb-6 sm:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <ul className="list-none text-sm space-y-1">
            <li>Location: Jabalpur, Madhya Pradesh</li>
            <li>Email: info@virtualherbalgarden.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4 mt-3">
            <Link to="/"><Facebook className="w-6 h-6 hover:text-green-300" /></Link>
            <Link to="/"><Instagram className="w-6 h-6 hover:text-green-300" /></Link>
            <Link to="/"><Twitter className="w-6 h-6 hover:text-green-300" /></Link>
            <Link to="/"><Linkedin className="w-6 h-6 hover:text-green-300" /></Link>
          </div>
        </div>
      </div>

      <div className="bg-green-950 py-3">
        <p className="text-sm text-center text-white">
          <span className="text-orange-400 font-semibold">@ Virtual Herbal Garden</span> — All Rights Reserved.  
          Designed by <span className="text-orange-400 font-semibold">Ministry of AYUSH</span>
        </p>
      </div>
    </footer>
  );
}
