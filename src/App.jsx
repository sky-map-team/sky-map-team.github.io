import React, { useState } from 'react';
import { 
  Download, 
  Github, 
  History, 
  Coffee, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  Star, 
  ChevronRight,
  Monitor,
  Info,
  Twitter
} from 'lucide-react';

const COLORS = {
  navy: '#0D1B2A',
  gold: '#FF9F1C',
  starlight: '#E0E1DD',
  lensBlue: '#7EC8E3',
  planetGreen: '#4DB848',
  planetRed: '#E05C34'
};

const LOGO_URL = "https://raw.githubusercontent.com/sky-map-team/stardroid/master/assets/skymap-logo-large.png";
const FALLBACK_SCREENSHOT = "https://raw.githubusercontent.com/sky-map-team/stardroid/master/docs/design/screenshots/main_view.png";

const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 36c-1.1 2.1-1.7 4.4-1.7 6.8v426.4c0 2.4.6 4.8 1.7 6.8L250.8 256 47 36zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3zM347.3 256l67.5 67.5 70.2-40.3c15-8.6 25.2-24.5 25.2-42.6s-10.2-34-25.2-42.6l-70.2-40.3L347.3 256z" />
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const videos = [
    { id: 'p6znyx0gjb4', title: 'Sky Map Introduction' },
    { id: 'oD5lVvbvCUs', title: 'Sky Map Launch!' },
    { id: 'F00nEiJ9wJs', title: 'Sky Map Droid Ad' }
  ];

  const NavItem = ({ label, target }) => (
    <button 
      onClick={() => {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }}
      className="text-starlight hover:text-gold transition-colors font-medium text-xs uppercase tracking-widest"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-navy" style={{ backgroundColor: COLORS.navy, color: COLORS.starlight }}>
      
      {/* --- COSMIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#1B263B_0%,transparent_60%)] opacity-40"></div>
        {[...Array(80)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white animate-pulse" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-xl border-b border-white/5" style={{ backgroundColor: COLORS.navy }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src={LOGO_URL} 
              alt="Sky Map Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
              onError={(e) => { e.target.src = "https://raw.githubusercontent.com/sky-map-team/stardroid/master/assets/icon_high_res.png"; }}
            />
            <span className="text-xl font-black tracking-tighter hidden sm:block uppercase">
              SKY <span style={{ color: COLORS.gold }}>MAP</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <NavItem label="Features" target="features" />
            <NavItem label="Videos" target="videos" />
            <NavItem label="History" target="history" />
            <NavItem label="Help" target="help" />
            <NavItem label="Donate" target="support" />
            <a 
              href="https://play.google.com/store/apps/details?id=com.google.android.stardroid" 
              target="_blank" 
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs transition-all hover:brightness-110 hover:shadow-xl hover:shadow-gold/20"
              style={{ backgroundColor: COLORS.gold, color: COLORS.navy }}
            >
              <GooglePlayIcon /> DOWNLOAD
            </a>
          </div>

          <button className="md:hidden text-starlight" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full p-8 flex flex-col gap-8 border-b border-white/10 shadow-2xl" style={{ backgroundColor: COLORS.navy }}>
            <NavItem label="Features" target="features" />
            <NavItem label="Videos" target="videos" />
            <NavItem label="History" target="history" />
            <NavItem label="Help" target="help" />
            <NavItem label="Donate" target="support" />
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="pt-24 pb-12 px-6 text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold mb-8 text-lensBlue uppercase tracking-[0.2em]">
            The Original Planetarium for Android
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white uppercase">
            The Universe <br /> 
            <span style={{ color: COLORS.gold }}>in your pocket.</span>
          </h1>
          <p className="text-lg md:text-xl text-starlight/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Point your device at the heavens to reveal the secrets of the night sky. Sky Map is a volunteer-led, open-source window to the infinite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://play.google.com/store/apps/details?id=com.google.android.stardroid"
              target="_blank"
              className="flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/20 w-full sm:w-auto"
              style={{ backgroundColor: COLORS.gold, color: COLORS.navy }}
            >
              <GooglePlayIcon /> Get it on Google Play
            </a>
            <a 
              href="https://github.com/sky-map-team/stardroid"
              target="_blank"
              className="flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/10 hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              <Github className="w-6 h-6" /> View Source
            </a>
          </div>
        </section>

        {/* --- AUGMENTED REALITY FEATURE --- */}
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="relative w-[300px] md:w-[340px] aspect-[9/19] bg-black rounded-[3rem] p-3 border-[10px] border-[#1f2937] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden transform lg:rotate-[-3deg] group-hover:rotate-0 transition-transform duration-700 ease-out">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1f2937] rounded-b-xl z-20"></div>
                  
                  <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-navy">
                    <img 
                      src="images/6_en-US.jpeg"
                      alt="Sky Map Interface" 
                      className="w-full h-full object-cover brightness-110 contrast-110"
                      onError={(e) => { e.target.src = FALLBACK_SCREENSHOT; }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-lg bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" /> Core Technology
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase text-white">
                Point, Identify, <br />
                <span style={{ color: COLORS.gold }}>Discover.</span>
              </h2>
              <p className="text-xl text-starlight/60 leading-relaxed font-light">
                Our augmented reality technology uses your device's sensors to paint the heavens on your screen. Whether you're tracking Scorpius or locating the Moon, Sky Map updates instantly as you move.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-bold mb-2 flex items-center gap-2 uppercase text-sm tracking-wide text-white">
                    <Monitor className="w-4 h-4 text-lensBlue" /> Multi-Layer View
                  </h4>
                  <p className="text-xs opacity-50">Toggle constellations, planets, and deep-sky objects via the intuitive sidebar.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <h4 className="font-bold mb-2 flex items-center gap-2 uppercase text-sm tracking-wide text-white">
                    <Star className="w-4 h-4 text-planetGreen" /> Stellar Database
                  </h4>
                  <p className="text-xs opacity-50">Thousands of celestial bodies mapped with scientific precision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECONDARY FEATURES --- */}
        <section className="py-24 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<History className="w-10 h-10" style={{ color: COLORS.lensBlue }} />}
              title="Celestial History"
              description="Use Time Travel to observe historical astronomical alignments or see how the sky will look years from now."
            />
            <FeatureCard 
              icon={<Info className="w-10 h-10" style={{ color: COLORS.planetRed }} />}
              title="Detailed Info Cards"
              description="Gain deeper insights with a single tap. Access astronomical data for stars and planets, including magnitude, distance, and fun facts."
            />
          </div>
        </section>

        {/* --- VIDEO GALLERY --- */}
        <section id="videos" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight uppercase tracking-widest text-white">Sky Map Cinema</h2>
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }}></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map(video => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-gold transition-all shadow-2xl mb-6">
                    <iframe 
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-bold px-2 group-hover:text-gold transition-colors text-white">{video.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- HISTORY SECTION --- */}
        <section id="history" className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
          <h2 className="text-4xl font-black mb-16 text-center tracking-[0.2em] uppercase text-white">The Journey</h2>
          <div className="space-y-16">
            <TimelineItem year="2009" title="The Google Era" color={COLORS.gold} desc="Born as a 20% project, Sky Map redefined what mobile sensors could do." />
            <TimelineItem year="2012" title="Open Source" color={COLORS.lensBlue} desc="The transition to the community began, ensuring Sky Map remains free forever." />
            <TimelineItem year="Today" title="Sky Map Devs" color={COLORS.planetGreen} desc="A dedicated global community of volunteers maintains the legacy." />
          </div>
        </section>

        {/* --- SUPPORT & HELP (HOVER COLLAPSE FAQ) --- */}
        <section id="help" className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tight text-white">Support Hub</h2>
              <p className="text-starlight/50 font-light">Troubleshooting, diagnostics, and community assistance.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-20">
              <HelpItem 
                title="The map is inaccurate or pointing incorrectly?" 
                content="This is usually a hardware sensor issue. Wave your phone in a slow figure-8 motion to calibrate the magnetometer. Ensure you're away from magnetic interference like phone case magnets, car dashboards, or large metal structures. Check 'Magnetic Correction' in settings to account for your local geographic offset." 
              />
              <HelpItem 
                title="Polaris (The Pole Star) is in the wrong position?" 
                content="If Polaris appears near the horizon, Sky Map likely doesn't know your location. Grant the app 'Location Permission' in your device settings. You can verify your active coordinates on the Diagnostics page accessible from the overflow menu." 
              />
              <HelpItem 
                title="The map doesn't move or is jittery?" 
                content="Ensure you haven't switched into Manual Mode (tap the sensor icon to return to Automatic). If your device lacks a gyroscope, some jitter is normal—try enabling 'Disable Gyro' or adjusting 'Sensor Damping' in the expert settings menu." 
              />
              <HelpItem 
                title="Does it require an internet connection?" 
                content="No. Sky Map works fully offline. An internet connection is only needed to look up a location by place name (rather than lat/long) or to load high-resolution Hubble Gallery images." 
              />
              <HelpItem 
                title="Can I test the latest features?" 
                content="Yes! You can join our beta testing program on Google Play to get early access to new versions before they go public. We value your feedback on the latest experimental features." 
              />
              <HelpItem 
                title="Still stuck? Send a Diagnostics Report" 
                content="Open the Diagnostics page (overflow menu), take a screenshot of your sensor status, and email it to skymapdevs@gmail.com. This helps us see your hardware version and sensor health to provide better support." 
              />
            </div>

            {/* REFINED SUPPORT CTA */}
            <div id="support" className="p-12 rounded-[3rem] bg-black/60 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-3xl">
              <div className="flex items-center gap-10">
                <div className="w-20 h-20 rounded-[1.8rem] bg-gold/10 flex items-center justify-center text-gold shadow-inner shrink-0">
                  <Coffee className="w-10 h-10" />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-black mb-3 italic uppercase tracking-tighter text-white">Support the Devs</h3>
                  <p className="text-starlight/50 leading-relaxed max-w-sm font-light italic">Sky Map is developed entirely by volunteers. Your support helps cover our basic infrastructure costs and keeps the map ad-free.</p>
                </div>
              </div>
              <a 
                href="https://www.buymeacoffee.com/skymapdevs"
                target="_blank"
                className="group flex items-center gap-4 px-12 py-6 rounded-2xl font-black text-xl transition-all bg-gold text-navy hover:scale-105 hover:brightness-110 shadow-[0_0_40px_rgba(255,159,28,0.3)]"
              >
                Support us <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
                <span className="text-2xl font-black uppercase tracking-tighter text-white">Sky Map Devs</span>
              </div>
              <p className="text-starlight/30 max-w-xs text-sm leading-relaxed font-light">
                An open-source planetarium that lives in your pocket. Built by stargazers, for stargazers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 md:gap-24">
              <FooterGroup title="Project" links={[
                { l: 'GitHub', h: 'https://github.com/sky-map-team/stardroid' },
                { l: 'License', h: 'https://github.com/sky-map-team/stardroid/blob/master/LICENSE.md' },
                { l: 'Privacy', h: 'https://github.com/sky-map-team/stardroid/blob/master/PRIVACY_POLICY.md' }
              ]} />
              <FooterGroup title="Community" links={[
                { l: 'Issues', h: 'https://github.com/sky-map-team/stardroid/issues' },
                { l: 'Support', h: '#help' },
                { l: 'Donate', h: '#support' }
              ]} />
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-starlight/20 uppercase tracking-[0.3em]">
            <span>© {new Date().getFullYear()} Sky Map Devs</span>
            <div className="flex gap-8 items-center">
              <a href="https://x.com/skymapdevs" target="_blank" className="hover:text-gold transition-colors underline flex items-center gap-1">X Account</a>
              <a href="https://www.facebook.com/groups/113507592330/" target="_blank" className="hover:text-gold transition-colors underline">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] transition-all group">
    <div className="mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">{title}</h3>
    <p className="text-starlight/50 leading-relaxed font-light">{description}</p>
  </div>
);

