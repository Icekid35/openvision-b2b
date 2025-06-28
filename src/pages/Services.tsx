import { ReactNode } from "react";

export default function ServicesPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
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

  const services = [
    {
      icon: "fas fa-desktop",
      title: "Custom Web Development",
      desc: "Crafting bespoke, high-performance websites tailored to your unique business needs and objectives.",
      imgLabel: "Custom Web Dev",
      src: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Design (UI/UX)",
      desc: "Designing intuitive and engaging user interfaces for iOS and Android mobile applications.",
      imgLabel: "Mobile UI/UX",
      src: "/images/ui.png",
    },
    {
      icon: "fas fa-bullseye",
      title: "Strategic Brand Identity",
      desc: "Developing powerful and memorable brand identities that resonate with your target audience.",
      imgLabel: "Brand Identity",
      src: "/images/brand.png",
    },
    {
      icon: "fas fa-photo-video",
      title: "Corporate Video Production",
      desc: "Producing high-quality corporate videos, documentaries, and promotional content.",
      imgLabel: "Corporate Video",
      src: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-pen-nib",
      title: "Graphic Design & Illustration",
      desc: "Creating stunning visual assets, infographics, and custom illustrations for all platforms.",
      imgLabel: "Graphic Design",
      src: "/images/digital.png",
    },
    {
      icon: "fas fa-vr-cardboard",
      title: "Immersive AR/VR Experiences",
      desc: "Developing captivating augmented and virtual reality experiences for marketing and training.",
      imgLabel: "AR/VR Experience",
      src: "images/vr.jpg",
    },
    {
      icon: "fas fa-chart-line",
      title: "SEO & Content Strategy",
      desc: "Optimizing your digital presence with strategic content to improve search engine rankings and visibility.",
      imgLabel: "SEO Strategy",
      src: "images/seo.jpg",
    },
    {
      icon: "fas fa-ad",
      title: "Paid Media Campaigns",
      desc: "Managing effective PPC, social media, and display advertising campaigns for maximum ROI.",
      imgLabel: "Paid Media",
      src: "https://images.pexels.com/photos/262035/pexels-photo-262035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-cogs",
      title: "API Integration & Development",
      desc: "Seamlessly integrating third-party APIs and building custom backend functionalities.",
      imgLabel: "API Integration",
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-database",
      title: "Data Visualization",
      desc: "Transforming complex data into clear, interactive, and actionable visual insights.",
      imgLabel: "Data Viz",
      src: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-users",
      title: "User Research & Testing",
      desc: "Conducting in-depth user research and usability testing to refine digital products.",
      imgLabel: "User Research",
      src: "https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions Consulting",
      desc: "Providing expert guidance and implementation for scalable cloud-based infrastructure.",
      imgLabel: "Cloud Consulting",
      src: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-cubes",
      title: "3D Modeling & Animation",
      desc: "Creating realistic or stylized 3D models and animations for various applications.",
      imgLabel: "3D Modeling",
      src: "/images/3d.png",
    },
    {
      icon: "fas fa-robot",
      title: "AI/ML Integration (Visual)",
      desc: "Integrating AI and Machine Learning for advanced visual recognition and automation.",
      imgLabel: "AI Visuals",
      src: "https://images.pexels.com/photos/5923838/pexels-photo-5923838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-microphone-alt",
      title: "Podcast & Audio Visuals",
      desc: "Designing engaging visuals and motion graphics for podcasts and audio content.",
      imgLabel: "Podcast Visuals",
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Custom Software Solutions",
      desc: "Developing tailored software applications to meet specific operational demands.",
      imgLabel: "Custom Software",
      src: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section
        id="services-list"
        className="relative bg-gray-50 px-4 py-16 pt-24 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Our Comprehensive Range of Visual & Digital Services"
            subtitle="Explore our extensive suite of services designed to elevate your brand's presence and drive measurable results across all digital touchpoints."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-8"
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
                    bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                    textColor="FFFFFF"
                    className="h-[200px] w-[350px]"
                  />
                </div>
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
