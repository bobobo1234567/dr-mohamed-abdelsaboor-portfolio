import { motion } from 'framer-motion';
import { Users, Award, FileText, Heart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const stats = [
  {
    label: 'Patients Treated',
    value: '2,500+',
    icon: Users,
  },
  {
    label: 'Scientific Publications',
    value: '30+',
    icon: FileText,
  },
  {
    label: 'Years Experience',
    value: '15+',
    icon: Award,
  },
  {
    label: 'Surgeries Assisted',
    value: '500+',
    icon: Heart,
  },
];

const StatsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${
                  isDark ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-500'
                }`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;