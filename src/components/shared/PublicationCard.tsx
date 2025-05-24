import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
}

const PublicationCard = ({ title, authors, journal, year, link }: PublicationCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`p-5 rounded-lg border transition-all ${
      isDark 
        ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
    }`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className={`mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {authors}
      </p>
      <div className="flex justify-between items-end">
        <div>
          <p className={`text-sm font-medium ${
            isDark ? 'text-primary-400' : 'text-primary-500'
          }`}>
            {journal}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            {year}
          </p>
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center text-sm font-medium ${
              isDark 
                ? 'text-primary-400 hover:text-primary-300' 
                : 'text-primary-500 hover:text-primary-600'
            }`}
          >
            View Paper
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PublicationCard;