const TimelineItem = ({ year, title, color, desc }) => (
  <div className="flex gap-10">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full border-4 border-white/5 flex items-center justify-center font-black text-sm shrink-0 uppercase" style={{ color }}>
        {year}
      </div>
      <div className="w-0.5 flex-1 bg-white/5 my-4"></div>
    </div>
    <div className="pt-3 text-left">
      <h4 className="text-2xl font-black mb-2 uppercase tracking-wide text-white">{title}</h4>
      <p className="text-starlight/50 leading-relaxed font-light">{desc}</p>
    </div>
  </div>
);

const HelpItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className={`group rounded-3xl bg-white/[0.03] border border-white/5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 ${isOpen ? 'bg-white/[0.07] border-white/20' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-8 cursor-pointer">
        <h4 className="text-xl font-bold flex items-center justify-between gap-4 text-white uppercase tracking-tight">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold"></div> {title}
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </h4>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <p className="text-starlight/50 text-sm leading-relaxed font-light border-t border-white/5 pt-6 italic">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const FooterGroup = ({ title, links }) => (
  <div className="space-y-6 text-left">
    <h5 className="font-black text-gold uppercase tracking-[0.2em] text-[10px]">{title}</h5>
    <div className="flex flex-col gap-4">
      {links.map((link, i) => (
        <a key={i} href={link.h} className="text-starlight/30 hover:text-gold transition-colors text-sm font-medium">
          {link.l}
        </a>
      ))}
    </div>
  </div>
);

export default App;
