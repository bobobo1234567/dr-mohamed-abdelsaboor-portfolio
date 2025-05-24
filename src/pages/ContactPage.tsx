import { useEffect } from 'react';
import { MapPin, Mail, Phone, Linkedin, Facebook } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import { useTheme } from '../context/ThemeContext';

const ContactPage = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    document.title = 'Contact | Dr. Mohamed Abdelsaboor';
  }, []);

  return (
    <PageTransition>
      <section className="py-16 px-4 bg-white dark:bg-gray-900 min-h-screen flex justify-center items-start">
        <div className="max-w-5xl w-full">
          <SectionHeading 
            title="Contact Me" 
            subtitle="Get in touch for consultations, research collaborations, or speaking engagements"
            centered
          />
          
          <div className="mt-14 space-y-16">
            {/* Contact Information in one horizontal row */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">Contact Information</h3>
              
              <div className="flex justify-between space-x-12">
                {/* Address */}
                <div className="flex items-center w-1/3">
                  <div className={`p-4 rounded-full mr-4 flex-shrink-0 ${
                    isDark ? 'bg-gray-800 text-primary-400' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">Office Address</h4>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                      Magdi Yacoub Heart Foundation<br />
                      Aswan Heart Centre<br />
                      Aswan, Egypt
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center w-1/3">
                  <div className={`p-4 rounded-full mr-4 flex-shrink-0 ${
                    isDark ? 'bg-gray-800 text-primary-400' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">Email</h4>
                    <a 
                      href="mailto:mohamed.abdelsaboor@myf-egypt.org" 
                      className={`transition-colors text-lg font-medium ${
                        isDark 
                          ? 'text-gray-400 hover:text-primary-400' 
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      mohamed.abdelsaboor@myf-egypt.org
                    </a>
                  </div>
                </div>
                
                {/* Phones */}
                <div className="flex items-center w-1/3">
                  <div className={`p-4 rounded-full mr-4 flex-shrink-0 ${
                    isDark ? 'bg-gray-800 text-primary-400' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">Phone</h4>
                    <div className="space-y-1 text-lg font-medium">
                      <a 
                        href="tel:+201234567890" 
                        className={`transition-colors block ${
                          isDark 
                            ? 'text-gray-400 hover:text-primary-400' 
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        +20 123 456 7890
                      </a>
                      <a 
                        href="tel:+966502649214" 
                        className={`transition-colors block ${
                          isDark 
                            ? 'text-gray-400 hover:text-primary-400' 
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        +966 50 264 9214
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Connect with Me</h3>
              <div className="flex space-x-6 justify-center">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full transition-colors shadow-md ${
                    isDark 
                      ? 'bg-gray-800 text-white hover:bg-primary-500' 
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-600 hover:text-white'
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={26} />
                </a>
                <a 
                  href="https://www.facebook.com/mohammed.abdelsaboor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full transition-colors shadow-md ${
                    isDark 
                      ? 'bg-gray-800 text-white hover:bg-primary-500' 
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-600 hover:text-white'
                  }`}
                  aria-label="Facebook Profile"
                >
                  <Facebook size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
