import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import CompanyMarquee from "./sections/CompanyMarquee";
import StatsBar from "./sections/StatsBar";
import SkillsMarquee from "./sections/SkillsMarquee";
import TalentFeatures from "./sections/TalentFeatures";
import HowItWorks from "./sections/HowItWorks";
import EmployabilityIndex from "./sections/EmployabilityIndex";
import PlacementAssurance from "./sections/PlacementAssurance";
import ForCompanies from "./sections/ForCompanies";
import CompanyHistory from "./sections/CompanyHistory";
import PremiumMentorship from "./sections/PremiumMentorship";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";

/* ── Pages ──────────────────────────────────────────────────────── */
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import PressReleaseNetworkingApp from "./pages/PressReleaseNetworkingApp";
import AnnouncementAnniversary from "./pages/AnnouncementAnniversary";

const navLinks = [
  { label: "For Talent", href: "#talent" },
  { label: "Employability Index", href: "#employability" },
  {
    label: "Cohort",
    href: "/cohort/",
    children: [
      { label: "AI Engineering Cohort", href: "/cohort/" },
      { label: "AI for Marketers Cohort", href: "/cohort/marketers/" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

const footerColumns = [
  {
    title: "For Talent",
    links: [
      { label: "Get Started", href: "https://app.trafy.ai" },
      { label: "AI Assessment", href: "#how" },
      { label: "Employability Index", href: "#employability" },
      { label: "AI Engineering Cohort", href: "/cohort/" },
      { label: "AI for Marketers Cohort", href: "/cohort/marketers/" },
    ],
  },
  {
    title: "For Companies",
    links: [
      { label: "Hire Talent", href: "#companies" },
      { label: "Private Workspace", href: "#companies" },
      { label: "AI Assistant", href: "#companies" },
      { label: "Enterprise", href: "mailto:enterprise@trafy.ai" },
    ],
  },
];

/* ── Scroll to top on route change ──────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ── Landing page (home) ────────────────────────────────────────── */
function LandingPage() {
  return (
    <main>
      <Hero />
      <CompanyMarquee />
      <StatsBar />
      <SkillsMarquee />
      <TalentFeatures />
      <HowItWorks />
      <EmployabilityIndex />
      <PlacementAssurance />
      <ForCompanies />
      <CompanyHistory />
      <PremiumMentorship />
      <FAQSection />
      <CTASection />
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar
        message="Trafy AI is celebrating our 4th Year Anniversary on August 11, 2026!"
        linkLabel="Read Announcement"
        href="/announcements/4th-anniversary"
      />
      <Navbar
        logoLabel="Trafy"
        links={navLinks}
        primaryCta={{ label: "Get Started", href: "https://app.trafy.ai" }}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/press/networking-app" element={<PressReleaseNetworkingApp />} />
        <Route path="/announcements" element={<AnnouncementAnniversary />} />
        <Route path="/announcements/4th-anniversary" element={<AnnouncementAnniversary />} />
      </Routes>

      <Footer
        siteLabel="Trafy"
        tagline="Work Tech connecting global AI talent with the world's top AI companies."
        columns={footerColumns}
      />
    </>
  );
}

export default App;
