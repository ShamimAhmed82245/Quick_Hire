import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import LandingPageCompanyDesktop from "../imports/LandingPageCompanyDesktop";
import LandingPageCategoryDesktop from "../imports/LandingPageCategoryDesktop";
import LandingPageCtaDesktop from "../imports/LandingPageCtaDesktop";
import LandingPageFeaturedJobsDesktop from "../imports/LandingPageFeaturedJobsDesktop";
import LandingPageLatestJobOpenDesktop from "../imports/LandingPageLatestJobOpenDesktop";
import Footer from "../imports/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <LandingPageCompanyDesktop />
      <LandingPageCategoryDesktop />
      <LandingPageCtaDesktop />
      <LandingPageFeaturedJobsDesktop />
      <LandingPageLatestJobOpenDesktop />
      <Footer />
    </div>
  );
}
