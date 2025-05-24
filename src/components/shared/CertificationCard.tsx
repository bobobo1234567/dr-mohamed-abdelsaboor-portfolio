import { Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CertificationCardProps {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

const CertificationCard = ({ title, organization, year, description }: CertificationCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`p-5 rounded-lg border transition-all ${
      isDark 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200 hover:shadow-md'
    }`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-full mr-4 ${
          isDark ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-500'
        }`}>
          <Award size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className={`font-medium ${
            isDark ? 'text-primary-400' : 'text-primary-500'
          }`}>
            {organization}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            {year}
          </p>
          {description && (
            <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;