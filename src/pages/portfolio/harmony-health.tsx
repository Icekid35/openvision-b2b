import { ReactNode } from "react";

export default function HarmonyHealthPortfolioPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
  const COLOR_ACCENT_GREEN = "#10B981";
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

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            <span className="text-blue-600">Harmony Health:</span> Brand & Web
            Redesign
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            A comprehensive visual overhaul for a leading healthcare provider,
            focusing on trust and clarity.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Harmony Health Overview"
            bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
            textColor="FFFFFF"
            src="https://placehold.co/900x500/3B82F6/FFFFFF?text=Harmony+Health+Overview"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="The Challenge & Our Solution"
            subtitle="Harmony Health needed to refresh its dated brand image and create a modern, user-friendly digital presence that conveyed trust and innovation in healthcare."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Challenge: Rebuilding Trust Digitally
              </h3>
              <p className="mb-6">
                Harmony Health, a respected healthcare provider, was struggling
                with an outdated visual identity and a website that failed to
                meet modern patient expectations. The existing platform was
                difficult to navigate, lacked mobile responsiveness, and did not
                effectively communicate the organization's commitment to patient
                care and advanced medical practices. They needed a holistic
                solution to re-establish trust and accessibility in the digital
                realm.
              </p>
            </div>
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Solution: A Holistic Brand & Web Transformation
              </h3>
              <p>
                Open Vision embarked on a journey to revitalize Harmony Health's
                brand from the ground up. Our solution involved a complete brand
                redesign, including a new logo, color palette, and visual
                guidelines that exuded professionalism, empathy, and clarity.
                Concurrently, we developed a responsive, intuitive website
                focused on seamless patient journeys, easy access to
                information, and secure online interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Key Deliverables & Project Highlights"
            subtitle="From a refreshed visual identity to a feature-rich patient portal, every element was crafted for impact."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Brand Identity Refresh
              </h3>
              <p className="mb-4">
                We designed a new logo that is modern yet warm, coupled with a
                calming color palette (blues, greens, and soft neutrals) to
                convey healing and expertise. New typography and imagery
                guidelines ensured consistency across all communications.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Brand Identity"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Brand+Identity"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Responsive Web Design & Development
              </h3>
              <p className="mb-4">
                A new website built on a robust content management system (CMS)
                offers a streamlined user experience on desktop, tablet, and
                mobile. Features include:
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1 text-base">
                <li>Service & Department Finder</li>
                <li>Online Appointment Booking</li>
                <li>Secure Patient Portal Integration (mockup)</li>
                <li>Health Resource Library</li>
              </ul>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Website Redesign"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Website+Redesign"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl bg-white p-6 shadow-md md:col-span-2">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Content Strategy & Visuals
              </h3>
              <p className="mb-4">
                We assisted in developing a content strategy focused on clear,
                accessible health information. This included guidelines for
                professional photography depicting diverse patients and
                compassionate care, and infographic templates for complex
                medical explanations.
              </p>
              <ImgPlaceholder
                w={800}
                h={250}
                label="Health Infographics"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/800x250/10B981/FFFFFF?text=Health+Infographics"
                className="mt-4 h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Impact & Measurable Results"
            subtitle="The new brand and website significantly improved patient engagement and trust."
            textColor="white"
            subtextColor="rgba(255, 255, 255, 0.9)"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                35%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Increase in Patient Portal Usage
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                20%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Decrease in Call Center Volume
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                90%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">Positive Patient Feedback</p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed opacity-90">
            The refreshed brand and intuitive website transformed Harmony
            Health's digital presence, making healthcare more accessible and
            trustworthy for their patients. This project underscored Open
            Vision's ability to deliver impactful visual solutions in critical
            sectors.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 text-center">
        <a
          href="/portfolio"
          className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
        >
          <i className="fas fa-arrow-left mr-2 sm:mr-3"></i> Back to Portfolio
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
