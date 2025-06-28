import { Link } from "react-router-dom";

export default function VideoEngagementBlogPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";

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

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            How High-Quality{" "}
            <span className="text-blue-600">Video Boosts B2B Engagement</span>
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-lg text-gray-600 sm:text-xl md:text-2xl">
            June 10, 2025 | Category: Video Production
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Video Engagement B2B"
            bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
            textColor="FFFFFF"
            src="/images/videob2b.jpg"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <p>
            In the competitive B2B landscape, standing out and effectively
            communicating complex solutions is paramount. While traditional
            methods have their place, high-quality video content has emerged as
            a powerful, indispensable tool for capturing attention, building
            trust, and driving engagement throughout the business-to-business
            sales funnel.
          </p>
          <p>
            Unlike static text or images, video offers a dynamic, immersive
            experience that can convey a wealth of information in a short amount
            of time. It allows businesses to tell their story, showcase their
            products or services in action, and connect with decision-makers on
            a deeper, more personal level.
          </p>

          <h2
            className="mb-4 text-3xl font-bold"
            style={{ color: COLOR_PRIMARY_BLUE }}
          >
            Why B2B Needs High-Quality Video
          </h2>
          <ul className="ml-4 list-inside list-disc space-y-2">
            <li>
              <span className="font-semibold">Simplifies Complex Ideas:</span>{" "}
              Explainer videos can break down intricate processes or technical
              products into easily understandable visual narratives.
            </li>
            <li>
              <span className="font-semibold">Builds Trust & Credibility:</span>{" "}
              Professional video content signals expertise, reliability, and
              attention to detail. Testimonial videos add a human touch.
            </li>
            <li>
              <span className="font-semibold">
                Increases Website Dwell Time:
              </span>{" "}
              Visitors spend more time on pages with video, improving SEO and
              providing more opportunities for conversion.
            </li>
            <li>
              <span className="font-semibold">Boosts Conversion Rates:</span>{" "}
              Studies show video can significantly increase lead generation and
              sales for B2B companies.
            </li>
            <li>
              <span className="font-semibold">
                Enhances Sales & Marketing Efforts:
              </span>{" "}
              Video is versatile, fitting into email campaigns, social media,
              sales presentations, and trade shows.
            </li>
          </ul>

          <h2
            className="mb-4 text-3xl font-bold"
            style={{ color: COLOR_PRIMARY_BLUE }}
          >
            Types of B2B Videos That Drive Engagement
          </h2>
          <p className="mb-4">
            To maximize engagement, consider these video formats:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2">
            <li>
              <span className="font-semibold">Explainer Videos:</span> Animated
              or live-action videos that clearly articulate your solution or
              value proposition.
            </li>
            <li>
              <span className="font-semibold">Product Demos:</span> Showcasing
              your product's features and benefits in real-world scenarios.
            </li>
            <li>
              <span className="font-semibold">Testimonial Videos:</span>{" "}
              Authentic endorsements from satisfied clients, building social
              proof.
            </li>
            <li>
              <span className="font-semibold">Thought Leadership Videos:</span>{" "}
              Interviews with industry experts or company leaders, establishing
              authority.
            </li>
            <li>
              <span className="font-semibold">Company Culture Videos:</span>{" "}
              Offering a glimpse into your team and values, attracting talent
              and partners.
            </li>
          </ul>

          <ImgPlaceholder
            w={600}
            h={350}
            label="B2B Video Marketing"
            bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
            textColor="FFFFFF"
            src="/images/video.png"
            className="mx-auto my-8 h-auto w-full max-w-2xl"
          />

          <p>
            The quality of your video directly impacts its effectiveness.
            Pixelated footage, poor audio, or uninspired storytelling can
            undermine your message. That's why investing in professional video
            production is critical for B2B success. At Open Vision, we
            specialize in creating high-quality, impactful videos that resonate
            with your target audience and help you achieve your business
            objectives.
          </p>

          <p className="mt-8 italic text-gray-600">
            Ready to integrate powerful video into your B2B strategy?{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact Us
            </Link>{" "}
            for a consultation on your video production needs.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 text-center">
        <a
          href="/blog"
          className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
        >
          <i className="fas fa-arrow-left mr-2 sm:mr-3"></i> Back to All
          Insights
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
