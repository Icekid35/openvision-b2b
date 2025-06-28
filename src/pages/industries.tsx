import { ReactNode } from "react";

export default function IndustriesPage() {
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

  const industries = [
    {
      icon: "fas fa-industry",
      title: "Manufacturing & Engineering",
      desc: "Visualizing complex processes, product designs, and factory automation for clarity and efficiency.",
    },
    {
      icon: "fas fa-hospital",
      title: "Healthcare & Pharmaceuticals",
      desc: "Creating clear, empathetic visuals for medical devices, patient education, and pharmaceutical innovations.",
    },
    {
      icon: "fas fa-university",
      title: "Education & EdTech",
      desc: "Designing engaging learning platforms, interactive educational content, and institutional branding.",
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Finance & Fintech",
      desc: "Building trust and clarity through sophisticated designs for financial services, banking, and investment platforms.",
    },
    {
      icon: "fas fa-store",
      title: "Retail & E-commerce",
      desc: "Developing captivating product showcases, seamless online shopping experiences, and vibrant retail branding.",
    },
    {
      icon: "fas fa-seedling",
      title: "Agriculture & Food Production",
      desc: "Modernizing agricultural brands, presenting sustainable practices, and visualizing food supply chains.",
    },
    {
      icon: "fas fa-building",
      title: "Real Estate & Construction",
      desc: "Offering immersive property tours, architectural visualizations, and compelling marketing materials for developments.",
    },
    {
      icon: "fas fa-truck",
      title: "Logistics & Supply Chain",
      desc: "Streamlining complex supply chain operations and data with clear, intuitive visual representations.",
    },
    {
      icon: "fas fa-utensils",
      title: "Hospitality & Tourism",
      desc: "Crafting inviting visuals for hotels, resorts, travel destinations, and dining experiences.",
    },
    {
      icon: "fas fa-solar-panel",
      title: "Energy & Utilities",
      desc: "Communicating complex energy solutions, sustainable practices, and infrastructure projects visually.",
    },
    {
      icon: "fas fa-gavel",
      title: "Legal & Consulting Services",
      desc: "Designing professional and trustworthy visuals for legal firms, corporate consulting, and professional advisory.",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Technology & Software",
      desc: "Creating cutting-edge designs for software products, tech startups, and digital innovation companies.",
    },
    {
      icon: "fas fa-car",
      title: "Automotive & Transportation",
      desc: "Visualizing vehicle designs, smart mobility solutions, and branding for the automotive sector.",
    },
    {
      icon: "fas fa-dumbbell",
      title: "Fitness & Wellness",
      desc: "Developing inspiring visuals for fitness brands, wellness apps, and health-focused services.",
    },
    {
      icon: "fas fa-palette",
      title: "Arts & Culture",
      desc: "Bringing artistic visions to life through digital platforms, museum experiences, and cultural event branding.",
    },
    {
      icon: "fas fa-hand-holding-usd",
      title: "Non-Profit & Social Impact",
      desc: "Creating compelling visual stories that raise awareness, inspire action, and showcase impact for non-profit organizations.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 pt-24 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeader
            title="Empowering Diverse Industries with Visual Innovation"
            subtitle="Our expertise spans a wide array of sectors, delivering tailored visual solutions that resonate with specific market needs and drive industry-leading results."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-8"
              >
                <div
                  className="mb-4 text-5xl sm:mb-6 sm:text-6xl"
                  style={{ color: COLOR_ACCENT_GREEN }}
                >
                  <i className={industry.icon}></i>
                </div>
                <h3
                  className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  {industry.title}
                </h3>
                <p className="text-md mb-5 text-gray-600 sm:mb-6 sm:text-lg">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
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
