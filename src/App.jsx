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

function App() {
  return (
    <div id="top" className="bg-[var(--paper)] text-[var(--charcoal)]">
      <Navbar />
      <main>
        <Hero />
        <UrgencyBar />
        <TestimonialStrip />
        <CTAStrip sublabel="Want proof it works for someone like you?" bg="cream" />
        <Problem />
        <OurLearnersWorkIn />
        <BuildByLearning />
        <WhoThisIsFor />
        <DailyBuildSystem />
        <Projects />
        <PortfolioBeforeAfter />
        <Curriculum />
        <CTAStrip label="Secure your seat" sublabel="Does the curriculum make sense for where you're at?" bg="cream" />
        <TechStack />
        <FounderCredibility />
        <AIMentor />
        <CareerOutcome />
        <CTAStrip label="Secure your seat" sublabel="Ready to build your own Employability Index?" bg="paper" />
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
