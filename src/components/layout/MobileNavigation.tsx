import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLocation } from 'react-router-dom';
import { FileDown } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Publications', path: '/publications' },
    { name: 'Education', path: '/education' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed inset-0 z-40 md:hidden ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}
        >
          <div className="pt-20 pb-6 px-4">
            <nav className="flex flex-col">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={onClose}
                      className={`block py-3 px-4 text-lg font-medium rounded-md transition-colors ${
                        isActive(link.path)
                          ? isDark 
                            ? 'bg-gray-800 text-primary-400' 
                            : 'bg-gray-100 text-primary-500'
                          : isDark
                            ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a 
                    href="/assets/Dr-Mohamed-Abdelsaboor-CV.pdf" 
                    download
                    onClick={onClose}
                    className={`flex items-center py-3 px-4 text-lg font-medium rounded-md transition-colors ${
                      isDark 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-primary-500 text-white'
                    }`}
                  >
                    <FileDown className="mr-2" size={20} />
                    Download CV
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;