import { ReactNode } from "react";

export default function TeamPage() {
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

  const teamMembers = [
    {
      name: "Dr. Icekid Smart",
      title: "Chief Creative Officer",
      bio: "Icekid leads our creative vision, blending artistic innovation with strategic insight to deliver impactful visual solutions.",
      avatarSrc: "https://placehold.co/80x80/6f42c1/ffffff/png?text=IC",
      alt: "Icekid Smart",
    },
    {
      name: "Mr. David Chen",
      title: "Head of Digital Strategy",
      bio: "David is the architect of our digital strategies, ensuring that every visual campaign delivers measurable business outcomes.",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
      alt: "David Chen",
    },
    {
      name: "Ms. Anya Sharma",
      title: "Lead UI/UX Designer",
      bio: "Anya crafts seamless and delightful user experiences, focusing on intuitive interfaces that captivate and convert.",
      avatarSrc:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
      alt: "Anya Sharma",
    },
    {
      name: "Dr. Marcus Thorne",
      title: "Senior 3D Artist",
      bio: "Marcus brings products and concepts to life with breathtakingly realistic 3D models and immersive visualizations.",
      avatarSrc:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
      alt: "Marcus Thorne",
    },
    {
      name: "Ms. Isabella Rossi",
      title: "Video Production Lead",
      bio: "Isabella directs and produces captivating corporate videos and animations, turning stories into cinematic experiences.",
      avatarSrc: "https://placehold.co/80x80/10B981/ffffff/png?text=IR",
      alt: "Isabella Rossi",
    },
    {
      name: "Mr. Kenji Tanaka",
      title: "Lead Web Developer",
      bio: "Kenji builds robust, scalable, and cutting-edge web platforms that are both highly functional and beautifully integrated.",
      avatarSrc: "https://placehold.co/80x80/3B82F6/ffffff/png?text=KT",
      alt: "Kenji Tanaka",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Meet Our <span className="text-blue-600">Visionary Team</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Our diverse group of experts, innovators, and creative minds is
            dedicated to bringing your vision to life.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="The Minds Behind the Mastery"
            subtitle="Meet the talented individuals who drive Open Vision's commitment to excellence and innovation."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <ImgPlaceholder
                  src={member.avatarSrc}
                  alt={member.alt}
                  w={128}
                  h={128}
                  className="mb-4 !h-36 !w-36 rounded-full border-4 border-blue-200 object-cover"
                />
                <h3
                  className="mb-1 text-2xl font-bold"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  {member.name}
                </h3>
                <p className="mb-3 text-lg text-gray-700">{member.title}</p>
                <p className="text-md leading-relaxed text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeader
            title="Our Collaborative Culture"
            subtitle="We foster an environment of innovation, collaboration, and continuous learning, ensuring the best outcomes for our clients."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-xl">
              <i
                className="fas fa-users-cog mb-4 text-6xl"
                style={{ color: COLOR_ACCENT_GREEN }}
              ></i>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Synergistic Collaboration
              </h3>
              <p className="text-lg text-gray-700">
                Our team's diverse skills and perspectives come together
                seamlessly, ensuring every project benefits from a wealth of
                expertise and creative input.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-xl">
              <i
                className="fas fa-brain mb-4 text-6xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              ></i>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Continuous Innovation
              </h3>
              <p className="text-lg text-gray-700">
                We are lifelong learners, constantly exploring new technologies
                and methodologies to deliver cutting-edge visual solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to Collaborate with Our Experts?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's connect and discuss how our team can bring your most ambitious
            visual projects to fruition.
          </p>
          <a
            href="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Contact Our Team <i className="fas fa-envelope ml-3"></i>
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
