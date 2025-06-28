import React from "react";
const COLOR_ACCENT_GREEN = "#10B981"; // A lively, fresh green for highlights
const COLOR_PRIMARY_BLUE = "#3B82F6"; // Primary blue color for branding
const Footer: React.FC = () => (
  <footer className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-8 sm:py-16">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-5">
      <div>
        <h4
          className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl"
          style={{ fontFamily: "'Dancing Script', cursive" ,color:COLOR_PRIMARY_BLUE}}
        >
        <span
          style={{
            color: COLOR_ACCENT_GREEN,
          }}
        >
          Open
        </span>{" "}
        Vision
        </h4>
        <p className="sm:text-md mb-4 text-sm leading-relaxed sm:mb-6">
          Your partner in leveraging visual storytelling and digital design for
          transformative enterprise solutions.
        </p>
        <div className="flex space-x-4 sm:space-x-6">
          <a
            href="https://twitter.com/openvision"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-200 hover:text-blue-500"
          >
            <i className="fab fa-twitter text-xl sm:text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/company/openvision"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-200 hover:text-blue-500"
          >
            <i className="fab fa-linkedin-in text-xl sm:text-2xl"></i>
          </a>
          <a
            href="https://facebook.com/openvision"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-200 hover:text-blue-500"
          >
            <i className="fab fa-facebook-f text-xl sm:text-2xl"></i>
          </a>
        </div>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          Main
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <a href="/" className="transition duration-200 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="transition duration-200 hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="transition duration-200 hover:text-blue-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/industries"
              className="transition duration-200 hover:text-blue-500"
            >
              Industries
            </a>
          </li>
          <li>
            <a
              href="/partners"
              className="transition duration-200 hover:text-blue-500"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="transition duration-200 hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          Blog & Insights
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <a
              href="/blog"
              className="transition duration-200 hover:text-blue-500"
            >
              All Blog Posts
            </a>
          </li>
          <li>
            <a
              href="/blog/visual-storytelling"
              className="transition duration-200 hover:text-blue-500"
            >
              Visual Storytelling
            </a>
          </li>
          <li>
            <a
              href="/blog/ui-ux-trends"
              className="transition duration-200 hover:text-blue-500"
            >
              UI/UX Trends
            </a>
          </li>
          <li>
            <a
              href="/blog/video-engagement"
              className="transition duration-200 hover:text-blue-500"
            >
              Video Engagement
            </a>
          </li>
          <li>
            <a
              href="/blog/high-converting-website"
              className="transition duration-200 hover:text-blue-500"
            >
              High-Converting Website
            </a>
          </li>
          <li>
            <a
              href="/blog/data-driven-marketing"
              className="transition duration-200 hover:text-blue-500"
            >
              Data-Driven Marketing
            </a>
          </li>
          <li>
            <a
              href="/blog/future-of-immersive-tech"
              className="transition duration-200 hover:text-blue-500"
            >
              Immersive Tech
            </a>
          </li>
          <li>
            <a
              href="/blog/brand-color-palette"
              className="transition duration-200 hover:text-blue-500"
            >
              Brand Color Palette
            </a>
          </li>
          <li>
            <a
              href="/blog/comprehensive-brand-identity"
              className="transition duration-200 hover:text-blue-500"
            >
              Comprehensive Brand Identity
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          Portfolio
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <a
              href="/portfolio"
              className="transition duration-200 hover:text-blue-500"
            >
              All Projects
            </a>
          </li>
          <li>
            <a
              href="/portfolio/harmony-health"
              className="transition duration-200 hover:text-blue-500"
            >
              Harmony Health
            </a>
          </li>
          <li>
            <a
              href="/portfolio/global-eco-solutions"
              className="transition duration-200 hover:text-blue-500"
            >
              Global Eco Solutions
            </a>
          </li>
          <li>
            <a
              href="/portfolio/nexus-fintech"
              className="transition duration-200 hover:text-blue-500"
            >
              Nexus Fintech
            </a>
          </li>
          <li>
            <a
              href="/portfolio/artisanal-bakery"
              className="transition duration-200 hover:text-blue-500"
            >
              Artisanal Bakery
            </a>
          </li>
          <li>
            <a
              href="/portfolio/urban-green-spaces"
              className="transition duration-200 hover:text-blue-500"
            >
              Urban Green Spaces
            </a>
          </li>
          <li>
            <a
              href="/portfolio/quantum-ai-labs"
              className="transition duration-200 hover:text-blue-500"
            >
              Quantum AI Labs
            </a>
          </li>
          <li>
            <a
              href="/portfolio/edulink"
              className="transition duration-200 hover:text-blue-500"
            >
              EduLink
            </a>
          </li>
          <li>
            <a
              href="/portfolio/aerofleet-logistics"
              className="transition duration-200 hover:text-blue-500"
            >
              AeroFleet Logistics
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          More
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <a
              href="/impact"
              className="transition duration-200 hover:text-blue-500"
            >
              Our Impact
            </a>
          </li>
          <li>
            <a
              href="/process-details"
              className="transition duration-200 hover:text-blue-500"
            >
              Our Process
            </a>
          </li>
          <li>
            <a
              href="/testimonials"
              className="transition duration-200 hover:text-blue-500"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="/partners"
              className="transition duration-200 hover:text-blue-500"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="transition duration-200 hover:text-blue-500"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="transition duration-200 hover:text-blue-500"
            >
              Sign Up
            </a>
          </li>
          <li>
            <a
              href="/signin"
              className="transition duration-200 hover:text-blue-500"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="/forgot-password"
              className="transition duration-200 hover:text-blue-500"
            >
              Forgot Password
            </a>
          </li>
          <li>
            <a
              href="/legal"
              className="transition duration-200 hover:text-blue-500"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="transition duration-200 hover:text-blue-500"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/teams"
              className="transition duration-200 hover:text-blue-500"
            >
              Teams
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500 sm:mt-12 sm:pt-8 sm:text-sm">
      © {new Date().getFullYear()} Open Vision. All rights reserved. |
      <a href="/privacy-policy" className="ml-2 hover:text-blue-500">
        Privacy Policy
      </a>{" "}
      |
      <a href="/terms-of-service" className="ml-2 hover:text-blue-500">
        Terms of Service
      </a>
    </div>
  </footer>
);

export default Footer;
