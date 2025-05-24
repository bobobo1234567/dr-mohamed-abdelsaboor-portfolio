import { motion } from 'framer-motion';
import { Heart, Activity, Stethoscope, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeading from '../shared/SectionHeading';

const specializations = [
  {
    title: 'Congenital Heart Defects',
    description: 'Diagnosis and management of complex congenital heart anomalies in children and adolescents.',
    icon: Heart,
  },
  {
    title: 'Advanced Cardiac Imaging',
    description: 'Expertise in echocardiography, cardiac MRI, and other imaging techniques for pediatric heart conditions.',
    icon: Activity,
  },
  {
    title: 'Interventional Cardiology',
    description: 'Non-surgical correction of congenital heart defects using catheter-based techniques.',
    icon: Stethoscope,
  },
  {
    title: 'Post-surgical Care',
    description: 'Specialized follow-up care for children after cardiac surgery to ensure optimal recovery and outcomes.',
    icon: CheckCircle,
  },
];

const Specializations = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-12 ${
      isDark ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Areas of Specialization" 
          subtitle="Expert pediatric cardiac care across multiple domains"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {specializations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-6 rounded-lg text-center ${
                isDark 
                  ? 'bg-gray-900' 
                  : 'bg-white shadow-sm'
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-gray-800 text-primary-400' : 'bg-primary-100 text-primary-500'
                }`}>
                  <item.icon size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;