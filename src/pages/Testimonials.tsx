import { ReactNode } from "react";

export default function TestimonialsPage() {
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

  const testimonials = [
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
      avatarSrc: "https://placehold.co/80x80/6f42c1/ffffff/png?text=JK",
      alt: "Jessica Kim Avatar",
    },
    {
      quote:
        "“The attention to detail and strategic thinking from Open Vision's design team is unparalleled. Our new branding has truly elevated our market position.”",
      name: "Dr. Alex Johnson",
      title: "Founder, BioInnovate Labs",
      avatarSrc:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
      alt: "Alex Johnson Avatar",
    },
    {
      quote:
        "“Open Vision delivered a responsive website that not only looks fantastic but also performs exceptionally well across all devices. A truly professional partner.”",
      name: "Emily White",
      title: "Operations Manager, Global Logistics",
      avatarSrc: "https://placehold.co/80x80/10B981/ffffff/png?text=EW",
      alt: "Emily White Avatar",
    },
    {
      quote:
        "“Their team's ability to translate complex ideas into visually digestible content is remarkable. Our clients now understand our solutions better than ever.”",
      name: "Daniel Lee",
      title: "CTO, FinBridge Solutions",
      avatarSrc: "https://placehold.co/80x80/10B981/ffffff/png?text=DL",
      alt: "Daniel Lee Avatar",
    },
    {
      quote:
        "“We are incredibly impressed with the 3D visualizations for our new product line. Open Vision brought our concepts to life with stunning realism.”",
      name: "Sophia Martinez",
      title: "Product Designer, Innovate Tech",
      avatarSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
      alt: "Sophia Martinez Avatar",
    },
    {
      quote:
        "“The digital marketing campaign designed by Open Vision significantly boosted our online engagement and lead generation. They truly understand visual impact.”",
      name: "Mark Thompson",
      title: "Sales Director, Prime Realty",
      avatarSrc: "https://placehold.co/80x80/10B981/ffffff/png?text=MT",
      alt: "Mark Thompson Avatar",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            What Our <span className="text-blue-600">Clients Say</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Hear directly from the businesses we've helped elevate their visual
            communication and digital presence.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Voices of Success: Client Testimonials"
            subtitle="Our work is best spoken for by the clients whose visions we've transformed into reality."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="hover:scale-102 flex flex-col items-center rounded-xl bg-gradient-to-br from-blue-50 to-green-50 p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8"
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
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Ready to Share Your Success Story?
          </h2>
          <p className="mb-10 text-lg opacity-90 sm:text-xl md:text-2xl">
            Join our growing list of satisfied clients who have achieved
            remarkable visual impact.
          </p>
          <a
            href="/contact"
            className="inline-flex transform items-center rounded-xl bg-green-500 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            Get in Touch <i className="fas fa-envelope ml-3"></i>
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
