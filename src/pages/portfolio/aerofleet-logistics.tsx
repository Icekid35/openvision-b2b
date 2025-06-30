import { ReactNode } from "react";

export default function AeroFleetLogisticsPortfolioPage() {
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
            <span className="text-blue-600">AeroFleet Logistics:</span> Data
            Visualization Dashboard
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Transforming complex logistics data into actionable insights through
            an intuitive, real-time dashboard.
          </p>
          <ImgPlaceholder
            w={900}
            h={500}
            label="AeroFleet Dashboard"
            bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
            textColor="FFFFFF"
            src="https://placehold.co/900x500/10B981/FFFFFF?text=AeroFleet+Dashboard+Overview"
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="The Challenge & Our Solution"
            subtitle="AeroFleet Logistics struggled with vast amounts of operational data, making it difficult to identify inefficiencies and make real-time decisions for their global fleet."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                The Challenge: Data Overload in Logistics
              </h3>
              <p className="mb-6">
                AeroFleet Logistics managed a complex global network of
                shipments, vehicles, and personnel, generating an overwhelming
                volume of data daily. Analyzing this raw data to identify
                operational bottlenecks, optimize routes, or predict maintenance
                needs was a time-consuming and inefficient process. They needed
                a solution that could synthesize this data into clear,
                actionable insights for rapid decision-making.
              </p>
            </div>
            <div>
              <h3
                className="mb-4 text-3xl font-bold"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                Our Solution: Intuitive Data Visualization Dashboard
              </h3>
              <p>
                Open Visual designed and developed a custom, real-time data
                visualization dashboard for AeroFleet Logistics. Our solution
                transformed disparate data points into interactive charts, maps,
                and graphs, providing a clear overview of fleet performance,
                delivery statuses, resource allocation, and predictive
                maintenance alerts. The dashboard offered a centralized,
                intuitive interface for decision-makers to quickly grasp complex
                operational dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 text-lg leading-relaxed text-gray-700">
          <SectionHeader
            title="Key Deliverables & Project Highlights"
            subtitle="A dynamic dashboard providing comprehensive insights for optimal logistics management."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Real-time Fleet Tracking Map
              </h3>
              <p className="mb-4">
                An interactive map displaying the live location and status of
                all vehicles, enabling dispatchers to monitor operations and
                react instantly to changes.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Fleet Tracking Map"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Fleet+Tracking+Map"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Performance & Efficiency Metrics
              </h3>
              <p className="mb-4">
                Visual dashboards presenting key performance indicators (KPIs)
                like delivery success rates, fuel efficiency, and route
                optimization metrics.
              </p>
              <ImgPlaceholder
                w={400}
                h={250}
                label="Logistics Metrics"
                bgColor={COLOR_ACCENT_GREEN.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Logistics+Metrics"
                className="mt-4 h-auto w-full"
              />
            </div>
            <div className="col-span-1 rounded-xl bg-white p-6 shadow-md md:col-span-2">
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                Predictive Maintenance & Alert System
              </h3>
              <p className="mb-4">
                Integrated data models to predict potential vehicle maintenance
                needs and an alert system to notify relevant personnel
                proactively, minimizing downtime.
              </p>
              <ImgPlaceholder
                w={800}
                h={250}
                label="Predictive Alerts"
                bgColor={COLOR_PRIMARY_BLUE.replace("#", "")}
                textColor="FFFFFF"
                src="https://placehold.co/800x250/3B82F6/FFFFFF?text=Predictive+Alerts"
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
            subtitle="The data visualization dashboard revolutionized AeroFleet Logistics' operations, leading to significant cost savings and improved efficiency."
            textColor="white"
            subtextColor="rgba(255, 255, 255, 0.9)"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                20%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Reduction in Operational Costs
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                15%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">
                Improvement in Delivery Timeliness
              </p>
            </div>
            <div className="rounded-xl bg-blue-700 p-6 shadow-lg sm:p-8">
              <div className="mb-2 text-5xl font-extrabold">
                90%<span className="text-accent-green">+</span>
              </div>
              <p className="text-xl font-semibold">Faster Decision-Making</p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed opacity-90">
            Open Visual's data visualization expertise empowered AeroFleet
            Logistics to gain unprecedented control and insight into their
            operations, demonstrating the transformative power of visual data in
            complex industries.
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
