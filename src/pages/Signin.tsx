import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const COLOR_DARK_TEXT = "#1F2937";
  const COLOR_NEUTRAL_TEXT = "#6B7280";

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setShowSuccessMessage(true);
      setFormData({
        email: "",
        password: "",
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
      <section className="relative bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Welcome Back to <span className="text-blue-600">Open Visual</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Log in to access your dashboard and continue managing your projects.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-xl">
          <SectionHeader
            title="Log In to Your Account"
            subtitle="Enter your credentials to continue."
            textColor={COLOR_DARK_TEXT}
            subtextColor={COLOR_NEUTRAL_TEXT}
          />
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl bg-gray-50 p-8 shadow-xl"
          >
            {showSuccessMessage && (
              <div
                className="mb-6 rounded border-l-4 border-green-500 bg-green-100 p-4 text-green-700"
                role="alert"
              >
                <p className="font-bold">Success!</p>
                <p>You have successfully logged in.</p>
              </div>
            )}
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
                htmlFor="password"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-4 text-lg shadow-sm focus:border-transparent focus:ring-2 focus:ring-blue-600"
                placeholder="********"
                aria-label="Password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex transform items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Log In <i className="fas fa-sign-in-alt"></i>
              </button>
            </div>
            <p className="text-md mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <p className="text-md text-center text-gray-600">
              <Link
                to="/forgot-password"
                className="font-semibold text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </p>
          </form>
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
