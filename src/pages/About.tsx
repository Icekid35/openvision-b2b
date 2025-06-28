import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function AboutUsPage() {
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
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 pt-24 sm:px-8 sm:py-24 sm:pt-48">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            About <span className="text-blue-600">Open Vision</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            We are a leading digital creative agency dedicated to transforming
            visions into compelling visual realities.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Our Journey: From Vision to Visual Mastery"
            subtitle="Born from a passion for design and technology, Open Vision has grown into a trusted partner for enterprises seeking unparalleled visual solutions."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div className="text-lg leading-relaxed text-gray-700">
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Genesis of Open Vision
              </h3>
              <p className="mb-6">
                Open Vision was founded on the principle that every great idea
                deserves to be seen. What began as a small team of passionate
                designers and developers has blossomed into a full-fledged
                digital creative agency, serving a diverse portfolio of
                enterprise clients across various industries. Our journey has
                been defined by a relentless pursuit of visual excellence and a
                commitment to innovation.
              </p>
              <p className="mb-6">
                We observed a growing need for integrated visual solutions that
                go beyond mere aesthetics. Businesses needed partners who could
                not only create stunning visuals but also understand their
                strategic objectives and deliver measurable impact. This
                understanding became the cornerstone of our service philosophy.
              </p>
            </div>
            <div className="text-lg leading-relaxed text-gray-700">
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Philosophy: Creativity Meets Strategy
              </h3>
              <p className="mb-6">
                At Open Vision, we believe that design is not just about making
                things look good; it's about solving problems, communicating
                effectively, and driving results. Our philosophy blends artistic
                creativity with strategic thinking, ensuring that every visual
                solution we craft is purposeful, impactful, and aligned with
                your business goals. We thrive on challenges and transform them
                into opportunities for visual innovation.
              </p>
              <p>
                We are constantly evolving, staying ahead of industry trends and
                adopting cutting-edge technologies to provide our clients with
                the most advanced and effective visual communication tools
                available. Our success is directly tied to the success of our
                clients, fostering long-term partnerships built on trust and
                mutual growth.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <ImgPlaceholder
              w={800}
              h={450}
              label="Open Vision Team Culture"
              bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
              textColor="FFFFFF"
              src={"images/teamculture.jpg"}
              className="h-auto w-full max-w-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Core Values That Drive Us"
            subtitle="Our commitment to excellence is rooted in a set of core values that guide every project and interaction."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 text-center shadow-xl sm:p-8">
              <div
                className="mb-4 text-5xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                <i className="fas fa-handshake"></i>
              </div>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Client Partnership
              </h3>
              <p className="text-gray-700">
                We prioritize transparent and collaborative relationships,
                working as an extension of your team to achieve shared success.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl sm:p-8">
              <div
                className="mb-4 text-5xl"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Innovation & Excellence
              </h3>
              <p className="text-gray-700">
                We are committed to pushing creative boundaries and delivering
                solutions that are not only beautiful but also groundbreaking
                and effective.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-xl sm:p-8">
              <div
                className="mb-4 text-5xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                <i className="fas fa-users"></i>
              </div>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Integrity & Transparency
              </h3>
              <p className="text-gray-700">
                Honesty and clear communication are at the heart of everything
                we do, fostering trust and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeader
            title="Meet Our Visionaries"
            subtitle="Our diverse team of experts is the driving force behind every successful visual masterpiece."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            {[
              {
                name: "Dr. Icekid Smart",
                title: "Chief Creative Officer",
                avatarSrc:
                  "https://placehold.co/80x80/6f42c1/ffffff/png?text=IC",
                alt: "Icekid Smart",
              },
              {
                name: "Mr. David Chen",
                title: "Head of Digital Strategy",
                avatarSrc:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
                alt: "David Chen",
              },
              {
                name: "Ms. Anya Sharma",
                title: "Lead UI/UX Designer",
                avatarSrc:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
                alt: "Anya Sharma",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl bg-gray-50 p-6 shadow-md"
              >
                <ImgPlaceholder
                  src={member.avatarSrc}
                  alt={member.alt}
                  w={128}
                  h={128}
                  className="mb-4 !h-32 !w-32 rounded-full object-cover"
                />
                <h3
                  className="text-xl font-bold"
                  style={{ color: COLOR_PRIMARY_BLUE }}
                >
                  {member.name}
                </h3>
                <p className="text-md text-gray-700">{member.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
          to="/team"
              className="inline-flex transform items-center rounded-lg bg-green-500 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-600"
            >
              View Full Team <i className="fas fa-users-cog ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Partner with Open Vision Today
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Let's create something extraordinary together and elevate your
            brand's visual presence.
          </p>
          <Link
                    to="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Get in Touch <i className="fas fa-envelope ml-3"></i>
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
