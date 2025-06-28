import { useEffect, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
  const COLOR_ACCENT_GREEN = "#10B981";
  const COLOR_DARK_TEXT = "#1F2937";
  const COLOR_NEUTRAL_TEXT = "#6B7280";
   const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "linear",
      // once: true,
      offset: 80,
      mirror: true,
    });
  }, []);

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
    <div className="flex min-h-screen max-w-[100vw] flex-col overflow-hidden bg-gray-50 font-sans text-gray-800 antialiased">
      <section
        id="hero-section"
        className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 pt-24 sm:px-8 sm:py-24 sm:pt-48"

      >
        <div className="absolute inset-0 z-0 opacity-100">
          {" "}
          <div className="animate-blob animation-delay-0 absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-blue-300 opacity-80 mix-blend-multiply blur-3xl filter sm:h-96 sm:w-96"></div>
          <div className="animate-blob animation-delay-2000 absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-green-300 opacity-80 mix-blend-multiply blur-3xl filter sm:h-96 sm:w-96"></div>
          <div className="animate-blob animation-delay-4000 absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-3xl filter sm:h-96 sm:w-96"></div>
        </div>
        <div className="absolute inset-0 z-[5] bg-gradient-to-br from-blue-100/10 to-green-50/10"></div>{" "}
        {/* <i className="fas fa-brush absolute left-10 top-10 rotate-45 transform text-6xl text-blue-400 opacity-20"></i> */}
        <i className="fas fa-palette -rotate-30 absolute bottom-10 right-10 transform text-6xl text-green-400 opacity-20"></i>
        <i className="fas fa-magic absolute left-5 top-1/2 -translate-y-1/2 transform text-5xl text-purple-400 opacity-20"></i>
        <i className="fas fa-lightbulb absolute bottom-5 left-1/4 text-5xl text-yellow-400 opacity-20"></i>
        <i className="fas fa-vector-square rotate-15 absolute right-1/4 top-5 transform text-5xl text-pink-400 opacity-20"></i>
        <div
          className="relative z-20 mx-auto flex max-w-6xl translate-y-0 flex-col items-center justify-between gap-8 opacity-100 transition-none md:flex-row md:gap-16"
          id="hero-content"
          data-aos="fade-right"
          
        >
          <div         
          data-aos="fade-up"
        
         className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
              Your Vision, Our{" "}
              <span className="text-blue-600">Visual Mastery</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:mx-0 md:text-2xl">
              Open Vision delivers comprehensive visual solutions, from stunning
              web designs and powerful branding to captivating video production
              and immersive digital experiences.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6 md:justify-start">
              <Link
                to="/services"
                className="flex transform items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-700 sm:gap-3 sm:px-8 sm:py-4 sm:text-xl"
              >
                Explore Services <i className="fas fa-palette"></i>
              </Link>
              <Link
                to="/contact"
                className="border-600 flex transform items-center justify-center gap-2 rounded-xl border-2 bg-white px-6 py-3 text-lg font-bold text-blue-600 shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-50 sm:gap-3 sm:px-8 sm:py-4 sm:text-xl"
              >
                Get a Quote <i className="fas fa-tags"></i>
              </Link>
            </div>
          </div>
          <div        
           data-aos="fade-left"
        
         className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2">
            <ImgPlaceholder
              src={"/images/heromockup.png"}
              w={600}
              h={400}
              label="Creative Digital Solutions"
              bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
              textColor="FFFFFF"
              className="h-auto w-full max-w-sm md:max-w-full"
            />
          </div>
        </div>
      </section>

      <section
        className="relative bg-white px-4 py-12 shadow-inner sm:px-8 sm:py-16"
        data-aos="fade-up"
        
        id="trust-bar"
      >
        <i className="fas fa-shapes absolute -top-8 left-1/4 -rotate-12 transform text-4xl text-gray-300 opacity-50"></i>
        <i className="fas fa-paint-roller absolute -bottom-6 right-1/3 rotate-12 transform text-4xl text-gray-300 opacity-50"></i>
        <i className="fas fa-hands-helping absolute right-5 top-5 text-5xl text-blue-200 opacity-30"></i>
        <i className="fas fa-rocket -rotate-15 absolute bottom-5 left-5 transform text-5xl text-green-200 opacity-30"></i>
        <i className="fas fa-star absolute left-10 top-1/2 -translate-y-1/2 rotate-90 transform text-4xl text-yellow-200 opacity-30"></i>
        <i className="fas fa-lightbulb absolute bottom-1/4 right-1/4 text-4xl text-purple-200 opacity-30"></i>
        <div className="mx-auto max-w-6xl transform text-center transition-all duration-1000">
          {" "}
          <h3 className="mb-6 text-xl font-semibold text-gray-700 sm:mb-8 sm:text-2xl">
            Trusted by leading brands across industries
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {[
              {
                src: "https://logo.clearbit.com/shopify.com",
                alt: "Shopify Logo",
              },
              {
                src: "https://logo.clearbit.com/figma.com",
                alt: "Figma Logo",
              },
              {
                src: "https://logo.clearbit.com/stripe.com",
                alt: "Stripe Logo",
              },
              {
                src: "https://logo.clearbit.com/airtable.com",
                alt: "Airtable Logo",
              },
              {
                src: "https://logo.clearbit.com/loom.com",
                alt: "Loom Logo",
              },
              {
                src: "https://logo.clearbit.com/notion.so",
                alt: "Notion Logo",
              },
              {
                src: "https://logo.clearbit.com/linear.app",
                alt: "Linear Logo",
              },
              {
                src: "https://logo.clearbit.com/posthog.com",
                alt: "PostHog Logo",
              },
            ].map((client, i) => (
              <ImgPlaceholder
                key={i}
                src={client.src}
                alt={client.alt}
                w={60}
                h={60}
                className="cursor-pointer !rounded-md object-contain !shadow-none grayscale transition-all duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="relative bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
      >
        <i className="fas fa-code absolute -top-10 right-1/4 rotate-12 transform text-5xl text-blue-300 opacity-50"></i>
        <i className="fas fa-mobile-alt left-1/5 absolute bottom-0 -rotate-12 transform text-5xl text-green-300 opacity-50"></i>
        <i className="fas fa-bezier-curve absolute left-10 top-10 -rotate-45 transform text-6xl text-purple-300 opacity-30"></i>
        <i className="fas fa-paint-brush rotate-60 absolute bottom-10 right-5 transform text-6xl text-pink-300 opacity-30"></i>
        <i className="fas fa-cube absolute right-10 top-1/2 translate-y-1/2 transform text-5xl text-teal-300 opacity-30"></i>
        <i className="fas fa-film absolute bottom-5 left-1/3 text-5xl text-orange-300 opacity-30"></i>
        <div className="mx-auto max-w-6xl transform transition-all duration-1000">
          {" "}
          <SectionHeader
            title="Our Comprehensive Visual Solutions"
            subtitle="We craft compelling visual narratives and digital experiences that captivate your audience and elevate your brand across all platforms."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "fas fa-laptop-code",
                title: "Web Design & Development",
                desc: "Creating intuitive, responsive websites and web applications that are both beautiful and highly functional.",
                imgLabel: "Modern Web Design",
                imgBgColor: COLOR_PRIMARY_BLUE.replace("#", ""),
                src: "images/websitemockup.png",
              },
              {
                icon: "fas fa-drafting-compass",
                title: "Brand & Graphic Design",
                desc: "Developing powerful brand identities, logos, and visual assets that leave a lasting impression.",
                imgLabel: "Brand Identity Design",
                imgBgColor: COLOR_ACCENT_GREEN.replace("#", ""),
                src: "images/brand.png",
              },
              {
                icon: "fas fa-film",
                title: "Video Production & Animation",
                desc: "Producing captivating corporate videos, explainer animations, and promotional content.",
                imgLabel: "Professional Video Production",
                imgBgColor: COLOR_PRIMARY_BLUE.replace("#", ""),
                src: "images/video.png",
              },
              {
                icon: "fas fa-mobile-alt",
                title: "UI/UX & Product Design",
                desc: "Designing seamless and delightful user experiences for web and mobile applications, focusing on conversion.",
                imgLabel: "User Interface Design",
                imgBgColor: COLOR_ACCENT_GREEN.replace("#", ""),
                src: "images/ui.png",
              },
              {
                icon: "fas fa-bullhorn",
                title: "Digital Marketing & Campaigns",
                desc: "Visually-driven digital strategies including social media, display ads, and email campaigns.",
                imgLabel: "Digital Marketing Campaign",
                imgBgColor: COLOR_PRIMARY_BLUE.replace("#", ""),
                src: "images/digital.png",
              },
              {
                icon: "fas fa-cubes",
                title: "3D Modeling & Visualization",
                desc: "Bringing products and concepts to life with stunning 3D models, renders, and immersive experiences.",
                imgLabel: "3D Product Visualization",
                imgBgColor: COLOR_ACCENT_GREEN.replace("#", ""),
                src: "images/3d.png",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-8"
                data-aos="zoom-in"
                data-aos-delay={ isMobile ? 0 : 100 + i * 100}
              >
                <div
                  className="mb-4 text-5xl sm:mb-6 sm:text-6xl"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  <i className={service.icon}></i>
                </div>
                <h3
                  className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl"
                  style={{ color: COLOR_DARK_TEXT }}
                >
                  {service.title}
                </h3>
                <p className="text-md mb-5 text-gray-600 sm:mb-6 sm:text-lg">
                  {service.desc}
                </p>
                <div className="mt-auto flex w-full justify-center">
                  <ImgPlaceholder
                    src={service.src}
                    w={350}
                    h={200}
                    label={service.imgLabel}
                    bgColor={service.imgBgColor}
                    textColor="FFFFFF"
                    className="h-[200px] w-[350px]"
                  />{" "}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/services"
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
            >
              View All Services{" "}
              <i className="fas fa-arrow-right ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="industries"
        className="relative overflow-hidden bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
      >
        <i className="fas fa-chart-pie absolute -top-8 left-1/3 z-20 -rotate-6 transform text-5xl text-gray-300 opacity-70"></i>
        <i className="fas fa-map-marker-alt absolute bottom-0 right-1/4 z-20 rotate-6 transform text-5xl text-gray-300 opacity-70"></i>
        <i className="fas fa-building rotate-15 absolute right-10 top-10 transform text-6xl text-blue-300 opacity-20"></i>
        <i className="fas fa-hospital -rotate-20 absolute bottom-10 left-10 transform text-6xl text-green-300 opacity-20"></i>
        <i className="fas fa-flask absolute left-5 top-1/4 text-5xl text-purple-300 opacity-20"></i>
        <i className="fas fa-dollar-sign absolute bottom-1/4 right-5 text-5xl text-yellow-300 opacity-20"></i>
        <div
          className={`relative z-20 mx-auto max-w-6xl transform text-center transition-all duration-1000`}
        >
          {" "}
          <SectionHeader
            title="Empowering Diverse Industries with Visual Innovation"
            subtitle="Our expertise spans a wide array of sectors, delivering tailored visual solutions that resonate with specific market needs and drive industry-leading results."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                icon: "fas fa-industry",
                title: "Manufacturing",
                desc: "Visuals for operational efficiency & product showcases.",
              },
              {
                icon: "fas fa-hospital",
                title: "Healthcare",
                desc: "Clear communication for complex medical solutions.",
              },
              {
                icon: "fas fa-university",
                title: "Education",
                desc: "Engaging content for learning platforms & institutional branding.",
              },
              {
                icon: "fas fa-dollar-sign",
                title: "Finance",
                desc: "Trust-building design for financial services & fintech.",
              },
              {
                icon: "fas fa-store",
                title: "Retail & E-commerce",
                desc: "Captivating product visuals & seamless online shopping experiences.",
              },
              {
                icon: "fas fa-seedling",
                title: "Agriculture",
                desc: "Modernizing agricultural brands & presenting innovations visually.",
              },
              {
                icon: "fas fa-building",
                title: "Real Estate",
                desc: "Immersive property tours & compelling marketing materials.",
              },
              {
                icon: "fas fa-truck",
                title: "Logistics",
                desc: "Streamlining complex supply chains with clear visual data.",
              },
            ].map((industry, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={ isMobile ? 0 : 100 + i * 80}
              >
                <div
                  className="mb-3 text-4xl sm:text-5xl"
                  style={{ color: COLOR_ACCENT_GREEN }}
                >
                  <i className={industry.icon}></i>
                </div>
                <h3
                  className="mb-2 text-xl font-bold sm:text-2xl"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  {industry.title}
                </h3>
                <p className="sm:text-md text-sm text-gray-600">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/industries"
              className="inline-flex transform items-center rounded-lg bg-green-500 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-600 sm:px-8 sm:py-4"
            >
              Explore All Industries{" "}
              <i className="fas fa-briefcase ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
        id="impact"
      >
        <div className="absolute inset-x-0 bottom-0 h-[200px] overflow-hidden">
          <div
            className="wave-layer-1 absolute bottom-0 left-0 h-full w-[200%] bg-blue-600"
            style={{ borderRadius: "50% 50% 0 0 / 100px 100px 0 0" }}
          ></div>
          <div
            className="wave-layer-2 absolute bottom-0 left-0 h-full w-[200%] bg-blue-500 opacity-70"
            style={{ borderRadius: "50% 50% 0 0 / 110px 110px 0 0" }}
          ></div>
        </div>
        <i className="fas fa-chart-line absolute left-1/4 top-10 rotate-12 transform text-6xl text-blue-300 opacity-20"></i>
        <i className="fas fa-trophy absolute bottom-10 right-1/4 -rotate-12 transform text-6xl text-yellow-300 opacity-20"></i>
        <i className="fas fa-award absolute left-5 top-1/2 -translate-y-1/2 transform text-5xl text-green-300 opacity-20"></i>
        <i className="fas fa-check-circle absolute bottom-5 right-5 text-5xl text-red-300 opacity-20"></i>
        <div
          className={`relative z-10 mx-auto max-w-6xl transform text-center transition-all duration-1000`}
        >
          {" "}
          <SectionHeader
            title="Driving Tangible Impact Through Design"
            subtitle="Our visual solutions are crafted not just for aesthetics, but to deliver measurable business outcomes and elevate your brand presence."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            {[
              {
                stat: "200+",
                label: "Brand Identities Launched",
                icon: "fas fa-award",
              },
              {
                stat: "95%",
                label: "Client Project Success",
                icon: "fas fa-check-circle",
              },
              {
                stat: "50%+",
                label: "Avg. Website Engagement",
                icon: "fas fa-chart-line",
              },
              {
                stat: "7+",
                label: "Industry Design Awards",
                icon: "fas fa-trophy",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="transform rounded-xl bg-blue-600/80 p-6 text-white shadow-lg backdrop-blur-sm backdrop-filter transition-all duration-300 hover:scale-105 sm:p-8"
                data-aos="zoom-in"
                data-aos-delay={ isMobile ? 0 : 100 + i * 100}
              >
                {" "}
                <div
                  className="mb-3 text-5xl sm:mb-4 sm:text-6xl"
                  style={{ color: COLOR_ACCENT_GREEN }}
                >
                  <i className={item.icon}></i>
                </div>
                <p className="mb-1 text-4xl font-extrabold sm:mb-2 sm:text-5xl">
                  {item.stat}
                </p>
                <p className="text-lg font-semibold sm:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
        id="featured-project"
      >
        <i className="fas fa-lightbulb left-1/5 absolute -top-8 rotate-6 transform text-5xl text-purple-400 opacity-50"></i>
        <i className="fas fa-star absolute bottom-0 right-1/4 -rotate-12 transform text-4xl text-yellow-400 opacity-50"></i>
        <i className="fas fa-chart-bar -rotate-15 absolute right-5 top-5 transform text-6xl text-blue-300 opacity-20"></i>
        <i className="fas fa-rocket rotate-20 absolute bottom-5 left-5 transform text-6xl text-green-300 opacity-20"></i>
        <i className="fas fa-eye absolute right-10 top-1/3 text-5xl text-pink-300 opacity-20"></i>
        <i className="fas fa-cogs absolute bottom-1/3 left-10 text-5xl text-teal-300 opacity-20"></i>
        <div
          className={`mx-auto max-w-6xl transform transition-all duration-1000`}
        >
          {" "}
          <SectionHeader
            title="Featured Case Study: Elevating Brand Presence"
            subtitle="Discover how we transformed 'Moderne Furnishings' into an aspirational lifestyle brand with a complete visual overhaul and digital redesign."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="flex flex-col items-center gap-8 rounded-xl bg-white p-8 shadow-xl sm:gap-12 sm:p-12 md:flex-row">
            <div className="w-full md:w-1/2">
              <ImgPlaceholder
                src={"images/ecommerce.png"}
                w={600}
                h={400}
                label="Modern Furnishings Rebrand"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
              />
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h3
                className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The{" "}
                <span className="font-bold">
                  "Moderne Furnishings" Visual Transformation
                </span>
              </h3>
              <p className="text-md mb-6 leading-relaxed text-gray-600 sm:mb-8 sm:text-lg">
                Moderne Furnishings sought to refresh their brand identity and
                create a more engaging online presence. Open Vision executed a
                full spectrum visual transformation, including new brand
                guidelines, a stunning e-commerce website redesign, and a series
                of high-quality product visualization videos. This resulted in a{" "}
                <span className="font-bold">
                  40% increase in website traffic
                </span>{" "}
                and a{" "}
                <span className="font-bold">
                  25% rise in premium product sales
                </span>{" "}
                within the first year.
              </p>
              <ul className="text-md mb-6 list-inside list-disc space-y-2 text-gray-600 sm:mb-8 sm:text-lg">
                <li>Comprehensive brand strategy & logo redesign.</li>
                <li>Intuitive, visually-rich e-commerce web platform.</li>
                <li>High-definition 3D product rendering & animation.</li>
                <li>Integrated content strategy for visual storytelling.</li>
              </ul>
              <Link
                to="/case-studies/moderne-furnishings"
                className="inline-flex transform items-center rounded-lg bg-green-500 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-600 sm:px-8 sm:py-4"
              >
                View Full Case Study{" "}
                <i className="fas fa-chevron-right ml-2 sm:ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
        id="process"
      >
        <i className="fas fa-clipboard-list absolute -top-8 left-1/4 -rotate-6 transform text-5xl text-teal-400 opacity-50"></i>
        <i className="fas fa-sync-alt absolute bottom-0 right-1/3 rotate-12 transform text-4xl text-orange-400 opacity-50"></i>
        <i className="fas fa-sitemap -rotate-20 absolute right-10 top-10 transform text-6xl text-blue-300 opacity-20"></i>
        <i className="fas fa-sitemap rotate-25 absolute bottom-10 left-10 transform text-6xl text-green-300 opacity-20"></i>
        <i className="fas fa-route absolute left-5 top-1/3 text-5xl text-purple-300 opacity-20"></i>
        <i className="fas fa-hourglass-half absolute bottom-1/3 right-5 text-5xl text-yellow-300 opacity-20"></i>
        <div
          className={`mx-auto max-w-6xl transform transition-all duration-1000`}
        >
          {" "}
          <SectionHeader
            title="Our Streamlined Visual Creation Process"
            subtitle="We follow a collaborative and agile methodology to ensure transparency, efficiency, and exceptional results for every visual project."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="relative flex flex-col items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <div className="absolute left-0 right-0 top-[calc(50%+16px)] z-0 mx-16 hidden h-1 bg-gray-200 md:block"></div>

            {[
              {
                step: "1. Ideate & Brief",
                desc: "Understanding your vision, objectives, and creative requirements.",
                icon: "fas fa-lightbulb",
              },
              {
                step: "2. Conceptualize & Plan",
                desc: "Developing creative concepts, mood boards, and detailed project plans.",
                icon: "fas fa-pencil-ruler",
              },
              {
                step: "3. Design & Iterate",
                desc: "Crafting initial designs, prototypes, or storyboards with client feedback.",
                icon: "fas fa-paint-brush",
              },
              {
                step: "4. Produce & Refine",
                desc: "Bringing designs to life, from coding websites to animating videos.",
                icon: "fas fa-code",
              },
              {
                step: "5. Deliver & Optimize",
                desc: "Final delivery, launch, and ongoing support for sustained visual impact.",
                icon: "fas fa-bullseye",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative z-10 flex w-full flex-col items-center rounded-xl border-b-4 border-blue-600 bg-gray-50 p-5 text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg md:w-1/5"
                data-aos="fade-up"
                data-aos-delay={ isMobile ? 0 : 100 + i * 100}
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white sm:mb-4 sm:h-16 sm:w-16 sm:text-3xl">
                  <i className={p.icon}></i>
                </div>
                <h3
                  className="mb-2 text-lg font-bold sm:text-xl"
                  style={{ color: COLOR_DARK_TEXT }}
                >
                  {p.step}
                </h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/process-details"
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
            >
              Learn More About Our Process{" "}
              <i className="fas fa-cogs ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="technologies"
        className="relative bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
      >
        <i className="fas fa-bezier-curve right-1/5 absolute -top-8 -rotate-6 transform text-5xl text-pink-400 opacity-50"></i>
        <i className="fas fa-code-branch absolute bottom-0 left-1/4 rotate-12 transform text-4xl text-purple-400 opacity-50"></i>
        <i className="fas fa-laptop-code rotate-30 absolute left-10 top-10 transform text-6xl text-blue-300 opacity-20"></i>
        <i className="fas fa-cube -rotate-40 absolute bottom-10 right-10 transform text-6xl text-green-300 opacity-20"></i>
        <i className="fas fa-vr-cardboard absolute left-5 top-1/2 -translate-y-1/2 transform text-5xl text-yellow-300 opacity-20"></i>
        <i className="fas fa-chart-bar absolute bottom-5 right-1/3 text-5xl text-orange-300 opacity-20"></i>
        <div
          className={`mx-auto max-w-6xl transform transition-all duration-1000`}
        >
          {" "}
          <SectionHeader
            title="Cutting-Edge Technologies & Tools We Master"
            subtitle="We leverage the industry's most powerful software and innovative platforms to bring your visual projects to life with unparalleled precision and creativity."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                icon: "fas fa-paint-brush",
                title: "Adobe Creative Suite",
                desc: "Photoshop, Illustrator, InDesign, Premiere Pro, After Effects.",
              },
              {
                icon: "fas fa-cube",
                title: "Blender & Cinema 4D",
                desc: "Advanced 3D modeling, animation, and rendering for stunning visuals.",
              },
              {
                icon: "fas fa-code",
                title: "React & Next.js",
                desc: "Building modern, high-performance web applications and dynamic sites.",
              },
              {
                icon: "fas fa-vector-square",
                title: "Figma & Sketch",
                desc: "Collaborative UI/UX design, prototyping, and design system creation.",
              },
              {
                icon: "fas fa-video",
                title: "DaVinci Resolve",
                desc: "Professional video editing, color grading, and visual effects.",
              },
              {
                icon: "fas fa-laptop-code",
                title: "Webflow",
                desc: "No-code/low-code development for visually rich, responsive websites.",
              },
              {
                icon: "fas fa-vr-cardboard",
                title: "Unity & Unreal Engine",
                desc: "Creating immersive AR/VR experiences and interactive 3D content.",
              },
              {
                icon: "fas fa-chart-bar",
                title: "Tableau & Power BI",
                desc: "Transforming complex data into clear, actionable visual insights.",
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
                data-aos="zoom-in"
                data-aos-delay={ isMobile ? 0 : 80 + i * 80}
              >
                <div
                  className="mb-3 text-4xl sm:text-5xl"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  <i className={tech.icon}></i>
                </div>
                <h3
                  className="mb-2 text-xl font-bold sm:text-2xl"
                  style={{ color: COLOR_DARK_TEXT }}
                >
                  {tech.title}
                </h3>
                <p className="sm:text-md text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/technologies-details"
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
            >
              Explore Our Tech Stack{" "}
              <i className="fas fa-tools ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
        id="about"
      >
        <div
          className={`mx-auto max-w-6xl transform transition-all duration-1000`}
        >
          {" "}
          <SectionHeader
            title="Why Partner with Open Vision for Your Visual Needs?"
            subtitle="We blend creativity with strategic thinking to deliver visual solutions that not only look stunning but also achieve your business objectives."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <i className="fas fa-check-circle rotate-15 absolute left-10 top-10 transform text-6xl text-blue-300 opacity-20"></i>
          <i className="fas fa-lightbulb -rotate-25 absolute bottom-10 right-10 transform text-6xl text-green-300 opacity-20"></i>
          <i className="fas fa-handshake absolute right-5 top-1/4 text-5xl text-yellow-300 opacity-20"></i>
          <i className="fas fa-chart-line absolute bottom-1/4 left-5 text-5xl text-red-300 opacity-20"></i>
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-16 md:grid-cols-2">
            <div>
              <ul className="text-md space-y-6 text-gray-700 sm:space-y-8 sm:text-lg">
                <li className="flex items-start">
                  <i className="fas fa-check-circle mr-3 mt-1 flex-shrink-0 text-2xl text-blue-600 sm:mr-4 sm:text-3xl"></i>
                  <div>
                    <h4
                      className="mb-1 text-lg font-bold sm:text-xl"
                      style={{ color: COLOR_DARK_TEXT }}
                    >
                      Holistic Visual Solutions
                    </h4>
                    From brand identity and web design to engaging video and
                    immersive experiences, we cover every aspect of your visual
                    communication.
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-lightbulb mr-3 mt-1 flex-shrink-0 text-2xl text-green-500 sm:mr-4 sm:text-3xl"></i>
                  <div>
                    <h4
                      className="mb-1 text-lg font-bold sm:text-xl"
                      style={{ color: COLOR_DARK_TEXT }}
                    >
                      Creative Innovation
                    </h4>
                    Our team of award-winning designers and creative
                    technologists are constantly pushing boundaries to deliver
                    fresh, impactful visuals.
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-handshake mr-3 mt-1 flex-shrink-0 text-2xl text-yellow-500 sm:mr-4 sm:text-3xl"></i>
                  <div>
                    <h4
                      className="mb-1 text-lg font-bold sm:text-xl"
                      style={{ color: COLOR_DARK_TEXT }}
                    >
                      Client-Centric Partnership
                    </h4>
                    We work hand-in-hand with your team, ensuring transparency,
                    collaboration, and solutions that perfectly align with your
                    brand's vision.
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chart-bar mr-3 mt-1 flex-shrink-0 text-2xl text-red-500 sm:mr-4 sm:text-3xl"></i>
                  <div>
                    <h4
                      className="mb-1 text-lg font-bold sm:text-xl"
                      style={{ color: COLOR_DARK_TEXT }}
                    >
                      Measurable Visual Impact
                    </h4>
                    Our designs aren't just aesthetically pleasing; they're
                    strategically crafted to enhance engagement, drive
                    conversions, and grow your brand.
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8 flex w-full justify-center md:mt-0" data-aos="fade-left" >
              <ImgPlaceholder
                src={"images/growth.png"}
                w={600}
                h={450}
                label="Creative Team Collaboration"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                className="h-auto w-full max-w-sm md:max-w-full"
              />
            </div>
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/about-us"
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
            >
              Discover Our Story{" "}
              <i className="fas fa-info-circle ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
        id="testimonials"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="What Our Valued Clients Say"
            subtitle="Hear directly from the businesses we've helped elevate their visual communication and digital presence."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <i className="fas fa-quote-right absolute right-10 top-10 rotate-12 transform text-6xl text-blue-300 opacity-20"></i>
          <i className="fas fa-quote-left absolute bottom-10 left-10 -rotate-12 transform text-6xl text-green-300 opacity-20"></i>
          <i className="fas fa-comment-dots absolute left-5 top-1/2 -translate-y-1/2 transform text-5xl text-purple-300 opacity-20"></i>
          <i className="fas fa-star-half-alt absolute bottom-5 right-1/4 text-5xl text-yellow-300 opacity-20"></i>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "“Open Vision completely transformed our brand identity and delivered a website that truly reflects our premium services. Outstanding work!”",
                name: "Sarah Chen",
                title: "Marketing Director, Elite Holdings",
                avatarSrc:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
                alt: "Sarah Chen Avatar",
              },
              {
                quote:
                  "“The video production team at Open Vision created an animated explainer that perfectly communicates our complex product. Highly recommended!”",
                name: "Michael Ramirez",
                title: "Product Manager, TechSolutions Inc.",
                avatarSrc:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
                alt: "Michael Ramirez Avatar",
              },
              {
                quote:
                  "“Our new e-commerce site designed by Open Vision is visually stunning and incredibly user-friendly. We've seen a significant increase in sales.”",
                name: "Jessica Kim",
                title: "CEO, Global Retail Co.",
                avatarSrc:
                  "https://placehold.co/80x80/6f42c1/ffffff/png?text=JK",
                alt: "Jessica Kim Avatar",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-gradient-to-br from-blue-50 to-green-50 p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8"
                data-aos="zoom-in"
                data-aos-delay={ isMobile ? 0 : 100 + i * 120}
              >
                <blockquote className="text-md mb-4 font-medium italic leading-relaxed text-gray-700 sm:mb-6 sm:text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto">
                  <ImgPlaceholder
                    src={testimonial.avatarSrc}
                    alt={testimonial.alt}
                    className="mx-auto mb-3 !h-16 !w-16 rounded-full sm:mb-4 sm:!h-20 sm:!w-20"
                    w={80}
                    h={80}
                  />
                  <p className="text-md font-bold text-gray-800 sm:text-lg">
                    {testimonial.name}
                  </p>
                  <p className="sm:text-md text-sm text-gray-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/testimonials-page"
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
            >
              Read More Testimonials{" "}
              <i className="fas fa-comment-alt ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24"
        data-aos="fade-up"
        
        id="blog"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Latest Insights from Open Vision"
            subtitle="Stay ahead with our expert articles on visual trends, design best practices, digital marketing strategies, and creative industry news."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <i className="fas fa-newspaper -rotate-15 absolute left-10 top-10 transform text-6xl text-blue-300 opacity-20"></i>
          <i className="fas fa-pen-nib rotate-20 absolute bottom-10 right-10 transform text-6xl text-green-300 opacity-20"></i>
          <i className="fas fa-lightbulb absolute right-5 top-1/2 -translate-y-1/2 transform text-5xl text-purple-300 opacity-20"></i>
          <i className="fas fa-chart-line absolute bottom-5 left-1/4 text-5xl text-yellow-300 opacity-20"></i>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Power of Visual Storytelling in Modern Branding",
                date: "June 20, 2025",
                imgLabel: "Visual Storytelling",
                link: "/blog/visual-storytelling",
                src: "/images/visualstory.jpg",
              },
              {
                title: "UI/UX Trends That Will Define 2026",
                date: "June 15, 2025",
                imgLabel: "UI/UX Trends",
                link: "/blog/ui-ux-trends",
                src: "/images/uitrend.jpg",
              },
              {
                title: "How High-Quality Video Boosts B2B Engagement",
                date: "June 10, 2025",
                imgLabel: "Video Engagement B2B",
                link: "/blog/video-engagement",
                src: "/images/videob2b.jpg",
              },
            ].map((post, i) => (
              <Link
                key={i}
                to={post.link}
                className="hover:scale-102 block rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={ isMobile ? 0 : 100 + i * 120}
              >
                <div className="flex w-full justify-center overflow-hidden rounded-t-xl">
                  <ImgPlaceholder
                    w={400}
                    h={250}
                    src={post.src}
                    bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                    textColor="FFFFFF"
                    className="h-[250px] w-[400px] rounded-t-xl object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3
                    className="mb-2 text-lg font-bold sm:text-xl"
                    style={{ color: COLOR_DARK_TEXT }}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-3 text-xs text-gray-500 sm:mb-4 sm:text-sm">
                    {post.date}
                  </p>
                  <p className="sm:text-md text-sm text-gray-700">
                    Read More{" "}
                    <i className="fas fa-arrow-right ml-1 text-xs sm:text-sm"></i>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/blog"
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
            >
              View All Insights{" "}
              <i className="fas fa-book-open ml-2 sm:ml-3"></i>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="flex min-h-[400px] items-center justify-center bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24"

        id="contact"
      >
        <div className="mx-auto max-w-4xl">
          {/* UI Elements/Shapes for CTA Section */}
          <i className="fas fa-comment rotate-15 absolute left-10 top-10 transform text-6xl text-blue-400 opacity-30"></i>
          <i className="fas fa-envelope -rotate-15 absolute bottom-10 right-10 transform text-6xl text-green-400 opacity-30"></i>
          <i className="fas fa-phone-alt absolute right-5 top-1/2 -translate-y-1/2 transform text-5xl text-purple-400 opacity-30"></i>
          <i className="fas fa-calendar-check absolute bottom-5 left-1/4 text-5xl text-yellow-400 opacity-30"></i>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:mb-8 sm:text-5xl md:text-6xl">
            Ready to Amplify Your Brand Visually?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:mb-12 sm:text-xl md:text-2xl">
            Let's discuss how Open Vision can craft stunning visuals and digital
            experiences for your enterprise.
          </p>
          <Link
            to="/contact"
            className="inline-flex transform items-center justify-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600 sm:gap-4 sm:px-10 sm:py-5 sm:text-2xl"
          >
            Schedule a Consultation <i className="fas fa-calendar-alt"></i>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(100px, -150px) scale(1.3);
          }
          66% {
            transform: translate(-80px, 80px) scale(0.7);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 4s infinite ease-in-out;
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes wave-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes wave-vertical {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .wave-layer-1 {
            animation: wave-horizontal 15s linear infinite, wave-vertical 8s ease-in-out infinite;
            filter: blur(0.5px);
        }

        .wave-layer-2 {
            animation: wave-horizontal 15s linear infinite, wave-vertical 8s ease-in-out infinite;
            animation-delay: -7.5s;
            filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
}
