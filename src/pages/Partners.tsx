import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function PartnersPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
  const COLOR_DARK_TEXT = "#1F2937";
  const COLOR_NEUTRAL_TEXT = "#6B7280";

  interface ImgPlaceholderProps {
    w: number;
    h: number;
    label?: string;
    src?: string;
    bgColor?: string;
    textColor?: string;
    className?: string;
    alt?: string;
  }
  const ImgPlaceholder = ({
    w,
    h,
    label,
    src,
    bgColor = COLOR_PRIMARY_BLUE.replace("#", ""),
    textColor = "FFFFFF",
    className = "",
    alt = label,
  }: ImgPlaceholderProps) => {
    const imageUrl =
      src ||
      `https://placehold.co/${w}x${h}/${bgColor}/${textColor}?text=${encodeURIComponent(label || "")}`;
    return (
      <img
        src={imageUrl}
        alt={alt}
        width={w}
        height={h}
        className={`hover:scale-102 transform rounded-xl shadow-lg transition-transform duration-500 ease-out ${className}`}
        style={{ objectFit: "cover" }}
      />
    );
  };

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

  const partners = {
    technology: [
      {
        name: "Google Cloud",
        src: "https://logo.clearbit.com/cloud.google.com",
        alt: "Google Cloud Logo",
      },
      {
        name: "Adobe",
        src: "https://logo.clearbit.com/adobe.com",
        alt: "Adobe Logo",
      },
      {
        name: "Amazon Web Services",
        src: "https://logo.clearbit.com/aws.amazon.com",
        alt: "AWS Logo",
      },
      {
        name: "Microsoft Azure",
        src: "https://logo.clearbit.com/azure.microsoft.com",
        alt: "Azure Logo",
      },
      {
        name: "Figma",
        src: "https://logo.clearbit.com/figma.com",
        alt: "Figma Logo",
      },
      {
        name: "Salesforce",
        src: "https://logo.clearbit.com/salesforce.com",
        alt: "Salesforce Logo",
      },
    ],
    strategic: [
      {
        name: "Deloitte",
        src: "https://logo.clearbit.com/deloitte.com",
        alt: "Deloitte Logo",
      },
      {
        name: "Accenture",
        src: "https://logo.clearbit.com/accenture.com",
        alt: "Accenture Logo",
      },
      {
        name: "McKinsey & Company",
        src: "https://logo.clearbit.com/mckinsey.com",
        alt: "McKinsey & Company Logo",
      },
      {
        name: "Capgemini",
        src: "https://logo.clearbit.com/capgemini.com",
        alt: "Capgemini Logo",
      },
    ],
    affiliate: [
      {
        name: "HubSpot",
        src: "https://logo.clearbit.com/hubspot.com",
        alt: "HubSpot Logo",
      },
      {
        name: "Mailchimp",
        src: "https://logo.clearbit.com/mailchimp.com",
        alt: "Mailchimp Logo",
      },
      {
        name: "Shopify",
        src: "https://logo.clearbit.com/shopify.com",
        alt: "Shopify Logo",
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Our Valued <span className="text-blue-600">Partnerships</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Collaborating with industry leaders to deliver integrated and
            powerful visual solutions.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Technology Partners"
            subtitle="Leveraging cutting-edge platforms and tools through strategic alliances with leading tech companies."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {partners.technology.map((partner, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <ImgPlaceholder
                  src={partner.src}
                  alt={partner.alt}
                  w={100}
                  h={100}
                  className="!h-24 !w-24 !rounded-none object-contain !shadow-none grayscale transition-all duration-300 hover:grayscale-0"
                />
                <p className="mt-3 text-lg font-semibold text-gray-800">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Strategic Alliances"
            subtitle="Working alongside top-tier consulting firms and agencies to provide holistic business solutions."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {partners.strategic.map((partner, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <ImgPlaceholder
                  src={partner.src}
                  alt={partner.alt}
                  w={100}
                  h={100}
                  className="!h-24 !w-24 !rounded-none object-contain !shadow-none grayscale transition-all duration-300 hover:grayscale-0"
                />
                <p className="mt-3 text-lg font-semibold text-gray-800">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Affiliate & Ecosystem Partners"
            subtitle="Extending our reach and capabilities through a network of trusted service providers and platforms."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {partners.affiliate.map((partner, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <ImgPlaceholder
                  src={partner.src}
                  alt={partner.alt}
                  w={100}
                  h={100}
                  className="!h-24 !w-24 !rounded-none object-contain !shadow-none grayscale transition-all duration-300 hover:grayscale-0"
                />
                <p className="mt-3 text-lg font-semibold text-gray-800">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Interested in Partnering with Open Visual?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's explore how we can create mutual growth and deliver
            unparalleled value together.
          </p>
          <Link
            to="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Become a Partner <i className="fas fa-handshake ml-3"></i>
          </Link>
        </div>
      </section>

      <div className="bg-gray-50 py-12 text-center">
        <Link
          to="/"
          className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
        >
          <i className="fas fa-arrow-left mr-2 sm:mr-3"></i> Back to Home
        </Link>
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
