import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Industries from "./pages/industries";
import Moderne from "./pages/case-study/moderne";
import Technologies from "./pages/Technologies";
import Impact from "./pages/impact";
import Portfolio from "./pages/Portfolio";
import Partners from "./pages/Partners";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
import Legal from "./pages/Legal";
import Privacy from "./pages/privacy";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";
import BlogVisualStorytelling from "./pages/blog/visual-storytelling";
import BlogUIUXTrends from "./pages/blog/ui-ux-trends";
import BlogVideoEngagement from "./pages/blog/video-engagement";
import BlogHighConvertingWebsite from "./pages/blog/high-converting-website";
import BlogDataDrivenMarketing from "./pages/blog/data-driven-marketing";
import BlogFutureOfImmersiveTech from "./pages/blog/future-of-immersive-tech";
import BlogBrandColorPalette from "./pages/blog/brand-color-palette";
import BlogComprehensiveBrandIdentity from "./pages/blog/comprehensive-brand-identity";
import PortfolioHarmonyHealth from "./pages/portfolio/harmony-health";
import PortfolioGlobalEcoSolutions from "./pages/portfolio/global-eco-solutions";
import PortfolioNexusFintech from "./pages/portfolio/nexus-fintech";
import PortfolioArtisanalBakery from "./pages/portfolio/artisanal-bakery";
import PortfolioUrbanGreenSpaces from "./pages/portfolio/urban-green-spaces";
import PortfolioQuantumAILabs from "./pages/portfolio/quantum-ai-labs";
import PortfolioEduLink from "./pages/portfolio/edulink";
import PortfolioAeroFleetLogistics from "./pages/portfolio/aerofleet-logistics";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies/moderne-furnishings" element={<Moderne />} />
        <Route path="/process-details" element={<Process />} />
        <Route path="/technologies-details" element={<Technologies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/testimonials-page" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-started" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Team" element={<Teams />} />
        <Route
          path="/blog/visual-storytelling"
          element={<BlogVisualStorytelling />}
        />
        <Route path="/blog/ui-ux-trends" element={<BlogUIUXTrends />} />
        <Route
          path="/blog/video-engagement"
          element={<BlogVideoEngagement />}
        />
        <Route
          path="/blog/high-converting-website"
          element={<BlogHighConvertingWebsite />}
        />
        <Route
          path="/blog/data-driven-marketing"
          element={<BlogDataDrivenMarketing />}
        />
        <Route
          path="/blog/future-of-immersive-tech"
          element={<BlogFutureOfImmersiveTech />}
        />
        <Route
          path="/blog/brand-color-palette"
          element={<BlogBrandColorPalette />}
        />
        <Route
          path="/blog/comprehensive-brand-identity"
          element={<BlogComprehensiveBrandIdentity />}
        />
        <Route
          path="/portfolio/harmony-health"
          element={<PortfolioHarmonyHealth />}
        />
        <Route
          path="/portfolio/global-eco-solutions"
          element={<PortfolioGlobalEcoSolutions />}
        />
        <Route
          path="/portfolio/nexus-fintech"
          element={<PortfolioNexusFintech />}
        />
        <Route
          path="/portfolio/artisanal-bakery"
          element={<PortfolioArtisanalBakery />}
        />
        <Route
          path="/portfolio/urban-green-spaces"
          element={<PortfolioUrbanGreenSpaces />}
        />
        <Route
          path="/portfolio/quantum-ai-labs"
          element={<PortfolioQuantumAILabs />}
        />
        <Route path="/portfolio/edulink" element={<PortfolioEduLink />} />
        <Route
          path="/portfolio/aerofleet-logistics"
          element={<PortfolioAeroFleetLogistics />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
