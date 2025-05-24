import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ContactForm = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className={`rounded-lg ${
      isDark ? 'bg-gray-800' : 'bg-white shadow-md'
    } p-6`}>
      {submitted ? (
        <div className={`p-4 mb-4 rounded-md ${
          isDark ? 'bg-success-900/20 text-success-400' : 'bg-success-100 text-success-700'
        }`}>
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm mt-1">Your message has been received. I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Full Name <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-md ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-primary-400 focus:border-primary-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-primary-500 focus:border-primary-500'
              } border focus:outline-none focus:ring-2`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error-500">{errors.name}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Email <span className="text-error-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-md ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-primary-400 focus:border-primary-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-primary-500 focus:border-primary-500'
              } border focus:outline-none focus:ring-2`}
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error-500">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-md ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-primary-400 focus:border-primary-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-primary-500 focus:border-primary-500'
              } border focus:outline-none focus:ring-2`}
              placeholder="Consultation Request"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className={`block text-sm font-medium mb-1 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Message <span className="text-error-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-md ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:ring-primary-400 focus:border-primary-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-primary-500 focus:border-primary-500'
              } border focus:outline-none focus:ring-2`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-error-500">{errors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 px-4 rounded-md text-white font-medium flex items-center justify-center transition-colors ${
              isDark 
                ? submitting ? 'bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'
                : submitting ? 'bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'
            }`}
          >
            {submitting ? (
              <>
                <span className="mr-2">Sending...</span>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} className="ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;