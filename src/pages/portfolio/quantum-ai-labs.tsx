import { ReactNode } from "react";

export default function QuantumAILabsPortfolioPage() {
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
            <span className="text-blue-600">Quantum AI Labs:</span> Digital
            Marketing Campaign
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Launching groundbreaking AI solutions to market with targeted,
            visually compelling digital campaigns.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Quantum AI Marketing"
            bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
            textColor="FFFFFF"
            src="https://placehold.co/900x500/10B981/FFFFFF?text=Quantum+AI+Marketing+Overview"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="The Challenge & Our Solution"
            subtitle="Quantum AI Labs, a pioneer in advanced AI solutions, needed to effectively reach a highly specialized B2B audience and generate quality leads for its complex offerings."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Challenge: Reaching Niche Tech Audiences
              </h3>
              <p className="mb-6">
                Quantum AI Labs developed cutting-edge artificial intelligence
                solutions, but faced the common challenge of marketing highly
                technical products to a niche B2B audience. Traditional
                marketing methods were insufficient, and they needed a precise,
                data-driven digital campaign that could articulate their
                advanced capabilities and generate qualified leads among
                enterprise clients and tech innovators.
              </p>
            </div>
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Solution: Visually-Driven, Targeted Digital Campaigns
              </h3>
              <p>
                Open Visual devised a multi-channel digital marketing strategy
                for Quantum AI Labs. Our approach combined visually
                sophisticated ad creatives and landing pages with highly
                targeted audience segmentation. We focused on educational
                content, interactive demos (mocked up), and compelling visuals
                that simplified complex AI concepts, ensuring the message
                resonated with their high-value prospects across platforms like
                LinkedIn, industry-specific forums, and programmatic display
                networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Key Deliverables & Project Highlights"
            subtitle="A strategic campaign built on precise targeting and impactful visual communication."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Targeted Ad Creative Design
              </h3>
              <p className="mb-4">
                Designed a suite of visually striking ad creatives (static and
                animated banners) tailored for various digital platforms,
                focusing on clean design and clear value propositions.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Digital Ad Creatives"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Digital+Ads"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                High-Impact Landing Pages
              </h3>
              <p className="mb-4">
                Developed optimized landing pages with compelling visuals,
                concise information, and clear calls-to-action to convert ad
                clicks into qualified leads.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Optimized Landing Pages"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Landing+Pages"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl bg-white p-6 shadow-md md:col-span-2">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Performance Analytics & Optimization
              </h3>
              <p className="mb-4">
                Implemented advanced tracking and analytics dashboards to
                monitor campaign performance in real-time, allowing for
                continuous optimization and improved ROI.
              </p>
              <ImgPlaceholder
                w={800}
                h={250}
                label="Marketing Dashboard"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/800x250/10B981/FFFFFF?text=Marketing+Dashboard"
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
            subtitle="The digital marketing campaign successfully generated high-quality leads and increased brand visibility for Quantum AI Labs."
            textColor="white"
            subtextColor="rgba(255, 255, 255, 0.9)"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                30%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Increase in Qualified Leads
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">15%</div>
              <p className="text-xl font-semibold">
                Reduction in CPA (Cost Per Acquisition)
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">2x</div>
              <p className="text-xl font-semibold">Growth in Brand Mentions</p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed opacity-90">
            Open Visual's data-driven digital marketing campaign empowered
            Quantum AI Labs to effectively reach its target audience,
            demonstrating the power of visually compelling and strategically
            executed marketing.
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
