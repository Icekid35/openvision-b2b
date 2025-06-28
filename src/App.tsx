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
// import MinimalNav from "./components/MinimalNav";
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
import { useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'
export default function App() {
   const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Router>
      <Header />
              {!isMobile && (
          <AnimatedCursor
            innerSize={12}
            outerSize={35}
            innerScale={1}
            outerScale={2.3}
            color="#3B82F6"
            // outerAlpha={2}
            trailingSpeed={10}
            outerStyle={{
              border: '2px solid #3B82F6',
              filter: 'difference',
              backdropFilter: 'difference',

            }}
            innerStyle={{
              backgroundColor: '#3B82F6',
            }}
            clickables={[
              'a',
              'button',
              '.link',
              '.btn',
              '.cursor-link',
              '.cursor-button',
              '.cursor-hover',
              '.cursor-pointer',
            ]}
          />
        )}
      {/* <MinimalNav /> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/about-us" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/industries" Component={Industries} />
        <Route path="/case-studies/moderne-furnishings" Component={Moderne} />
        <Route path="/process-details" Component={Process} />
        <Route path="/technologies-details" Component={Technologies} />
        <Route path="/testimonials" Component={Testimonials} />
        <Route path="/testimonials-page" Component={Testimonials} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
        <Route path="/impact" Component={Impact} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/signup" Component={Signup} />
        <Route path="/get-started" Component={Signup} />
        <Route path="/signin" Component={Signin} />
        <Route path="/login" Component={Signin} />
        <Route path="/forgot-password" Component={ForgetPassword} />
        <Route path="/partners" Component={Partners} />
        <Route path="/faq" Component={FAQ} />
        <Route path="/Privacy" Component={Privacy} />
        <Route path="/legal" Component={Legal} />
        <Route path="/Teams" Component={Teams} />
        <Route path="/Team" Component={Teams} />
        <Route path="/blog/visual-storytelling" Component={BlogVisualStorytelling} />
        <Route path="/blog/ui-ux-trends" Component={BlogUIUXTrends} />
        <Route path="/blog/video-engagement" Component={BlogVideoEngagement} />
        <Route path="/blog/high-converting-website" Component={BlogHighConvertingWebsite} />
        <Route path="/blog/data-driven-marketing" Component={BlogDataDrivenMarketing} />
        <Route path="/blog/future-of-immersive-tech" Component={BlogFutureOfImmersiveTech} />
        <Route path="/blog/brand-color-palette" Component={BlogBrandColorPalette} />
        <Route path="/blog/comprehensive-brand-identity" Component={BlogComprehensiveBrandIdentity} />
        <Route path="/portfolio/harmony-health" Component={PortfolioHarmonyHealth} />
        <Route path="/portfolio/global-eco-solutions" Component={PortfolioGlobalEcoSolutions} />
        <Route path="/portfolio/nexus-fintech" Component={PortfolioNexusFintech} />
        <Route path="/portfolio/artisanal-bakery" Component={PortfolioArtisanalBakery} />
        <Route path="/portfolio/urban-green-spaces" Component={PortfolioUrbanGreenSpaces} />
        <Route path="/portfolio/quantum-ai-labs" Component={PortfolioQuantumAILabs} />
        <Route path="/portfolio/edulink" Component={PortfolioEduLink} />
        <Route path="/portfolio/aerofleet-logistics" Component={PortfolioAeroFleetLogistics} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
}
