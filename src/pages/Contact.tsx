import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  const COLOR_PRIMARY_BLUE = "#3B82F6";
  const COLOR_ACCENT_GREEN = "#10B981";
  const COLOR_DARK_TEXT = "#1F2937";
  const COLOR_NEUTRAL_TEXT = "#6B7280";

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setShowSuccessMessage(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }, 1000);
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
            Get In <span className="text-blue-600">Touch</span> With Us
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            We'd love to hear from you! Reach out to discuss your project, ask a
            question, or simply say hello.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Send Us a Message"
            subtitle="Fill out the form below and our team will get back to you promptly."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl bg-gray-50 p-8 shadow-xl"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-4 text-lg shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
                aria-label="Full Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-4 text-lg shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-600"
                placeholder="john.doe@example.com"
                aria-label="Email Address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-4 text-lg shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-600"
                placeholder="Inquiry about web design services"
                aria-label="Subject"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-y rounded-lg border border-gray-300 p-4 text-lg shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-600"
                placeholder="Tell us about your project or question..."
                aria-label="Your Message"
                required
              ></textarea>
            </div>
            {showSuccessMessage && (
              <div
                className="mb-6 rounded border-l-4 border-green-500 bg-green-100 p-4 text-green-700"
                role="alert"
              >
                <p className="font-bold">Success!</p>
                <p>
                  Your message has been sent. We'll get back to you shortly.
                </p>
              </div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex transform items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Our Contact Information"
            subtitle="Connect with us directly through our office details or social channels."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <div className="grid grid-cols-1 gap-8 text-center sm:gap-12 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
              <div
                className="mb-4 text-5xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Our Office
              </h3>
              <p className="text-lg text-gray-700">
                456 Creative Lane, Design District, Abuja, Nigeria
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
              <div
                className="mb-4 text-5xl"
                style={{ color: COLOR_ACCENT_GREEN }}
              >
                <i className="fas fa-envelope"></i>
              </div>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Email Us
              </h3>
              <p className="text-lg text-gray-700">info@openvisual.co</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-xl sm:p-8">
              <div
                className="mb-4 text-5xl"
                style={{ color: COLOR_PRIMARY_BLUE }}
              >
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3
                className="mb-3 text-2xl font-bold"
                style={{ color: COLOR_DARK_TEXT }}
              >
                Call Us
              </h3>
              <p className="text-lg text-gray-700">(123) 456-VISUAL</p>
              <p className="text-lg text-gray-700">(234) 815-789-9361</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3
              className="mb-6 text-2xl font-bold"
              style={{ color: COLOR_DARK_TEXT }}
            >
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a
                href="https://twitter.com/openvisual"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition duration-200 hover:text-blue-600"
              >
                <i className="fab fa-twitter text-4xl"></i>
              </a>
              <a
                href="https://linkedin.com/company/openvisual"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition duration-200 hover:text-blue-600"
              >
                <i className="fab fa-linkedin-in text-4xl"></i>
              </a>
              <a
                href="https://facebook.com/openvisual"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition duration-200 hover:text-blue-600"
              >
                <i className="fab fa-facebook-f text-4xl"></i>
              </a>
              <a
                href="https://instagram.com/openvisual"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition duration-200 hover:text-blue-600"
              >
                <i className="fab fa-instagram text-4xl"></i>
              </a>
            </div>
          </div>
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
