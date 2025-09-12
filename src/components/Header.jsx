import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Plane } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePackages = () => setIsPackagesOpen(!isPackagesOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Plane className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Harsha Lucky Tours</h1>
              <p className="text-sm text-gray-600">Travel Lucky Draw</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors">
                <span>Packages</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/packages/member"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-t-lg"
                >
                  Monthly Draw Packages
                </Link>
                <Link
                  to="/packages/non-member"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-b-lg"
                >
                  For Other Member Packages
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/sitemap"
              className={`font-medium transition-colors ${
                isActive('/sitemap') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Sitemap
            </Link>

            <Link
              to="/privacy"
              className={`font-medium transition-colors ${
                isActive('/privacy') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 py-4 space-y-2">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          
          <div>
            <button
              onClick={togglePackages}
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span>Packages</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`ml-4 space-y-2 transition-all duration-200 ${isPackagesOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <Link
                to="/packages/member"
                onClick={toggleMenu}
                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Member Packages
              </Link>
              <Link
                to="/packages/non-member"
                onClick={toggleMenu}
                className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Non-Member Packages
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>

          <Link
            to="/sitemap"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Sitemap
          </Link>

          <Link
            to="/privacy"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;