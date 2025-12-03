'use client';

import { useState } from 'react';

type Office = {
  name: string;
  heading: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  mapEmbed: string;
};

export default function OfficesSection() {
  const [activeTab, setActiveTab] = useState<'warsaw' | 'katowice' | 'other'>('warsaw');

  const offices: Record<'warsaw' | 'katowice' | 'other', Office> = {
    warsaw: {
      name: 'Warsaw',
      heading: 'Our Warsaw Office',
      description: 'Our Warsaw office is available by appointment only. We provide comprehensive immigration and legal services in the heart of Poland\'s capital.',
      address: 'ul. Marszałkowska 123, 00-001 Warsaw, Poland',
      phone: '+48 22 123 4567',
      email: 'warsaw@foreigners.pl',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.2883745430677!2d21.01223431590385!3d52.229675979757744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8ad7a786d3%3A0x4e0e5c1a1f7c8f0!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    },
    katowice: {
      name: 'Katowice',
      heading: 'Our Katowice Office',
      description: 'Visit our Katowice office for personalized consultations. Schedule your appointment to discuss your immigration needs with our expert team.',
      address: 'ul. Warszawska 45, 40-008 Katowice, Poland',
      phone: '+48 32 987 6543',
      email: 'katowice@foreigners.pl',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.1583290571235!2d19.021728315880953!3d50.26489597944557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2b0c0d0d0d%3A0x4e0e5c1a1f7c8f0!2sKatowice%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    },
    other: {
      name: 'Other',
      heading: 'Other Locations',
      description: 'We also serve clients across Poland through remote consultations and partner offices. Contact us to find the nearest service point or schedule an online meeting.',
      address: 'Multiple locations across Poland',
      phone: '+48 800 123 456',
      email: 'info@foreigners.pl',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5123456.789!2d19.0!3d52.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUG9sYW5k!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    },
  };

  const currentOffice = offices[activeTab];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('warsaw')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'warsaw'
                ? 'bg-[#AB1604] text-white shadow-lg'
                : 'bg-transparent border-2 border-dashed border-[#AB1604] text-[#AB1604] hover:bg-[#AB1604] hover:bg-opacity-10'
            }`}
          >
            Warsaw
          </button>
          <button
            onClick={() => setActiveTab('katowice')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'katowice'
                ? 'bg-[#AB1604] text-white shadow-lg'
                : 'bg-transparent border-2 border-dashed border-[#AB1604] text-[#AB1604] hover:bg-[#AB1604] hover:bg-opacity-10'
            }`}
          >
            Katowice
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'other'
                ? 'bg-[#AB1604] text-white shadow-lg'
                : 'bg-transparent border-2 border-dashed border-[#AB1604] text-[#AB1604] hover:bg-[#AB1604] hover:bg-opacity-10'
            }`}
          >
            Other
          </button>
        </div>

        {/* Office Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Office Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {currentOffice.heading}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentOffice.description}
            </p>

            <p className="text-gray-600">
              <a href="/consultation" className="text-[#AB1604] font-semibold hover:underline">
                Schedule an appointment
              </a>
            </p>

            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">{currentOffice.address}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Number (WhatsApp)</h4>
                <a
                  href={`https://wa.me/${currentOffice.phone.replace(/\s/g, '')}`}
                  className="text-[#AB1604] hover:underline"
                >
                  {currentOffice.phone}
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href={`mailto:${currentOffice.email}`}
                  className="text-[#AB1604] hover:underline"
                >
                  {currentOffice.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={currentOffice.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${currentOffice.name} Office Location`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
