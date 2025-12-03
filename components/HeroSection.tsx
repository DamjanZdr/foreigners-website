export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#AB1604] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#AB1604] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-orange-200 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted<br />
              Partner in Poland
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#AB1604]">
              Solution for Foreigners
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Professional assistance with work permits, residence cards, business setup, 
              and all aspects of living in Poland. We make your transition smooth and legally compliant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-[#AB1604] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#8B1203] transition-colors shadow-lg">
                Free Consultation
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-[#AB1604] border-2 border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-[#AB1604] transition-colors">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm font-semibold text-gray-700">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-sm font-semibold text-gray-700">
                  MK
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center text-sm font-semibold text-white">
                  AS
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">1000+</span> clients trusted us this year
              </p>
            </div>
          </div>

          {/* Right Column - Floating Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#AB1604] flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">ID</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                </div>

                {/* Card Body - Form Fields */}
                <div className="space-y-4 mb-6">
                  <div className="h-12 bg-gray-100 rounded-xl"></div>
                  <div className="h-12 bg-gray-100 rounded-xl"></div>
                  <div className="h-12 bg-gray-100 rounded-xl"></div>
                  <div className="h-12 bg-gray-100 rounded-xl"></div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <div className="h-12 bg-[#AB1604] bg-opacity-20 rounded-xl flex-1 mr-4"></div>
                  <div className="w-12 h-12 rounded-full bg-[#AB1604] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
