import { Header } from './components/Header';
import { Hero } from './components/Hero';
import LandingPageCompanyDesktop from '../imports/LandingPageCompanyDesktop';
import LandingPageCategoryDesktop from '../imports/LandingPageCategoryDesktop';
import LandingPageCtaDesktop from '../imports/LandingPageCtaDesktop';
import LandingPageFeaturedJobsDesktop from '../imports/LandingPageFeaturedJobsDesktop';
import LandingPageCtaDesktop41350 from '../imports/LandingPageCtaDesktop-4-1350';
import LandingPageFeaturedJobsDesktop432692 from '../imports/LandingPageFeaturedJobsDesktop-4-32692';
import LandingPageLatestJobOpenDesktop from '../imports/LandingPageLatestJobOpenDesktop';
import Footer from '../imports/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <LandingPageCompanyDesktop />
      <LandingPageCategoryDesktop />
      <LandingPageCtaDesktop />
      <LandingPageFeaturedJobsDesktop />
      <LandingPageCtaDesktop41350 />
      <LandingPageFeaturedJobsDesktop432692 />
      <LandingPageLatestJobOpenDesktop />
      <Footer />
    </div>
  );
}