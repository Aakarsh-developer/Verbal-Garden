import { useState } from "react";
import { Link } from "react-router-dom";
import plants from "../data/plants";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton
} from "@clerk/clerk-react";

const navitems = [
  { name: "Home", href: "/" },
  { name: "Plants", href: "/plants" },
  { name: "Virtual Tour", href: "/Virtualtour" },
  { name: "About", href: "/About" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
        <a
          className="text-lg sm:text-2xl font-bold flex items-center text-green-800"
          href="/"
        >
          🌿 <span className="ml-1">Virtual Herbal Garden</span>
        </a>

        <button
          className="sm:hidden text-green-800 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden sm:flex space-x-3 items-center">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-4 py-1.5 rounded-3xl text-green-800 transition-all duration-200 hover:bg-green-400 hover:text-white hover:scale-105"
            >
              {item.name}
            </Link>
          ))}

    <div className="flex items-center space-x-3">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-1.5 rounded-3xl bg-green-500 text-white hover:bg-green-600 transition-all cursor-pointer">
            Login
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
       </div>
      </div>
     </div>

      {menuOpen && (
        <div className="sm:hidden bg-white shadow-lg border-t border-green-200 flex flex-col space-y-2 py-3 px-6 animate-slideDown">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 text-green-800 rounded-md hover:bg-green-400 hover:text-white transition-all"
            >
              {item.name}
            </Link>
          ))}

          <SignedOut>
            <Link
              to="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 text-green-800 rounded-md hover:bg-green-400 hover:text-white transition-all"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 text-green-800 rounded-md hover:bg-green-400 hover:text-white transition-all"
            >
              Sign Up
            </Link>
          </SignedOut>

          <SignedIn>
            <div className="py-2 px-3">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
