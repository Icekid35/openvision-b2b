import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

export default function FAQPage() {
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

  const faqs = [
    {
      question: "What types of visual solutions does Open Visual offer?",
      answer:
        "Open Visual specializes in a comprehensive range of visual solutions including brand & graphic design, web design & development, corporate video production, UI/UX design, immersive AR/VR experiences, 3D modeling & visualization, and digital marketing campaigns.",
    },
    {
      question: "How does Open Visual approach new projects?",
      answer:
        "We follow a streamlined, collaborative 5-step process: 1. Ideation & Briefing, 2. Strategic Conceptualization & Planning, 3. Design Prototyping & Iteration, 4. Production, Development & Refinement, and 5. Final Delivery, Launch & Optimization. This ensures transparency and tailored results.",
    },
    {
      question: "What makes Open Visual different from other agencies?",
      answer:
        "Our unique blend of artistic creativity with strategic, data-driven thinking sets us apart. We focus not just on aesthetics, but on delivering measurable business outcomes. Our client-centric partnership model ensures solutions are perfectly aligned with your brand's vision and objectives.",
    },
    {
      question: "Which industries does Open Visual serve?",
      answer:
        "Our expertise spans diverse industries including Manufacturing, Healthcare, Education, Finance, Retail & E-commerce, Agriculture, Real Estate, Logistics, Hospitality, Energy, Legal, Technology, Automotive, Fitness, and Arts & Culture.",
    },
    {
      question: "Can you provide examples of your previous work?",
      answer:
        "Absolutely! You can visit our Portfolio page to see a curated selection of our diverse projects. We also feature detailed Case Studies, like the 'Moderne Furnishings Visual Transformation', which highlight our process and results.",
    },
    {
      question: "What is your typical project timeline and cost?",
      answer:
        "Project timelines and costs vary significantly based on the scope, complexity, and specific requirements of each project. We provide a detailed proposal and timeline after an initial consultation and comprehensive briefing, ensuring full transparency. Please contact us for a personalized quote.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, our commitment extends beyond launch. We offer ongoing support, maintenance, and optimization services to ensure your visual solutions continue to perform optimally and adapt to evolving market needs.",
    },
    {
      question: "How can I get started with Open Visual?",
      answer:
        "It's easy! Simply visit our Contact Us page to fill out an inquiry form, or you can call us directly or connect through our social media channels. We look forward to discussing your vision!",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Find answers to common questions about our services, process, and
            partnership opportunities.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Your Questions, Our Answers"
            subtitle="We've compiled a list of common inquiries to provide you with quick and helpful information."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-gray-50 shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index ? "true" : "false"}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h3
                    className="text-xl font-bold"
                    style={{ color: COLOR_PRIMARY_BLUE }}
                  >
                    {faq.question}
                  </h3>
                  <i
                    className={`fas fa-chevron-${openIndex === index ? "up" : "down"} text-xl`}
                    style={{ color: COLOR_ACCENT_GREEN }}
                  ></i>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`px-6 pb-6 text-lg text-gray-700 transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-screen opacity-100" : "invisible max-h-0 opacity-0"}`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Still Have Questions?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Our team is here to provide personalized answers and support.
          </p>
          <Link
            to="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Contact Our Team <i className="fas fa-question-circle ml-3"></i>
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
