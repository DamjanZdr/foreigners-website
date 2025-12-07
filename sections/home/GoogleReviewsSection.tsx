'use client';

import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeIn, GlassBlob } from '@/components/ui/animated';
import { theme } from '@/lib/theme';

export default function GoogleReviewsSection() {
  return (
    <Section id="reviews-section" className="bg-white relative overflow-hidden">
      {/* Glass Blobs - Much stronger with more blur to hide edges */}
      <GlassBlob color="#fdeee7" size={550} top="12%" left="-12%" delay={0} duration={25} blur={80} opacity={1} />
      <GlassBlob color="#fce4d6" size={450} top="3%" left="8%" delay={2} duration={30} blur={70} opacity={1} />
      <GlassBlob color="#fdd5c4" size={380} top="30%" right="3%" delay={1} duration={28} blur={70} opacity={1} />
      <GlassBlob color="#fdeee7" size={480} bottom="3%" right="-10%" delay={4} duration={22} blur={80} opacity={1} />
      <GlassBlob color="#fcc9b3" size={320} bottom="22%" left="10%" delay={3} duration={26} blur={60} opacity={0.95} />
      
      {/* Additional accent blobs */}
      <GlassBlob color="#fbd4c0" size={280} top="52%" left="32%" delay={5} duration={24} blur={60} opacity={0.95} />
      <GlassBlob color="#fce4d6" size={350} top="10%" right="22%" delay={2.5} duration={27} blur={70} opacity={1} />

      {/* Gradient fade to white at top */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-[5]" />
      
      {/* Gradient fade to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[5]" />
      
      <Container className="relative z-10 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                <path d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
              </svg>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What Our Clients Say
            </h2>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">4.9</span> based on <span className="font-semibold">1,704</span> reviews
            </p>
            <p className="text-gray-600 text-sm mt-1">Powered by Google</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Complex Asymmetric Masonry Layout - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:auto-rows-[80px]">
            
            {/* Row 1-3, Col 1-3: Large card */}
            <div className="sm:col-span-2 lg:col-span-3 lg:row-span-3 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-4 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-semibold text-xs">MJ</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate">Michael Johnson</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                  </div>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Great experience working with this team. They guided me through the work permit process step by step. Everything was clear and transparent. Got my documents much faster than expected! The attention to detail was outstanding. They really know Polish immigration law inside out and made the whole process stress-free.
              </p>
            </div>

            {/* Row 1-2, Col 4-5: Medium card */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-4 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white font-semibold text-xs">OS</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate">Olena Shevchenko</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                  </div>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                I was stressed about my visa application, but they made everything simple. Very knowledgeable about Polish immigration law. They speak English and Ukrainian which was very helpful!
              </p>
            </div>

            {/* Row 1-3, Col 6: Tall narrow card */}
            <div className="lg:col-span-1 lg:row-span-3 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-3 lg:p-3 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-semibold text-xs">AK</div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-xs">Anna K.</h3>
                  <div className="flex text-yellow-400 justify-center mt-1">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                  </div>
                </div>
              </div>
              <p className="text-white text-xs leading-relaxed text-center">
                Excellent service! Very professional team, always responsive. Made my residence card process easy.
              </p>
            </div>

            {/* Row 3, Col 4: Small card */}
            <div className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-3 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white font-semibold text-xs">SS</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-xs truncate">Sofia</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => <svg key={i} className="w-2 h-2 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                    <svg className="w-2 h-2 fill-current text-slate-500" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3, Col 5: Small card */}
            <div className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-3 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs">TM</div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-2 h-2 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                </div>
                <p className="text-white text-[10px] text-center">Fast!</p>
              </div>
            </div>

            {/* Row 4-5, Col 1-3: Medium horizontal card */}
            <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-4 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-white font-semibold text-xs">LP</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate">Luis Pereira</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                  </div>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Amazing support from start to finish! The team was patient, explained every step clearly, and my work visa was approved without any issues. Highly recommend their services to anyone navigating Polish immigration.
              </p>
            </div>

            {/* Row 4-5, Col 4-5: Medium card */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-4 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-semibold text-xs">RK</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate">Rajesh Kumar</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                  </div>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Professional and reliable. They helped my entire family with residence permits. Fair pricing and great customer support throughout!
              </p>
            </div>

            {/* Row 4-5, Col 6: Vertical card */}
            <div className="lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-red-600 via-primary to-red-800 backdrop-blur-sm rounded-xl p-3 border border-red-700/50 hover:border-red-600/70 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xs">NP</div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-xs">Nina P.</h3>
                  <div className="flex text-yellow-400 justify-center mt-1">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}
                  </div>
                </div>
              </div>
              <p className="text-white text-xs leading-relaxed text-center">
                Helped with my Blue Card. Great communication!
              </p>
            </div>

          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-8">
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-red-700 text-white rounded-full font-semibold text-sm hover:from-red-700 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                <path d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
              </svg>
              See all reviews on Google
            </a>
            <p className="text-gray-600 text-xs mt-3 italic">
              (Mock reviews for preview - will be replaced with real Google reviews)
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}