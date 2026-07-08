import { Suspense, lazy } from 'react';
import CursorManager from './components/CursorManager';
import CTAStrip from './components/CTAStrip';
import StickyMobileCTA from './components/StickyMobileCTA';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import UrgencyBar from './sections/UrgencyBar';
import TestimonialStrip from './sections/TestimonialStrip';
import Problem from './sections/Problem';
import OurLearnersWorkIn from './sections/OurLearnersWorkIn';
import BuildByLearning from './sections/BuildByLearning';
import WhoThisIsFor from './sections/WhoThisIsFor';
import WeekJourney from './sections/WeekJourney';
import DailyBuildSystem from './sections/DailyBuildSystem';
import Projects from './sections/Projects';
import PortfolioBeforeAfter from './sections/PortfolioBeforeAfter';
import Curriculum from './sections/Curriculum';
import TechStack from './sections/TechStack';
import FounderCredibility from './sections/FounderCredibility';
import AIMentor from './sections/AIMentor';
import CareerOutcome from './sections/CareerOutcome';
import GetPricing from './sections/GetPricing';
import Guarantee from './sections/Guarantee';
import FAQ from './sections/FAQ';
import About from './sections/About';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

const ApplyCohort = lazy(() => import('./sections/ApplyCohort'));

function App() {
  return (
    <div id="top" className="grain bg-[var(--ink)] text-[var(--bone)]">
      <CursorManager />
      <Navbar />
      <main>
        <Hero />
        <UrgencyBar />
        <TestimonialStrip />
        <CTAStrip sublabel="Want proof it works for someone like you?" />
        <Problem />
        <OurLearnersWorkIn />
        <BuildByLearning />
        <WhoThisIsFor />
        <WeekJourney />
        <DailyBuildSystem />
        <Projects />
        <PortfolioBeforeAfter />
        <Curriculum />
        <CTAStrip label="Get pricing & seats" sublabel="Does the curriculum make sense for where you're at?" />
        <TechStack />
        <FounderCredibility />
        <AIMentor />
        <Suspense fallback={<div className="py-24 md:py-32 border-b border-[var(--ink-line)]" />}>
          <ApplyCohort />
        </Suspense>
        <CareerOutcome />
        <CTAStrip label="Get pricing & seats" sublabel="Ready to build your own Employability Index?" />
        <GetPricing />
        <Guarantee />
        <FAQ />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
