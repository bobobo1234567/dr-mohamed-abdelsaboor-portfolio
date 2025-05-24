import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
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
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? isDark 
                    ? 'text-primary-400' 
                    : 'text-primary-500' 
                  : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    isDark ? 'bg-primary-400' : 'bg-primary-500'
                  } rounded-full`}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;