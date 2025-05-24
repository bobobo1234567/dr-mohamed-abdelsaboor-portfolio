import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { X } from 'lucide-react';

interface Certificate {
  title: string;
  imagePath: string;
}

const certificates: Certificate[] = [
  { title: "MD Degree Certificate", imagePath: "/images/doctor-new1.jpg" },
  { title: "Egyptian Medical Syndicate Registry", imagePath: "/images/doctor-new2.jpg" },
  { title: "European Certification in CHD", imagePath: "/images/doctor-new5.jpg" },
  { title: "AEPC Certification", imagePath: "/images/doctor-new6.jpg" },
  { title: "MBBCH Certificate", imagePath: "/images/doctor-new7.jpg" },
  { title: "MSc Degree Certificate", imagePath: "/images/doctor-new8.jpg" },
  { title: "BLS Certificate", imagePath: "/images/doctor-new10.jpg" },
  { title: "ACLS Certificate", imagePath: "/images/doctor-new13.jpg" },
  { title: "PALS Provider Certificate", imagePath: "/images/doctor-new14.jpg" },
  { title: "EPLS Certificate", imagePath: "/images/doctor-new21.jpg" }
];

const CertificateGallery = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div>
      {/* شبكة الصور */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className={`cursor-pointer rounded-lg overflow-hidden border transition-all ${
              isDark 
                ? 'border-gray-700 hover:border-gray-600' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <img
              src={cert.imagePath}
              alt={cert.title}
              className="w-full h-48 object-cover"
              loading="lazy" // تحسين تحميل الصور
            />
            <div className={`p-3 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-sm font-medium">{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* المودال لعرض الشهادة مكبرة */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 overflow-auto"
          onClick={() => setSelectedCert(null)} // غلق عند الضغط خارج الصورة
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()} // منع إغلاق المودال عند الضغط على الصورة أو الأزرار
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-4 -right-4 p-2 rounded-full bg-white text-gray-900 hover:bg-gray-100"
              aria-label="Close certificate preview"
            >
              <X size={24} />
            </button>
            <img
              src={selectedCert.imagePath}
              alt={selectedCert.title}
              className="w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateGallery;
