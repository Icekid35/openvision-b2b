import { ReactNode } from "react";

export default function UrbanGreenSpacesPortfolioPage() {
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
            <span className="text-blue-600">Urban Green Spaces:</span> 3D
            Architectural Visualization
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Bringing futuristic eco-friendly urban developments to life with
            photorealistic 3D renders and virtual tours.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Urban Green Spaces Viz"
            bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
            textColor="FFFFFF"
            src="https://placehold.co/900x500/3B82F6/FFFFFF?text=Urban+Green+Spaces+Viz"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="The Challenge & Our Solution"
            subtitle="Urban Green Spaces needed to pre-sell high-concept, eco-conscious residential developments that were still in the blueprint phase, requiring compelling visual assets to attract early investors."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Challenge: Visualizing the Unbuilt
              </h3>
              <p className="mb-6">
                Urban Green Spaces envisioned groundbreaking residential
                developments that integrated sustainable design and lush natural
                environments. However, these were complex, large-scale projects,
                making it difficult for potential investors and buyers to fully
                grasp the vision from traditional blueprints and architectural
                drawings. The challenge was to create a compelling visual
                experience that could effectively communicate the future living
                environment and its unique value proposition before construction
                began.
              </p>
            </div>
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Solution: Photorealistic 3D & Interactive Tours
              </h3>
              <p>
                Open Vision provided a comprehensive 3D architectural
                visualization solution for Urban Green Spaces. We created a
                series of photorealistic exterior and interior renders,
                showcasing the stunning design, green features, and integrated
                community spaces. Beyond static images, we also developed
                interactive virtual tours, allowing potential buyers to explore
                properties and experience the future environment as if they were
                already there, significantly enhancing the pre-sales experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Key Deliverables & Project Highlights"
            subtitle="From detailed renders to immersive walk-throughs, we brought the unbuilt to life."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Photorealistic Exterior Renders
              </h3>
              <p className="mb-4">
                Created highly detailed exterior visualizations showcasing the
                architectural design, landscaping, and integration with the
                surrounding urban environment, in various lighting conditions.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Exterior Render"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Exterior+Render"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Immersive Interior Visualizations
              </h3>
              <p className="mb-4">
                Produced stunning interior renders depicting various unit
                layouts, finishes, and the integration of smart home technology,
                allowing buyers to envision their future living space.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Interior Viz"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Interior+Viz"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl bg-white p-6 shadow-md md:col-span-2">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Interactive Virtual Tours
              </h3>
              <p className="mb-4">
                Developed web-based interactive tours that allowed potential
                buyers to virtually walk through model units and communal areas,
                experiencing the spatial layout and design details first-hand.
              </p>
              <ImgPlaceholder
                w={800}
                h={250}
                label="Virtual Tour"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/800x250/3B82F6/FFFFFF?text=Virtual+Tour"
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
            subtitle="The visualizations were instrumental in securing early investments and accelerating pre-sales for Urban Green Spaces."
            textColor="white"
            subtextColor="rgba(255, 255, 255, 0.9)"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                50%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Faster Pre-Sales Conversion
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">3x</div>
              <p className="text-xl font-semibold">
                Increase in Investor Interest
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                85%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Positive Feedback from Buyers
              </p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed opacity-90">
            Open Vision's advanced 3D architectural visualizations were a
            game-changer for Urban Green Spaces, transforming abstract
            blueprints into tangible, desirable living environments and
            significantly boosting their market appeal.
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
