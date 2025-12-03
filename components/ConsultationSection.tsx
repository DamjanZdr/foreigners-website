'use client';

import { useState } from 'react';

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    contactMethod: '',
    acceptedTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="lg:pr-12">
            <div className="bg-[#AB1604] text-white p-12 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Immigration Journey?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Book a free consultation with our expert team. We respond within 24 hours 
                and provide personalized guidance for your specific situation. Let us help 
                you navigate Polish immigration law with confidence.
              </p>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#AB1604] focus:ring-2 focus:ring-[#AB1604] focus:ring-opacity-20 outline-none transition-all"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Number*
                  </label>
                  <div className="flex gap-2">
                    <div className="w-20 px-3 py-3 rounded-xl border border-gray-300 bg-gray-50 flex items-center justify-center">
                      <span className="text-sm font-medium">🇵🇱 +48</span>
                    </div>
                    <input
                      type="tel"
                      id="contactNumber"
                      required
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-[#AB1604] focus:ring-2 focus:ring-[#AB1604] focus:ring-opacity-20 outline-none transition-all"
                      placeholder="123 456 789"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#AB1604] focus:ring-2 focus:ring-[#AB1604] focus:ring-opacity-20 outline-none transition-all"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Contact Method */}
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Contact Method*
                  </label>
                  <select
                    id="contactMethod"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#AB1604] focus:ring-2 focus:ring-[#AB1604] focus:ring-opacity-20 outline-none transition-all bg-white"
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  >
                    <option value="">Select a method</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                    <option value="video">Video Call</option>
                  </select>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#AB1604] focus:ring-[#AB1604]"
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I have read and accepted the{' '}
                    <a href="/privacy-policy" className="text-[#AB1604] hover:underline">
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a href="/terms" className="text-[#AB1604] hover:underline">
                      Terms and Conditions of Service
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#AB1604] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#8B1203] transition-colors shadow-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
