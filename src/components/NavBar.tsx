
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-playfair font-bold text-warmOrange">
                Vijaya<span className="text-darkText">Builders</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-darkText hover:text-warmOrange transition-colors font-inter">
              Home
            </Link>
            <Link to="/about" className="text-darkText hover:text-warmOrange transition-colors font-inter">
              About Us
            </Link>
            <Link to="/services" className="text-darkText hover:text-warmOrange transition-colors font-inter">
              Services
            </Link>
            <Link to="/projects" className="text-darkText hover:text-warmOrange transition-colors font-inter">
              Projects
            </Link>
            <Link to="/contact" className="text-darkText hover:text-warmOrange transition-colors font-inter">
              Contact Us
            </Link>
            <Link to="/admin" className="text-warmOrange hover:text-orange-600 transition-colors font-inter">
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-darkText hover:text-warmOrange focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-darkText hover:bg-warmPeach hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-darkText hover:bg-warmPeach hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-darkText hover:bg-warmPeach hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-darkText hover:bg-warmPeach hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-darkText hover:bg-warmPeach hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/admin" 
              className="block px-3 py-2 rounded-md text-base font-medium text-warmOrange hover:bg-warmPeach hover:text-warmOrange"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
