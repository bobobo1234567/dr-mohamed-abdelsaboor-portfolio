import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import CertificationCard from '../components/shared/CertificationCard';
import CertificateGallery from '../components/shared/CertificateGallery';
import { certifications } from '../data/education';

const CertificationsPage = () => {
  useEffect(() => {
    document.title = 'Certifications | Dr. Mohamed Abdelsaboor';
  }, []);

  return (
    <PageTransition>
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Certifications & Qualifications" 
            subtitle="Professional credentials and specialized training" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CertificationCard
                  title={certification.title}
                  organization={certification.organization}
                  year={certification.date}
                  description={certification.description}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading 
              title="Certificate Gallery" 
              subtitle="View all professional certificates and credentials" 
            />
            <div className="mt-8">
              <CertificateGallery />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CertificationsPage;