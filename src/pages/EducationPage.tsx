import { useEffect } from 'react';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import TimelineItem from '../components/shared/TimelineItem';
import { education, volunteering } from '../data/education';

const EducationPage = () => {
  useEffect(() => {
    document.title = 'Education & Volunteering | Dr. Mohamed Abdelsaboor';
  }, []);

  return (
    <PageTransition>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Academic Education" 
            subtitle="My educational background and qualifications" 
          />
          
          <div className="mt-12 mb-16">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                organization={item.organization}
                description={item.description}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
          
          <SectionHeading 
            title="Volunteering & Community Service" 
            subtitle="Contributing to society and giving back to the community" 
          />
          
          <div className="mt-12">
            {volunteering.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                organization={item.organization}
                description={item.description}
                isLast={index === volunteering.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default EducationPage;