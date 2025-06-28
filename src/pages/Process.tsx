import { ReactNode } from "react";

export default function ProcessDetailsPage() {
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

  const processSteps = [
    {
      step: "1. Ideation & Comprehensive Briefing",
      desc: "Every great project begins with a deep understanding of your vision. We kick off with extensive consultations and workshops to gather your requirements, define objectives, target audience, and key performance indicators. This foundational step ensures alignment and clarity from the outset.",
      icon: "fas fa-lightbulb",
      imgLabel: "Ideation Workshop",
      src: "https://placehold.co/400x250/3B82F6/FFFFFF?text=Ideation+Briefing",
    },
    {
      step: "2. Strategic Conceptualization & Planning",
      desc: "Once we have a clear brief, our creative and strategic teams collaborate to develop innovative concepts. This includes mood boards, wireframes, storyboards, and a detailed project roadmap outlining timelines, deliverables, and resource allocation. We ensure every idea is viable and impactful.",
      icon: "fas fa-pencil-ruler",
      imgLabel: "Conceptual Planning",
      src: "https://placehold.co/400x250/10B981/FFFFFF?text=Strategic+Planning",
    },
    {
      step: "3. Design Prototyping & Iteration",
      desc: "The design phase brings concepts to life. We craft initial designs, interactive prototypes, and visual mock-ups, allowing you to visualize and interact with the solution. This is an iterative process, with continuous feedback loops to refine and perfect the design based on your input.",
      icon: "fas fa-paint-brush",
      imgLabel: "Design Iteration",
      src: "https://placehold.co/400x250/3B82F6/FFFFFF?text=Design+Prototyping",
    },
    {
      step: "4. Production, Development & Refinement",
      desc: "With approved designs, our technical experts proceed with full-scale production and development. This includes coding websites, animating videos, building 3D models, or integrating complex systems. Rigorous testing and quality assurance are embedded throughout this stage to ensure flawless execution.",
      icon: "fas fa-code",
      imgLabel: "Development & Production",
      src: "https://placehold.co/400x250/10B981/FFFFFF?text=Production+Dev",
    },
    {
      step: "5. Final Delivery, Launch & Optimization",
      desc: "Upon completion and final client approval, we manage the seamless deployment and launch of your project. Our commitment extends beyond launch, offering ongoing support, performance monitoring, and iterative optimization to ensure your visual solutions continue to deliver maximum impact and return on investment.",
      icon: "fas fa-bullseye",
      imgLabel: "Launch & Optimization",
      src: "https://placehold.co/400x250/3B82F6/FFFFFF?text=Delivery+Optimize",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 pt-24 sm:px-8 sm:py-24 sm:pt-48">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Our Streamlined{" "}
            <span className="text-blue-600">Visual Creation Process</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            A collaborative and agile methodology ensuring transparency,
            efficiency, and exceptional results.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Step-by-Step: How We Bring Your Vision to Life"
            subtitle="Our proven process is designed for clarity, collaboration, and consistent delivery of high-quality visual solutions."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="relative space-y-16">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 rounded-xl bg-gray-50 p-8 shadow-xl sm:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                  <div
                    className="mb-4 text-5xl sm:text-6xl"
                    style={{ color: COLOR_PRIMARY_BLUE }}
                  >
                    <i className={step.icon}></i>
                  </div>
                  <h3
                    className="mb-4 text-3xl font-bold"
                    style={{ color: COLOR_PRIMARY_BLUE }}
                  >
                    {step.step}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {step.desc}
                  </p>
                </div>
                <div className="flex items-center justify-center md:w-1/2">
                  <ImgPlaceholder
                    w={400}
                    h={250}
                    label={step.imgLabel}
                    bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                    textColor="FFFFFF"
                    src={step.src}
                    className="h-auto w-full max-w-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to Start Your Project?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's discuss your unique needs and how our process can deliver
            exceptional visual solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Schedule a Free Consultation{" "}
            <i className="fas fa-calendar-alt ml-3"></i>
          </a>
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
