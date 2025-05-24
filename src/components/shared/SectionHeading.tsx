import { useTheme } from '../../context/ThemeContext';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-3 h-1 w-20 rounded ${centered ? 'mx-auto' : ''} bg-primary-500`} />
    </div>
  );
};

export default SectionHeading;