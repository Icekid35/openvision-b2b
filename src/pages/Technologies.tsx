import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function TechnologiesDetailsPage() {
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

  const technologies = [
    {
      icon: "fas fa-paint-brush",
      title: "Adobe Creative Suite",
      desc: "Mastering Photoshop, Illustrator, InDesign, Premiere Pro, and After Effects for unparalleled visual creativity.",
      imgLabel: "Adobe Suite",
      src: "https://placehold.co/350x200/3B82F6/FFFFFF?text=Adobe+Suite",
    },
    {
      icon: "fas fa-cube",
      title: "Blender & Cinema 4D",
      desc: "Advanced 3D modeling, sculpting, rendering, and animation to bring concepts to life in three dimensions.",
      imgLabel: "3D Software",
      src: "https://placehold.co/350x200/10B981/FFFFFF?text=Blender+C4D",
    },
    {
      icon: "fas fa-code",
      title: "React & Next.js",
      desc: "Building modern, high-performance, and scalable web applications with cutting-edge front-end frameworks.",
      imgLabel: "React Next.js",
      src: "https://placehold.co/350x200/3B82F6/FFFFFF?text=React+Next",
    },
    {
      icon: "fas fa-vector-square",
      title: "Figma & Sketch",
      desc: "Collaborative UI/UX design, rapid prototyping, and efficient creation of design systems for consistent experiences.",
      imgLabel: "Figma Sketch",
      src: "https://placehold.co/350x200/10B981/FFFFFF?text=Figma+Sketch",
    },
    {
      icon: "fas fa-video",
      title: "DaVinci Resolve & Final Cut Pro",
      desc: "Professional video editing, color grading, motion graphics, and audio post-production for cinematic results.",
      imgLabel: "Video Editing",
      src: "https://placehold.co/350x200/3B82F6/FFFFFF?text=DaVinci+FCP",
    },
    {
      icon: "fas fa-laptop-code",
      title: "Webflow & Framer",
      desc: "Leveraging no-code/low-code platforms for visually rich, responsive websites and interactive prototypes with speed.",
      imgLabel: "No-code Platforms",
      src: "https://placehold.co/350x200/10B981/FFFFFF?text=Webflow+Framer",
    },
    {
      icon: "fas fa-vr-cardboard",
      title: "Unity & Unreal Engine",
      desc: "Developing immersive augmented and virtual reality applications and interactive 3D experiences.",
      imgLabel: "AR/VR Engines",
      src: "https://placehold.co/350x200/3B82F6/FFFFFF?text=Unity+Unreal",
    },
    {
      icon: "fas fa-chart-bar",
      title: "Tableau & Power BI",
      desc: "Transforming complex datasets into clear, actionable, and interactive data visualizations for strategic insights.",
      imgLabel: "Data Analytics",
      src: "https://placehold.co/350x200/10B981/FFFFFF?text=Tableau+PowerBI",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Swift & Kotlin",
      desc: "Native iOS and Android app development, ensuring high performance, security, and platform-specific user experiences.",
      imgLabel: "Mobile Dev",
      src: "https://placehold.co/350x200/3B82F6/FFFFFF?text=Swift+Kotlin",
    },
    {
      icon: "fas fa-server",
      title: "AWS & Azure",
      desc: "Building scalable, secure, and robust cloud infrastructure solutions for reliable digital product deployment.",
      imgLabel: "Cloud Platforms",
      src: "https://placehold.co/350x200/10B981/FFFFFF?text=AWS+Azure",
    },
    {
      icon: "fas fa-database",
      title: "SQL & NoSQL Databases",
      desc: "Designing and managing efficient database solutions (e.g., PostgreSQL, MongoDB) for diverse data storage needs.",
      imgLabel: "Databases",
      src: "https://placehold.co/350x200/3B82F6/FFFFFF?text=SQL+NoSQL",
    },
    {
      icon: "fas fa-robot",
      title: "TensorFlow & PyTorch",
      desc: "Implementing advanced AI and Machine Learning models for intelligent automation and data processing.",
      imgLabel: "AI/ML Frameworks",
      src: "https://placehold.co/350x200/10B981/FFFFFF?text=TF+PyTorch",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Our <span className="text-blue-600">Cutting-Edge Tech Stack</span> &
            Tools
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Leveraging the industry's most powerful software and innovative
            platforms for unparalleled precision and creativity.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="A Deep Dive into Our Toolkit"
            subtitle="We meticulously select and master the best technologies to ensure your project's success and future scalability."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-8"
              >
                <div
                  className="mb-4 text-5xl sm:mb-6 sm:text-6xl"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  <i className={tech.icon}></i>
                </div>
                <h3
                  className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl"
                  style={{ color: COLOR_DARK_TEXT }}
                >
                  {tech.title}
                </h3>
                <p className="text-md mb-5 text-gray-600 sm:mb-6 sm:text-lg">
                  {tech.desc}
                </p>
                <div className="mt-auto flex w-full justify-center">
                  <ImgPlaceholder
                    src={tech.src}
                    w={350}
                    h={200}
                    label={tech.imgLabel}
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

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to Build with Cutting-Edge Tech?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's discuss how our expert use of technology can bring your
            innovative ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Connect with Our Tech Team{" "}
            <i className="fas fa-arrow-right ml-3"></i>
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
