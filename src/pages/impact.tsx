import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function ImpactPage() {
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
            Our <span className="text-blue-600">Tangible Impact</span> & Results
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            We don't just design; we deliver measurable business outcomes and
            elevate your brand presence with every project.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Quantifiable Success: Key Metrics"
            subtitle="Our commitment to excellence translates into real, measurable growth and recognition for our clients."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            {[
              {
                stat: "200+",
                label: "Brand Identities Launched",
                icon: "fas fa-award",
                desc: "Successfully crafted and launched over 200 unique and memorable brand identities for diverse businesses.",
              },
              {
                stat: "95%",
                label: "Client Project Success Rate",
                icon: "fas fa-check-circle",
                desc: "Achieving outstanding client satisfaction with 95% of our projects meeting or exceeding client expectations.",
              },
              {
                stat: "50%+",
                label: "Avg. Website Engagement Increase",
                icon: "fas fa-chart-line",
                desc: "Our web designs lead to an average increase of over 50% in user engagement metrics, including session duration and page views.",
              },
              {
                stat: "7+",
                label: "Industry Design Awards Won",
                icon: "fas fa-trophy",
                desc: "Recognized by leading industry bodies with more than 7 prestigious design and creative awards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="transform rounded-xl bg-blue-600/80 p-6 text-white shadow-lg backdrop-blur-sm backdrop-filter transition-all duration-300 hover:scale-105 sm:p-8"
              >
                <div
                  className="mb-3 text-5xl sm:mb-4 sm:text-6xl"
                  style={{ color: COLOR_ACCENT_GREEN }}
                >
                  <i className={item.icon}></i>
                </div>
                <p className="mb-1 text-4xl font-extrabold sm:mb-2 sm:text-5xl">
                  {item.stat}
                </p>
                <p className="mb-3 text-lg font-semibold sm:text-xl">
                  {item.label}
                </p>
                <p className="text-sm text-white opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeader
            title="Accolades & Industry Recognition"
            subtitle="Our dedication to design excellence has been acknowledged by prestigious industry bodies."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            <div className="flex flex-col items-center rounded-xl p-4 shadow-md">
              <i
                className="fas fa-award mb-3 text-6xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              ></i>
              <p
                className="text-xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Design Excellence Award
              </p>
              <p className="text-gray-600">2024 - Web Category</p>
            </div>
            <div className="flex flex-col items-center rounded-xl p-4 shadow-md">
              <i
                className="fas fa-trophy mb-3 text-6xl"
                style={{ color: COLOR_ACCENT_GREEN }}
              ></i>
              <p
                className="text-xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Creative Agency of the Year
              </p>
              <p className="text-gray-600">2023 - Digital Solutions</p>
            </div>
            <div className="flex flex-col items-center rounded-xl p-4 shadow-md">
              <i
                className="fas fa-star mb-3 text-6xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              ></i>
              <p
                className="text-xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Innovation in UI/UX
              </p>
              <p className="text-gray-600">2022 - Mobile App Design</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to See Your Own Impact?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's discuss how our visual mastery can drive tangible results for
            your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Start Your Success Story <i className="fas fa-rocket ml-3"></i>
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
