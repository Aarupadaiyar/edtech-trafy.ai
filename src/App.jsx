import TargetCursor from './components/TargetCursor';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import BuildByLearning from './sections/BuildByLearning';
import WeekJourney from './sections/WeekJourney';
import DailyBuildSystem from './sections/DailyBuildSystem';
import Projects from './sections/Projects';
import PortfolioBeforeAfter from './sections/PortfolioBeforeAfter';
import Curriculum from './sections/Curriculum';
import TechStack from './sections/TechStack';
import AIMentor from './sections/AIMentor';
import CareerOutcome from './sections/CareerOutcome';
import FAQ from './sections/FAQ';
import About from './sections/About';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div id="top" className="grain bg-[var(--ink)] text-[var(--bone)]">
      <TargetCursor spinDuration={2.2} cursorColor="#b6eb30" cursorColorOnTarget="#eeeeee" />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <BuildByLearning />
        <WeekJourney />
        <DailyBuildSystem />
        <Projects />
        <PortfolioBeforeAfter />
        <Curriculum />
        <TechStack />
        <AIMentor />
        <CareerOutcome />
        <FAQ />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
