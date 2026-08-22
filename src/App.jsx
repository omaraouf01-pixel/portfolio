import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import AudienceSplit from './components/AudienceSplit';
import LivePosDemo from './components/LivePosDemo';
import Services from './components/Services';
import PortfolioGrid from './components/PortfolioGrid';
import PerformanceBenchmark from './components/PerformanceBenchmark';
import ProjectEstimator from './components/ProjectEstimator';
import InteractiveTerminal from './components/InteractiveTerminal';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import AIChatBot from './components/AIChatBot';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-bg-primary text-text-primary overflow-x-hidden selection:bg-accent-start selection:text-white">
      {/* 0. Hardware-Accelerated Particle Mesh Background */}
      <ParticleCanvas />

      {/* 1. Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="relative z-10 w-full flex flex-col items-center">
        {/* 2. Hero Section */}
        <HeroSection />
        
        {/* 2.2 Trust Bar */}
        <TrustBar />

        {/* 2.5 Audience Split / Sectors */}
        <AudienceSplit />

        {/* 3. Live Interactive POS Terminal Simulator */}
        <LivePosDemo />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 4. Services */}
        <Services />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 5. Featured Work / Portfolio */}
        <PortfolioGrid />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 6. Live Performance Speed Benchmark */}
        <PerformanceBenchmark />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 7. Interactive Project Estimator */}
        <ProjectEstimator />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 8. Live Developer Terminal CLI */}
        <InteractiveTerminal />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 9. How We Work */}
        <Process />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 10. Why Us */}
        <WhyUs />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 11. FAQ */}
        <FAQ />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 12. Final CTA */}
        <FinalCTA />

        <div className="w-full h-px bg-gradient-to-l from-transparent via-border-subtle to-transparent" />

        {/* 13. Contact Section */}
        <ContactSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. AI Portfolio ChatBot Assistant */}
      <AIChatBot />

      {/* 16. Interactive CV / Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}