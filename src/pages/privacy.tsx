import { ReactNode } from "react";

export default function PrivacyPolicyPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
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
            Our <span className="text-blue-600">Privacy Policy</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Understanding how we collect, use, and protect your personal
            information.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Your Trust, Our Priority"
            subtitle="At Open Vision, safeguarding your privacy is fundamental to our commitment to ethical and responsible business practices."
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
              7. Contact Us
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
                <a href="/contact" className="text-blue-600 hover:underline">
                  /contact
                </a>
              </li>
            </ul>
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
