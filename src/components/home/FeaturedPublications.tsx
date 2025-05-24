import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SectionHeading from '../shared/SectionHeading';
import PublicationCard from '../shared/PublicationCard';
import { publications } from '../../data/publications';

const FeaturedPublications = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const featuredPublications = publications.slice(0, 3);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <SectionHeading 
            title="Featured Publications" 
            subtitle="Recent scientific contributions and research papers"
          />
          <Link 
            to="/publications" 
            className={`hidden md:flex items-center text-sm font-medium ${
              isDark 
                ? 'text-primary-400 hover:text-primary-300' 
                : 'text-primary-500 hover:text-primary-600'
            }`}
          >
            View All Publications
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPublications.map((publication, index) => (
            <PublicationCard
              key={index}
              title={publication.title}
              authors={publication.authors}
              journal={publication.journal}
              year={publication.year}
              link={publication.link}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/publications" 
            className={`inline-flex items-center text-sm font-medium ${
              isDark 
                ? 'text-primary-400 hover:text-primary-300' 
                : 'text-primary-500 hover:text-primary-600'
            }`}
          >
            View All Publications
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublications;