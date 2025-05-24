import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Award } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import { useTheme } from '../context/ThemeContext';

const AboutPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    document.title = 'About | Dr. Mohamed Abdelsaboor';
  }, []);

  return (
    <PageTransition>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my background and approach to pediatric cardiac care" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
                <p className="text-lg">
                  I am Dr. Mohamed Abdelsaboor, a Pediatric Cardiology Consultant at the Magdi Yacoub Heart Foundation in Aswan, Egypt, with over 15 years of experience in diagnosing and treating congenital and acquired heart diseases in children.
                </p>
                <p>
                  After completing my medical education at Cairo University, I pursued specialized training in pediatric cardiology, including a prestigious fellowship at Great Ormond Street Hospital in London. This international experience has equipped me with advanced skills in cardiac imaging, interventional procedures, and management of complex cardiac conditions.
                </p>
                <p>
                  My clinical practice focuses on a patient-centered approach, combining medical expertise with compassionate care. I believe in treating not just the heart condition, but supporting the overall wellbeing of the child and providing guidance to families navigating the challenges of pediatric heart disease.
                </p>
                <p>
                  Beyond clinical work, I am actively involved in research and education. I have published numerous papers in peer-reviewed journals and regularly participate in international conferences to stay at the forefront of advances in pediatric cardiology.
                </p>
                <p>
                  My mission is to improve the lives of children with heart disease through excellent clinical care, advancement of knowledge through research, and training the next generation of pediatric cardiologists.
                </p>
              </div>
            </div>
            
            <div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/images/doctor-new0.jpg" 
                  alt="Dr. Mohamed Abdelsaboor" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Patient-Centered Care',
                  description: 'I believe in treating each child as an individual, considering not just their cardiac condition, but their overall wellbeing and development.',
                  icon: Heart,
                },
                {
                  title: 'Evidence-Based Medicine',
                  description: 'My practice is guided by the latest research and clinical guidelines, ensuring that patients receive the most effective treatments available.',
                  icon: BookOpen,
                },
                {
                  title: 'Family Involvement',
                  description: 'I work closely with families, providing education and support to help them understand their child\'s condition and participate in care decisions.',
                  icon: Users,
                },
                {
                  title: 'Continuous Learning',
                  description: 'I am committed to ongoing education and research to bring the latest advances in pediatric cardiology to my patients.',
                  icon: Award,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`p-6 rounded-lg ${
                    isDark 
                      ? 'bg-gray-800' 
                      : 'bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${
                      isDark ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-500'
                    }`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;
