import React from "react";
import { Link } from "react-router-dom";
const COLOR_ACCENT_GREEN = "#10B981"; // A lively, fresh green for highlights
const COLOR_PRIMARY_BLUE = "#3B82F6"; // Primary blue color for branding
const Footer: React.FC = () => (
  <footer className="bg-gray-900 px-4 py-12 text-gray-300 sm:px-8 sm:py-16">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-5">
      <div>
        <h4
          className="mb-4 text-xl font-bold text-white sm:mb-6 sm:text-2xl"
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: COLOR_PRIMARY_BLUE,
          }}
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
            <Link
              to="/"
              className="transition duration-200 hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition duration-200 hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="transition duration-200 hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/industries"
              className="transition duration-200 hover:text-blue-500"
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className="transition duration-200 hover:text-blue-500"
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition duration-200 hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          Blog & Insights
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <Link
              to="/blog"
              className="transition duration-200 hover:text-blue-500"
            >
              All Blog Posts
            </Link>
          </li>
          <li>
            <Link
              to="/blog/visual-storytelling"
              className="transition duration-200 hover:text-blue-500"
            >
              Visual Storytelling
            </Link>
          </li>
          <li>
            <Link
              to="/blog/ui-ux-trends"
              className="transition duration-200 hover:text-blue-500"
            >
              UI/UX Trends
            </Link>
          </li>
          <li>
            <Link
              to="/blog/video-engagement"
              className="transition duration-200 hover:text-blue-500"
            >
              Video Engagement
            </Link>
          </li>
          <li>
            <Link
              to="/blog/high-converting-website"
              className="transition duration-200 hover:text-blue-500"
            >
              High-Converting Website
            </Link>
          </li>
          <li>
            <Link
              to="/blog/data-driven-marketing"
              className="transition duration-200 hover:text-blue-500"
            >
              Data-Driven Marketing
            </Link>
          </li>
          <li>
            <Link
              to="/blog/future-of-immersive-tech"
              className="transition duration-200 hover:text-blue-500"
            >
              Immersive Tech
            </Link>
          </li>
          <li>
            <Link
              to="/blog/brand-color-palette"
              className="transition duration-200 hover:text-blue-500"
            >
              Brand Color Palette
            </Link>
          </li>
          <li>
            <Link
              to="/blog/comprehensive-brand-identity"
              className="transition duration-200 hover:text-blue-500"
            >
              Comprehensive Brand Identity
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          Portfolio
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <Link
              to="/portfolio"
              className="transition duration-200 hover:text-blue-500"
            >
              All Projects
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/harmony-health"
              className="transition duration-200 hover:text-blue-500"
            >
              Harmony Health
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/global-eco-solutions"
              className="transition duration-200 hover:text-blue-500"
            >
              Global Eco Solutions
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/nexus-fintech"
              className="transition duration-200 hover:text-blue-500"
            >
              Nexus Fintech
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/artisanal-bakery"
              className="transition duration-200 hover:text-blue-500"
            >
              Artisanal Bakery
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/urban-green-spaces"
              className="transition duration-200 hover:text-blue-500"
            >
              Urban Green Spaces
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/quantum-ai-labs"
              className="transition duration-200 hover:text-blue-500"
            >
              Quantum AI Labs
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/edulink"
              className="transition duration-200 hover:text-blue-500"
            >
              EduLink
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio/aerofleet-logistics"
              className="transition duration-200 hover:text-blue-500"
            >
              AeroFleet Logistics
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl">
          More
        </h4>
        <ul className="sm:text-md space-y-2 text-sm sm:space-y-3">
          <li>
            <Link
              to="/impact"
              className="transition duration-200 hover:text-blue-500"
            >
              Our Impact
            </Link>
          </li>
          <li>
            <Link
              to="/process-details"
              className="transition duration-200 hover:text-blue-500"
            >
              Our Process
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="transition duration-200 hover:text-blue-500"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className="transition duration-200 hover:text-blue-500"
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="transition duration-200 hover:text-blue-500"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="transition duration-200 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="transition duration-200 hover:text-blue-500"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/forgot-password"
              className="transition duration-200 hover:text-blue-500"
            >
              Forgot Password
            </Link>
          </li>
          <li>
            <Link
              to="/legal"
              className="transition duration-200 hover:text-blue-500"
            >
              Legal
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className="transition duration-200 hover:text-blue-500"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/teams"
              className="transition duration-200 hover:text-blue-500"
            >
              Teams
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500 sm:mt-12 sm:pt-8 sm:text-sm">
      © {new Date().getFullYear()} Open Vision. All rights reserved. |
      <Link to="/privacy-policy" className="ml-2 hover:text-blue-500">
        Privacy Policy
      </Link>{" "}
      |
      <Link to="/terms-of-service" className="ml-2 hover:text-blue-500">
        Terms of Service
      </Link>
    </div>
  </footer>
);

export default Footer;
