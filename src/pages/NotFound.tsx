import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-800 antialiased">
      <section className="relative flex flex-grow items-center justify-center bg-gradient-to-br from-blue-100 to-green-50 px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-8 text-9xl font-extrabold leading-none text-blue-600">
            404
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl">
            Page <span className="text-red-600">Not Found</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:mb-10 sm:text-xl md:text-2xl">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex transform items-center rounded-lg bg-blue-600 px-8 py-4 text-xl font-bold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700 sm:px-10 sm:py-5"
          >
            <i className="fas fa-home mr-3"></i> Back to Home
          </Link>
        </div>
      </section>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
