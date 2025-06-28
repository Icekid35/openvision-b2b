import { ReactNode } from "react";

export default function BlogPage() {
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

  const blogPosts = [
    {
      title: "The Power of Visual Storytelling in Modern Branding",
      date: "June 20, 2025",
      excerpt:
        "Discover how compelling visual narratives can captivate your audience and build lasting brand connections...",
      imgLabel: "Visual Storytelling",
      src: "/images/visualstory.jpg",
      link: "/blog/visual-storytelling",
      category: "Branding",
    },
    {
      title: "UI/UX Trends That Will Define 2026",
      date: "June 15, 2025",
      excerpt:
        "Stay ahead of the curve with our insights into the next generation of user interface and experience design...",
      imgLabel: "UI/UX Trends",
      src: "/images/uitrend.jpg",
      link: "/blog/ui-ux-trends",
      category: "Design",
    },
    {
      title: "How High-Quality Video Boosts B2B Engagement",
      date: "June 10, 2025",
      excerpt:
        "Learn why professional video content is no longer optional for businesses seeking to connect with clients...",
      imgLabel: "Video Engagement B2B",
      src: "/images/videob2b.jpg",
      link: "/blog/video-engagement",
      category: "Video Production",
    },
    {
      title: "The Anatomy of a High-Converting Website",
      date: "June 05, 2025",
      excerpt:
        "Unpack the essential elements that make a website not just look good, but perform exceptionally...",
      imgLabel: "High-Converting Website",
      src: "/images/converingwebsite.jpg",
      link: "/blog/high-converting-website",
      category: "Web Design",
    },
    {
      title: "Maximizing ROI with Data-Driven Digital Marketing",
      date: "May 28, 2025",
      excerpt:
        "Leverage analytics and strategic insights to optimize your digital marketing spend and achieve better returns...",
      imgLabel: "Digital Marketing ROI",
      src: "/images/digitalroi.jpg",
      link: "/blog/data-driven-marketing",
      category: "Marketing",
    },
    {
      title: "The Future of Immersive Experiences: AR & VR in Business",
      date: "May 22, 2025",
      excerpt:
        "Explore how augmented and virtual reality are transforming industries and creating new customer touchpoints...",
      imgLabel: "AR/VR in Business",
      src: "/images/arvr.jpg",
      link: "/blog/future-of-immersive-tech",
      category: "Immersive Tech",
    },
    {
      title: "Choosing the Right Color Palette for Your Brand",
      date: "May 15, 2025",
      excerpt:
        "A guide to understanding color psychology and selecting the perfect palette to convey your brand's message...",
      imgLabel: "Color Palette Guide",
      src: "/images/colorpallete.jpg",
      link: "/blog/brand-color-palette",
      category: "Branding",
    },
    {
      title: "Beyond the Logo: Crafting a Comprehensive Brand Identity",
      date: "May 08, 2025",
      excerpt:
        "Your logo is just the beginning. Learn about all the elements that contribute to a strong, cohesive brand identity...",
      imgLabel: "Comprehensive Branding",
      src: "/images/brand.png",
      link: "/blog/comprehensive-brand-identity",
      category: "Branding",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 pt-24 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Latest <span className="text-blue-600">Insights & Blog</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Stay ahead with our expert articles on visual trends, design best
            practices, digital marketing strategies, and creative industry news.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Our Latest Articles & Resources"
            subtitle="Dive into our curated collection of insights designed to empower your business with visual intelligence."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                className="hover:scale-102 block rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex w-full justify-center overflow-hidden rounded-t-xl">
                  <ImgPlaceholder
                    w={400}
                    h={250}
                    label={post.imgLabel}
                    bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                    textColor="FFFFFF"
                    src={post.src}
                    className="h-[250px] w-full rounded-t-xl object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="mb-2 block text-sm font-semibold uppercase text-blue-600">
                    {post.category}
                  </span>
                  <h3
                    className="mb-2 text-lg font-bold sm:text-xl"
                    style={{ color: COLOR_DARK_TEXT }}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-3 text-xs text-gray-500 sm:mb-4 sm:text-sm">
                    {post.date}
                  </p>
                  <p className="sm:text-md mb-4 text-sm leading-relaxed text-gray-700">
                    {post.excerpt}
                  </p>
                  <p className="sm:text-md text-sm font-medium text-blue-600">
                    Read More{" "}
                    <i className="fas fa-arrow-right ml-1 text-xs sm:text-sm"></i>
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <button
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700"
              onClick={() => {}}
            >
              Load More Posts <i className="fas fa-redo ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
            style={{ color: COLOR_DARK_TEXT }}
          >
            Subscribe to Our Newsletter
          </h2>
          <p
            className="mb-10 text-lg sm:text-xl md:text-2xl"
            style={{ color: COLOR_NEUTRAL_TEXT }}
          >
            Get the latest insights, trends, and creative inspiration directly
            in your inbox.
          </p>
          <form className="mx-auto flex max-w-xl flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow rounded-xl border border-gray-300 p-4 text-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-blue-600 sm:text-xl"
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="transform rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
            >
              Subscribe <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
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
