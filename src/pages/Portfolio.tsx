import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
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

  const portfolioProjects = [
    {
      title: "Harmony Health - Brand & Web Redesign",
      category: "Healthcare, Branding, Web",
      imgSrc: "https://placehold.co/400x250/3B82F6/FFFFFF?text=Harmony+Health",
      link: "/portfolio/harmony-health",
    },
    {
      title: "Global Eco Solutions - Animated Explainer Video",
      category: "Energy, Video Production",
      imgSrc:
        "https://placehold.co/400x250/10B981/FFFFFF?text=Eco+Solutions+Video",
      link: "/portfolio/global-eco-solutions",
    },
    {
      title: "Nexus Fintech - UI/UX & Mobile App",
      category: "Finance, UI/UX, Mobile",
      imgSrc:
        "https://placehold.co/400x250/3B82F6/FFFFFF?text=Nexus+Fintech+App",
      link: "/portfolio/nexus-fintech",
    },
    {
      title: "Artisanal Bakery - E-commerce Platform",
      category: "Retail, Web Development",
      imgSrc:
        "https://placehold.co/400x250/10B981/FFFFFF?text=Bakery+E-commerce",
      link: "/portfolio/artisanal-bakery",
    },
    {
      title: "Urban Green Spaces - 3D Architectural Visualization",
      category: "Real Estate, 3D Visualization",
      imgSrc:
        "https://placehold.co/400x250/3B82F6/FFFFFF?text=Urban+Green+Spaces",
      link: "/portfolio/urban-green-spaces",
    },
    {
      title: "Quantum AI Labs - Digital Marketing Campaign",
      category: "Technology, Digital Marketing",
      imgSrc:
        "https://placehold.co/400x250/10B981/FFFFFF?text=Quantum+AI+Marketing",
      link: "/portfolio/quantum-ai-labs",
    },
    {
      title: "EduLink - Interactive Learning Platform",
      category: "Education, Web Development",
      imgSrc:
        "https://placehold.co/400x250/3B82F6/FFFFFF?text=EduLink+Platform",
      link: "/portfolio/edulink",
    },
    {
      title: "AeroFleet Logistics - Data Visualization Dashboard",
      category: "Logistics, Data Visualization",
      imgSrc:
        "https://placehold.co/400x250/10B981/FFFFFF?text=AeroFleet+Dashboard",
      link: "/portfolio/aerofleet-logistics",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 pt-24 sm:px-8 sm:py-24 sm:pt-48">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Our <span className="text-blue-600">Creative Portfolio</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Explore a curated selection of our diverse projects that showcase
            our visual mastery and impact.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Projects That Speak Volumes"
            subtitle="From intricate web designs to immersive digital experiences, our portfolio reflects our passion for visual innovation."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, i) => (
              <Link
                key={i}
                to={project.link}
                className="hover:scale-102 block rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex w-full justify-center overflow-hidden rounded-t-xl">
                  <ImgPlaceholder
                    w={400}
                    h={250}
                    label={project.title}
                    bgColor={
                      i % 2 === 0
                        ? COLOR_PRIMARY_BLUE.replace("#", "")
                        : COLOR_ACCENT_GREEN.replace("#", "")
                    }
                    textColor="FFFFFF"
                    src={project.imgSrc}
                    className="h-[250px] w-full rounded-t-xl object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="mb-2 block text-sm font-semibold uppercase text-blue-600">
                    {project.category}
                  </span>
                  <h3
                    className="mb-2 text-lg font-bold sm:text-xl"
                    style={{ color: COLOR_DARK_TEXT }}
                  >
                    {project.title}
                  </h3>
                  <p className="sm:text-md text-sm text-gray-700">
                    View Project{" "}
                    <i className="fas fa-arrow-right ml-1 text-xs sm:text-sm"></i>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center sm:mt-16">
            <button
              className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700"
              onClick={() => {}}
            >
              Load More Projects <i className="fas fa-redo ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to Feature Your Project in Our Portfolio?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's discuss how Open Vision can create your next success story.
          </p>
          <Link
            to="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Start a Project <i className="fas fa-pencil-alt ml-3"></i>
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
