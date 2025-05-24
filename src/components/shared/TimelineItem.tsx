import { useTheme } from '../../context/ThemeContext';

interface TimelineItemProps {
  date: string;
  title: string;
  organization: string;
  description: string | React.ReactNode;
  isLast?: boolean;
}

const TimelineItem = ({ date, title, organization, description, isLast = false }: TimelineItemProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
      )}
      
      {/* Timeline circle */}
      <div className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 ${
        isDark 
          ? 'border-primary-400 bg-gray-900' 
          : 'border-primary-500 bg-white'
      }`}></div>
      
      {/* Content */}
      <div className="space-y-2">
        <span className={`text-sm font-medium ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {date}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className={`font-medium ${
          isDark ? 'text-primary-400' : 'text-primary-500'
        }`}>
          {organization}
        </p>
        {typeof description === 'string' ? (
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {description}
          </p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};

export default TimelineItem;