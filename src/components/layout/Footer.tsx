import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <footer className={`py-8 transition-colors ${
      isDark 
        ? 'bg-gray-900 border-t border-gray-800' 
        : 'bg-white border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dr. Mohamed Abdelsaboor</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Pediatric Cardiology Consultant at Magdi Yacoub Heart Foundation
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:mohamed.abdelsaboor@myf-egypt.org" className="hover:underline">
                  mohamed.abdelsaboor@myf-egypt.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+201234567890" className="hover:underline">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+966502649214" className="hover:underline">
                  +966 50 264 9214
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>Magdi Yacoub Heart Foundation, Aswan, Egypt</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>
                <a href="/assets/Dr-Mohamed-Abdelsaboor-CV.pdf" download className="hover:underline">
                  Download CV
                </a>
              </li>
              {/* Removed Magdi Yacoub Heart Foundation link */}
            </ul>
          </div>
        </div>
        
        <div className={`mt-8 pt-6 border-t ${
          isDark ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
        } text-sm text-center`}>
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Dr. Mohamed Abdelsaboor. Made with 
            <Heart size={14} className="mx-1 text-error-500" /> 
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
