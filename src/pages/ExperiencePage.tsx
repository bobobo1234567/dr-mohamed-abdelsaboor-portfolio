import { useEffect } from 'react';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import TimelineItem from '../components/shared/TimelineItem';
import { experiences } from '../data/experience';

const ExperiencePage = () => {
  useEffect(() => {
    document.title = 'Experience | Dr. Mohamed Abdelsaboor';
  }, []);

  return (
    <PageTransition>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Professional Experience" 
            subtitle="A chronological overview of my career journey" 
          />
          
          <div className="mt-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                date={experience.date}
                title={experience.title}
                organization={experience.organization}
                description={experience.description}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ExperiencePage;