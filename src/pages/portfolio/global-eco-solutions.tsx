import { ReactNode } from "react";

export default function GlobalEcoSolutionsPortfolioPage() {
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
            <span className="text-blue-600">Global Eco Solutions:</span>{" "}
            Animated Explainer Video
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Translating complex sustainable technologies into an engaging and
            easy-to-understand animated video.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Global Eco Solutions Video"
            bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
            textColor="FFFFFF"
            src="https://placehold.co/900x500/10B981/FFFFFF?text=Global+Eco+Solutions+Video"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="The Challenge & Our Solution"
            subtitle="Global Eco Solutions needed to clearly articulate their innovative but complex sustainable energy technologies to a broad audience of potential investors and clients."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Challenge: Simplifying Complexity
              </h3>
              <p className="mb-6">
                Global Eco Solutions had developed groundbreaking sustainable
                energy technologies, but found it challenging to communicate
                their intricate processes and benefits effectively to
                non-technical stakeholders. Their traditional presentations
                often overwhelmed audiences, hindering widespread adoption and
                investment. A simplified, engaging, and memorable communication
                tool was urgently needed.
              </p>
            </div>
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Solution: Dynamic Animated Explainer
              </h3>
              <p>
                Open Vision proposed and developed a concise, visually rich
                animated explainer video. Our solution focused on transforming
                complex technical information into an accessible and compelling
                narrative. We utilized custom illustrations, clear infographics,
                and smooth motion graphics to convey the technology's workflow,
                environmental impact, and economic benefits in an easy-to-digest
                format.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Key Deliverables & Project Highlights"
            subtitle="A captivating animated video designed for maximum clarity and engagement."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Scriptwriting & Storyboarding
              </h3>
              <p className="mb-4">
                Collaborated closely with GEC's engineers to translate technical
                jargon into clear, concise, and persuasive language. Developed a
                detailed storyboard mapping out every scene and animation.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Video Storyboard"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Video+Storyboard"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Custom Animation & Motion Graphics
              </h3>
              <p className="mb-4">
                Created bespoke animations, characters, and motion graphics to
                visually explain complex energy systems, data flows, and
                environmental impacts.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Motion Graphics"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Motion+Graphics"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl bg-white p-6 shadow-md md:col-span-2">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Professional Voiceover & Sound Design
              </h3>
              <p className="mb-4">
                Partnered with a professional voiceover artist for a clear and
                engaging narration. Integrated custom sound effects and
                background music to enhance the video's impact and
                professionalism.
              </p>
              <ImgPlaceholder
                w={800}
                h={250}
                label="Voiceover & Sound"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/800x250/3B82F6/FFFFFF?text=Voiceover+Sound"
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
            subtitle="The explainer video significantly improved comprehension and boosted engagement with key stakeholders."
            textColor="white"
            subtextColor="rgba(255, 255, 255, 0.9)"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                45%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Increase in Investor Inquiries
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">2x</div>
              <p className="text-xl font-semibold">Higher Website Dwell Time</p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                95%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Audience Retention (first 60s)
              </p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed opacity-90">
            The animated explainer video became a cornerstone of Global Eco
            Solutions' communication strategy, enabling them to convey their
            vision with unparalleled clarity and impact, leading to increased
            interest and investment.
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
