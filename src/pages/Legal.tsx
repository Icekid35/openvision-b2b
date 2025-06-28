import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function LegalPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
  const COLOR_ACCENT_GREEN = "#10B981";
  const COLOR_DARK_TEXT = "#1F2937";
  const COLOR_NEUTRAL_TEXT = "#6B7280";

  interface SectionHeaderProps {
    title: ReactNode;
    subtitle: ReactNode;
    textColor?: string;
    subtextColor?: string;
  }
  const SectionHeader = ({
    title,
    subtitle,
    textColor = COLOR_DARK_TEXT,
    subtextColor = COLOR_NEUTRAL_TEXT,
  }: SectionHeaderProps) => (
    <div className="mb-16 px-4 text-center">
      <h2
        className="mb-4 text-4xl font-extrabold sm:text-5xl"
        style={{ color: textColor }}
      >
        {title}
      </h2>
      <p
        className="mx-auto max-w-3xl text-lg sm:text-xl"
        style={{ color: subtextColor }}
      >
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Legal <span className="text-blue-600">Information</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Understanding our policies, terms of service, and how we operate.
          </p>
        </div>
      </section>

      <section
        id="privacy-policy"
        className="bg-white px-4 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Privacy Policy"
            subtitle="Your Trust, Our Priority. Safeguarding your privacy is fundamental to our commitment to ethical and responsible business practices."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information to provide better services to all our
              users. The types of information we collect include:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Personal Information:</span>{" "}
                Such as your name, email address, phone number, and company
                details when you fill out forms on our website (e.g., contact
                form, newsletter signup).
              </li>
              <li>
                <span className="font-semibold">Usage Data:</span> Information
                about how you interact with our website, including IP addresses,
                browser types, referring/exit pages, and timestamps. This helps
                us understand user behavior and improve our site.
              </li>
              <li>
                <span className="font-semibold">
                  Cookies and Tracking Technologies:
                </span>{" "}
                We use cookies and similar technologies to enhance your
                experience, analyze site traffic, and personalize content.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              2. How We Use Information
            </h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                To provide, operate, and maintain our website and services.
              </li>
              <li>
                To improve, personalize, and expand our website and services.
              </li>
              <li>To understand and analyze how you use our website.</li>
              <li>
                To develop new products, services, features, and functionality.
              </li>
              <li>
                To communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes.
              </li>
              <li>To send you emails.</li>
              <li>To find and prevent fraud.</li>
            </ul>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              3. Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not share your personal information with third-party
              companies, organizations, or individuals outside of Open Vision
              unless one of the following circumstances applies:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">With Your Consent:</span> We
                will share personal information with companies, organizations or
                individuals outside of Open Vision when we have your consent to
                do so.
              </li>
              <li>
                <span className="font-semibold">For External Processing:</span>{" "}
                We provide personal information to our affiliates or other
                trusted businesses or persons to process it for us, based on our
                instructions and in compliance with our Privacy Policy and any
                other appropriate confidentiality and security measures.
              </li>
              <li>
                <span className="font-semibold">For Legal Reasons:</span> We
                will share personal information if we have a good-faith belief
                that access, use, preservation or disclosure of the information
                is reasonably necessary to meet any applicable law, regulation,
                legal process or enforceable governmental request.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              4. Data Security
            </h2>
            <p>
              We are committed to protecting the security of your personal
              information. We employ a variety of security technologies and
              procedures to help protect your personal information from
              unauthorized access, use, or disclosure. We store the personal
              information you provide on computer systems with limited access,
              which are located in controlled facilities.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              5. Your Rights
            </h2>
            <p className="mb-4">
              You have certain rights regarding your personal information,
              subject to local laws. These may include the right to:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate personal information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to our processing of your personal information.</li>
              <li>Request data portability.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the
              information provided on our Contact Us page.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              6. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              7. Contact Us (Privacy Specific)
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                By email:{" "}
                <a
                  href="mailto:info@openvision.co"
                  className="text-blue-600 hover:underline"
                >
                  info@openvision.co
                </a>
              </li>
              <li>By phone: (123) 456-VISUAL</li>
              <li>
                By visiting this page on our website:{" "}
                <Link to="/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500">
            Last updated: June 26, 2025
          </p>
        </div>
      </section>

      <section
        id="terms-of-service"
        className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Terms of Service"
            subtitle="These terms and conditions outline the rules and regulations for the use of Open Vision's Website and services."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Open Vision website and services, you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              2. Services Provided
            </h2>
            <p className="mb-4">
              Open Vision provides comprehensive visual solutions including, but
              not limited to:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Web Design & Development</li>
              <li>Brand & Graphic Design</li>
              <li>Video Production & Animation</li>
              <li>UI/UX & Product Design</li>
              <li>Digital Marketing & Campaigns</li>
              <li>3D Modeling & Visualization</li>
            </ul>
            <p className="mt-4">
              Specific details for each service will be outlined in individual
              project proposals and contracts.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              3. User Responsibilities
            </h2>
            <p className="mb-4">
              As a user or client of Open Vision's services, you agree to:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                Provide accurate and complete information when engaging with our
                services.
              </li>
              <li>
                Comply with all applicable local, national, and international
                laws and regulations.
              </li>
              <li>
                Not engage in any activity that could damage, disable, or impair
                our website or services.
              </li>
              <li>
                Respect our intellectual property and not reproduce, distribute,
                or create derivative works from our content without explicit
                permission.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              4. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Open Vision or its
              content suppliers and protected by international copyright laws.
              Client work, once fully paid for, will typically be transferred to
              the client, as outlined in the respective project contract.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              5. Limitation of Liability
            </h2>
            <p>
              Open Vision will not be liable for any direct, indirect,
              incidental, special, consequential, or exemplary damages,
              including but not limited to, damages for loss of profits,
              goodwill, data, or other intangible losses, resulting from the use
              or inability to use the service.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              6. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed and construed in
              accordance with the laws of California, without regard to its
              conflict of law provisions.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_ACCENT_GREEN }}
            >
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500">
            Last updated: June 26, 2025
          </p>
        </div>
      </section>

      <section
        id="cookie-policy"
        className="bg-white px-4 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Cookie Policy"
            subtitle="Understanding how Open Vision uses cookies and similar tracking technologies on our website."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              1. What are Cookies?
            </h2>
            <p>
              Cookies are small pieces of data stored on your device (computer
              or mobile device) when you visit a website. They are widely used
              to make websites work more efficiently and to provide reporting
              information.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              2. How We Use Cookies
            </h2>
            <p className="mb-4">
              Open Vision uses cookies for several purposes:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <span className="font-semibold">Essential Cookies:</span>{" "}
                Necessary for the website to function properly, enabling core
                functionalities like security, network management, and
                accessibility.
              </li>
              <li>
                <span className="font-semibold">Analytics Cookies:</span> To
                collect information about how you use our website, such as which
                pages you visit, and if you experience any errors. These cookies
                do not collect any information that could identify you.
              </li>
              <li>
                <span className="font-semibold">Preference Cookies:</span> To
                remember your preferences and settings, such as language
                preferences or region, to provide a more personalized
                experience.
              </li>
              <li>
                <span className="font-semibold">Marketing Cookies:</span> To
                track your browsing habits and show you advertisements that are
                more relevant to your interests.
              </li>
            </ul>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              3. Third-Party Cookies
            </h2>
            <p>
              In addition to our own cookies, we may also use various
              third-parties cookies to report usage statistics of the service,
              deliver advertisements on and through the service, and so on.
              These third parties include web analytics services and advertising
              partners.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              4. Your Choices Regarding Cookies
            </h2>
            <p className="mb-4">
              You have the option to accept or refuse cookies. Most web browsers
              automatically accept cookies, but you can usually modify your
              browser setting to decline cookies if you prefer. However, this
              may prevent you from taking full advantage of the website.
            </p>
            <p>
              You can learn how to manage cookies on your web browser by
              following the Browser Cookies Guides.
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-3xl font-bold"
              style={{ color: COLOR_PRIMARY_BLUE }}
            >
              5. Changes to This Cookie Policy
            </h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page.
              You are advised to review this Cookie Policy periodically for any
              changes.
            </p>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500">
            Last updated: June 26, 2025
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 text-center">
        <a
          href="/"
          className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
        >
          <i className="fas fa-arrow-left mr-2 sm:mr-3"></i> Back to Home
        </a>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
