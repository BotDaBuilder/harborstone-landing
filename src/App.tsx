import { useEffect } from 'react';
import { UtensilsCrossed, Award, Home } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Playfair+Display:ital,wght@0,600;1,600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-[#c5a880] selection:text-[#0b0c10]" style={{ backgroundColor: '#0b0c10', fontFamily: '"Outfit", sans-serif' }}>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hgo-hero.png"
            alt="Professional stadium hospitality staff elegantly serving guests in a luxury suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-[#0b0c10]/40 z-10" />
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#c5a880]/20 to-transparent blur-3xl z-10 mix-blend-screen" />
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#141820]/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase">Establishing Foundation Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Elevating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a880] to-[#a8742a]">Service</span> Together.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl border-l-4 border-[#c5a880] pl-6">
              Workforce Development & Housing Stabilization for Louisiana and Texas.
            </p>

            <div className="pt-8">
              <button className="px-8 py-4 bg-[#c5a880] text-[#0b0c10] font-bold tracking-wide uppercase text-sm rounded transition-all hover:bg-[#d4bc96] hover:shadow-[0_0_20px_rgba(197,168,128,0.4)]">
                Launch 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative bg-[#0b0c10]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }} className="text-[#c5a880] font-semibold">Mission</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Harborstone GO is dedicated to breaking the cycle of poverty and displacement through a holistic approach. We combine rigorous stadium hospitality training with verifiable event certifications, ultimately creating pathways to sustainable, long-term housing placement.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-[#c5a880]">2</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">States</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c5a880]">501(c)(3)</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">Status Active</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative group">
            <div className="absolute inset-0 bg-[#c5a880] translate-x-4 translate-y-4 rounded" />
            <img
              src="/hgo-mission.png"
              alt="Diverse group of hospitality professionals at a major sports stadium"
              className="relative z-10 w-full h-[400px] object-cover rounded shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c5a880]/20 to-transparent z-20 pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#141820] relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Empowering Communities</h2>
            <p className="text-gray-400">Our comprehensive approach ensures individuals are not just trained, but supported through their entire journey to stability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-[#0b0c10] p-8 border-t-2 border-[#c5a880] shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <UtensilsCrossed size={64} className="text-[#c5a880]" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#141820] border border-[#333] flex items-center justify-center mb-6">
                <UtensilsCrossed className="text-[#c5a880]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Stadium Hospitality Training</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Front-of-house service, F&B operations, and guest experience training for large venues and luxury suites.
              </p>
            </div>

            <div className="group relative bg-[#0b0c10] p-8 border-t-2 border-[#c5a880] shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} className="text-[#c5a880]" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#141820] border border-[#333] flex items-center justify-center mb-6">
                <Award className="text-[#c5a880]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Event Certifications</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nationally recognized credentials including food handler and TIPS/alcohol service for venue operations.
              </p>
            </div>

            <div className="group relative bg-[#0b0c10] p-8 border-t-2 border-[#c5a880] shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Home size={64} className="text-[#c5a880]" />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#141820] border border-[#333] flex items-center justify-center mb-6">
                <Home className="text-[#c5a880]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Housing Placement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transitioning graduates into stable, sustainable housing environments near major event venues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#c5a880] text-[#0b0c10] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#0b0c10]/20">
            <div className="py-4">
              <div className="text-5xl font-black mb-2">2</div>
              <div className="text-sm font-bold uppercase tracking-widest">Operating States</div>
            </div>
            <div className="py-4">
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-sm font-bold uppercase tracking-widest">Hospitality Pros</div>
            </div>
            <div className="py-4">
              <div className="text-5xl font-black mb-2">2026</div>
              <div className="text-sm font-bold uppercase tracking-widest">Target Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0b0c10] pt-24 pb-12 border-t border-[#1a1f2c] overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <h3 className="text-3xl font-black text-[#c5a880] tracking-tighter mb-2">HARBORSTONE GO</h3>
              <p className="text-gray-400 max-w-sm">
                Empowering individuals through hospitality skills, certifications, and sustainable housing placement.
              </p>
            </div>
            <div className="mt-8 md:mt-0 text-right">
              <div className="text-sm text-gray-500 mb-1 uppercase tracking-widest">EIN</div>
              <div className="text-lg text-gray-300 font-mono">41-2486141</div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
            <p>© 2026 HARBORSTONE GO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <span className="hover:text-[#c5a880] transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#c5a880] transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
