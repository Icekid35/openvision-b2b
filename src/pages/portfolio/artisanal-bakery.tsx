import { ReactNode } from "react";

export default function ArtisanalBakeryPortfolioPage() {
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
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            <span className="text-blue-600">Artisanal Bakery:</span> E-commerce
            Platform Development
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Creating a delightful and efficient online storefront for a beloved
            local bakery.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="Bakery E-commerce"
            bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
            textColor="FFFFFF"
            src="https://placehold.co/900x500/10B981/FFFFFF?text=Artisanal+Bakery+E-commerce"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="The Challenge & Our Solution"
            subtitle="Artisanal Bakery, known for its delectable handcrafted goods, needed an online presence that mirrored its charming in-store experience and streamlined order management."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Challenge: Bridging Online and Offline Charm
              </h3>
              <p className="mb-6">
                Artisanal Bakery had built a loyal local following based on the
                quality of their products and the warmth of their customer
                service. However, their digital footprint was minimal, limiting
                their reach and efficiency for online orders, especially for
                custom cakes and catering. The challenge was to create an
                e-commerce platform that not only showcased their beautiful
                products effectively but also provided a seamless and enjoyable
                online ordering experience, reflecting their unique brand charm.
              </p>
            </div>
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Solution: A Visually Rich, User-Friendly E-commerce Site
              </h3>
              <p>
                Open Vision designed and developed a custom e-commerce website
                that extended Artisanal Bakery's delightful in-store experience
                online. We focused on high-quality product photography,
                intuitive navigation, and a simplified checkout process. The
                platform was built to handle varied product types, including
                customizable items and catering orders, ensuring operational
                efficiency for the bakery and a delightful experience for
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Key Deliverables & Project Highlights"
            subtitle="A sweet and seamless online shopping experience for handcrafted delights."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Custom E-commerce Design
              </h3>
              <p className="mb-4">
                Developed a unique and appealing design that highlights the
                artisanal quality of the bakery's products, using warm colors
                and inviting visuals.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Bakery Website Design"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Bakery+Website+Design"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Streamlined Order Management System
              </h3>
              <p className="mb-4">
                Integrated a robust backend system for efficient management of
                product inventory, online orders, customer data, and
                customizable items like cakes.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Order Management"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Order+Management"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl bg-white p-6 shadow-md md:col-span-2">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                High-Quality Product Galleries
              </h3>
              <p className="mb-4">
                Implemented stunning, zoomable product galleries featuring
                professional photography to showcase the details and appeal of
                each baked good.
              </p>
              <ImgPlaceholder
                w={800}
                h={250}
                label="Product Photography"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/800x250/10B981/FFFFFF?text=Product+Photography"
                className="mt-4 h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Impact & Measurable Results"
            subtitle="The new e-commerce platform delighted customers and significantly boosted online sales for Artisanal Bakery."
            textColor="white"
            subtextColor="rgba(255, 255, 255, 0.9)"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                60%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">Increase in Online Orders</p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                25%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">Growth in Customer Base</p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">9/10</div>
              <p className="text-xl font-semibold">User Satisfaction Score</p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed opacity-90">
            Artisanal Bakery's new e-commerce platform successfully translated
            their beloved brand experience online, making their delicious
            products accessible to a wider audience and streamlining operations
            for sustainable growth.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-12 text-center">
        <a
          href="/portfolio"
          className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
        >
          <i className="fas fa-arrow-left mr-2 sm:mr-3"></i> Back to Portfolio
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
