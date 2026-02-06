import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, Briefcase, CheckCircle, List, Globe } from 'lucide-react';
import * as Yup from 'yup';
import InputField from './InputField';
import Button from '../../ui/Button';

const CATEGORY_OPTIONS = [
  "Cloud Migration",
  "IT Infrastructure",
  "Data Lake Management",
  "DevOps Services"
];

const COUNTRY_CODES = [
  { code: '+1', country: 'US/Canada' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  { code: '+61', country: 'Australia' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+81', country: 'Japan' },
  { code: '+86', country: 'China' }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+1',
    mobile: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    category: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name cannot exceed 50 characters')
      .required('Name is required'),
    countryCode: Yup.string()
      .required('Country code is required'),
    mobile: Yup.string()
      .matches(/^[\d]{0,15}$/, 'Please enter a valid phone number')
      .required('Mobile number is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    company: Yup.string()
      .min(2, 'Company name must be at least 2 characters')
      .max(100, 'Company name cannot exceed 100 characters')
      .required('Company name is required'),
    subject: Yup.string()
      .min(5, 'Subject must be at least 5 characters')
      .max(100, 'Subject cannot exceed 100 characters')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message cannot exceed 1000 characters')
      .required('Message is required'),
    category: Yup.string()
      .required('Category is required')
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const submitData = {
        name: formData.name,
        countryCode: formData.countryCode,
        mobile: formData.mobile,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        category: formData.category
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sendmail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        countryCode: '+1',
        mobile: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        category: ''
      });

      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errorObject = {};
        validationErrors.inner.forEach(error => {
          errorObject[error.path] = error.message;
        });
        setErrors(errorObject);
      } else if (validationErrors.message) {
        setErrors({ api: validationErrors.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 mt-12">
        <div className="max-w-2xl mx-auto p-8 min-h-[80vh] flex items-center justify-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Sent Successfully!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 min-h-[90vh] flex items-center">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-orange-100">Let's discuss how we can help transform your business</p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              error={errors.name}
              icon={User}
              required
            />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <div className="flex gap-3 items-center">
                <div className="w-28">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {COUNTRY_CODES.map(({ code, country }) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                </div>
                <span className="text-gray-400">|</span>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              {errors.countryCode && <p className="text-red-500 text-xs mt-1">{errors.countryCode}</p>}
            </div>
            <InputField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              error={errors.email}
              icon={Mail}
              type="email"
              required
            />
            <InputField
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your company name"
              error={errors.company}
              icon={Briefcase}
            />
            <InputField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              error={errors.category}
              icon={List}
              type="select"
              options={CATEGORY_OPTIONS}
              required
            />
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What can we help you with?"
              error={errors.subject}
              icon={MessageSquare}
              required
            />
          </div>
          <div className="mt-6">
            <InputField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your project or requirements..."
              error={errors.message}
              icon={MessageSquare}
              type="textarea"
              rows={5}
              required
            />
          </div>
          {errors.api && (
            <p className="text-red-500 text-sm mt-1 ml-1">{errors.api}</p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending Mail...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Mail
              </>
            )}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            We respect your privacy and will never share your information with third parties.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;