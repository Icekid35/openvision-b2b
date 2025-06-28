import { ReactNode } from "react";

// Business Concept: Open Vision - Your Vision, Our Visual Mastery.
// This component provides a detailed case study for Moderne Furnishings.

export default function ModerneFurnishingsCaseStudy() {
  // New Premium & Vibrant Color Palette (reused from Home component)
  const COLOR_PRIMARY_BLUE = "#3B82F6";   // A strong, trustworthy blue
  const COLOR_ACCENT_GREEN = "#10B981";   // A lively, fresh green for highlights
  const COLOR_DARK_TEXT = "#1F2937";    // Dark charcoal for strong contrast
  const COLOR_NEUTRAL_TEXT = "#6B7280"; // A softer gray for body copy

  // Helper for image placeholders (reused from Home component)
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
        className={`rounded-xl shadow-lg transition-transform duration-500 ease-out transform hover:scale-102 ${className}`}
        style={{ objectFit: "cover" }} // Ensure consistent aspect ratio filling
      />
    );
  };

  // Reusable Section Title & Subtitle structure (reused from Home component)
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
    <div className="min-h-screen flex flex-col font-sans antialiased text-gray-800 bg-gray-50">
      {/* Case Study Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-br from-blue-100 to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-gray-900">
            Case Study: <span className="text-blue-600">Moderne Furnishings</span> Visual Transformation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Discover how Open Vision redefined the visual identity and digital presence for a leading furniture brand.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Moderne Furnishings Transformed"
            bgColor={COLOR_PRIMARY_BLUE.replace('#', '')}
            textColor="FFFFFF"
            src={"/images/websitemockup.png"} // Reusing the specific image source from the Home component
            className="w-full h-auto max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The Challenge & Our Approach"
            subtitle="Moderne Furnishings sought to invigorate their brand appeal and enhance online engagement in a competitive market."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-3xl font-bold mb-4" style={{ color: COLOR_PRIMARY_BLUE }}>The Challenge: Outdated Identity & Low Engagement</h3>
              <p className="mb-6">
                Moderne Furnishings, a well-established name in contemporary furniture, faced the challenge of an outdated brand identity and a digital presence that no longer captivated their discerning audience. Their existing website lacked visual appeal and user-friendliness, leading to low engagement rates and missed opportunities in the rapidly evolving e-commerce landscape. They needed a holistic visual overhaul to reflect their premium quality and modern aesthetic.
              </p>
              <h3 className="text-3xl font-bold mb-4" style={{ color: COLOR_PRIMARY_BLUE }}>Our Strategic Approach: A Full-Spectrum Visual Transformation</h3>
              <p>
                Open Vision embarked on a comprehensive journey with Moderne Furnishings, beginning with in-depth market research and stakeholder workshops. Our approach was multifaceted, focusing on re-establishing a strong, aspirational brand identity and translating that into a seamless, visually stunning digital experience. We prioritized user-centric design principles to ensure both beauty and functionality.
              </p>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-3xl font-bold mb-4" style={{ color: COLOR_ACCENT_GREEN }}>Key Focus Areas:</h3>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <span className="font-bold">Brand Strategy & Redesign:</span> Developed a sophisticated new logo, color palette, typography, and visual guidelines.
                </li>
                <li>
                  <span className="font-bold">E-commerce Web Platform:</span> Designed and developed an intuitive, responsive, and visually rich online store.
                </li>
                <li>
                  <span className="font-bold">3D Product Visualization:</span> Created high-definition 3D models and animated renders of furniture for realistic online viewing.
                </li>
                <li>
                  <span className="font-bold">Content & Visual Storytelling:</span> Crafted engaging lifestyle photography guidelines and video concepts.
                </li>
                <li>
                  <span className="font-bold">User Experience (UX) Enhancement:</span> Streamlined navigation, product discovery, and checkout processes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Implementation Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Solutions Implemented & Visual Showcase"
            subtitle="From new brand guidelines to an immersive e-commerce platform, every visual element was meticulously crafted."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="space-y-16">
            {/* Solution 1: Brand Identity */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 bg-white p-8 rounded-xl shadow-xl">
              <div className="md:w-1/2">
                <ImgPlaceholder
                  w={500}
                  h={300}
                  label="Moderne Brand Guidelines"
                  bgColor={COLOR_ACCENT_GREEN.replace('#', '')}
                  textColor="FFFFFF"
                  src={"/images/brand2.jpg"} // Reusing specific image source
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4" style={{ color: COLOR_PRIMARY_BLUE }}>Refined Brand Identity</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We developed a new brand identity that exudes modern luxury and timeless elegance. This included a sophisticated logo, a refined color palette, and a clear typographic hierarchy, all documented in comprehensive brand guidelines to ensure consistency across all touchpoints.
                </p>
              </div>
            </div>

            {/* Solution 2: E-commerce Platform */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 bg-white p-8 rounded-xl shadow-xl">
              <div className="md:w-1/2">
                <ImgPlaceholder
                  w={500}
                  h={300}
                  label="Moderne E-commerce Platform"
                  bgColor={COLOR_PRIMARY_BLUE.replace('#', '')}
                  textColor="FFFFFF"
                  src={"/images/websitemockup.png"} // Reusing specific image source
                />
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h3 className="text-3xl font-bold mb-4" style={{ color: COLOR_PRIMARY_BLUE }}>Intuitive E-commerce Web Platform</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A new, highly responsive e-commerce website was designed from the ground up. It features an intuitive user interface, high-resolution product galleries, and a streamlined checkout process, offering customers a seamless and enjoyable shopping journey.
                </p>
              </div>
            </div>

            {/* Solution 3: 3D Visualization */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 bg-white p-8 rounded-xl shadow-xl">
              <div className="md:w-1/2">
                <ImgPlaceholder
                  w={500}
                  h={300}
                  label="Moderne 3D Product Visualizations"
                  bgColor={COLOR_ACCENT_GREEN.replace('#', '')}
                  textColor="FFFFFF"
                  src={"/images/3d2.jpg"} // Reusing specific image source
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4" style={{ color: COLOR_PRIMARY_BLUE }}>Stunning 3D Product Visualization</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To truly showcase the craftsmanship of Moderne Furnishings' products, we created a series of photorealistic 3D models and animated visualizations. This allowed customers to explore furniture from every angle, significantly enhancing the online browsing experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Tangible Results & Future Outlook"
            subtitle="The comprehensive visual transformation delivered impressive, measurable results for Moderne Furnishings."
            textColor="white" // Ensure text is visible on dark background
            subtextColor="rgba(255, 255, 255, 0.9)" // Slightly transparent white for subtitle
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 bg-blue-700 rounded-xl shadow-lg">
              <div className="text-5xl font-extrabold mb-2">40%<span className="text-accent-green">+</span></div>
              <p className="text-xl font-semibold">Increase in Website Traffic</p>
            </div>
            <div className="p-6 sm:p-8 bg-blue-700 rounded-xl shadow-lg">
              <div className="text-5xl font-extrabold mb-2">25%<span className="text-accent-green">+</span></div>
              <p className="text-xl font-semibold">Rise in Premium Product Sales</p>
            </div>
            <div className="p-6 sm:p-8 bg-blue-700 rounded-xl shadow-lg">
              <div className="text-5xl font-extrabold mb-2">90%<span className="text-accent-green">+</span></div>
              <p className="text-xl font-semibold">Positive Brand Sentiment</p>
            </div>
          </div>
          <p className="mt-12 text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            This project not only revitalized Moderne Furnishings' brand image but also significantly boosted their digital performance and market standing. Open Vision continues to partner with Moderne Furnishings on ongoing digital strategies, ensuring sustained growth and innovation.
          </p>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="py-12 text-center bg-gray-50">
        <a
          href="/"
          className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
        >
          <i className="fas fa-arrow-left mr-2 sm:mr-3"></i> Back to Home
        </a>
      </div>
    </div>
  );
}
