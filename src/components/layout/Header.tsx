import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Navigation from './Navigation';

interface HeaderProps {
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const Header = ({ toggleMobileMenu, mobileMenuOpen }: HeaderProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900 border-b border-gray-800' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">MA</span>
            <span className="text-lg font-semibold">Dr. Mohamed Abdelsaboor</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Navigation />
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* CV Download Button */}
            <a 
              href="/assets/Dr-Mohamed-Abdelsaboor-CV.pdf" 
              target="_blank" 
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isDark 
                  ? 'bg-primary-500 text-white hover:bg-primary-600' 
                  : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
              download
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${
                isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;