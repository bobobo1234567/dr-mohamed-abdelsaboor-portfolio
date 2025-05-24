import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';
import { useTheme } from '../../context/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        toggleMobileMenu={toggleMobileMenu} 
        mobileMenuOpen={mobileMenuOpen} 
      />
      
      <MobileNavigation 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl w-full pb-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;