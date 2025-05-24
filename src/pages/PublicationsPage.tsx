import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import PublicationCard from '../components/shared/PublicationCard';
import { publications } from '../data/publications';
import { useTheme } from '../context/ThemeContext';

const PublicationsPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    document.title = 'Publications | Dr. Mohamed Abdelsaboor';
  }, []);

  const years = Array.from(new Set(publications.map(pub => pub.year))).sort((a, b) => parseInt(b) - parseInt(a));
  
  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.year === filter);

  return (
    <PageTransition>
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Scientific Publications" 
            subtitle="Research papers and academic contributions to the field of pediatric cardiology" 
          />
          
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? isDark 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-primary-500 text-white'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setFilter(year)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === year
                    ? isDark 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-primary-500 text-white'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.1, 0.5) }}
              >
                <PublicationCard
                  title={publication.title}
                  authors={publication.authors}
                  journal={publication.journal}
                  year={publication.year}
                  link={publication.link}
                />
              </motion.div>
            ))}
          </div>
          
          {filteredPublications.length === 0 && (
            <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>No publications found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default PublicationsPage;