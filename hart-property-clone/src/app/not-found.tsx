import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-hart-dark font-bold mb-4 uppercase">Error: Page Not Found</h2>
      <h1 className="text-8xl md:text-9xl font-bold mb-8">404</h1>
      <div className="mb-10">
        <p className="text-lg">This page isn't available.</p>
      </div>
      <Link
        href="/"
        className="bg-hart-dark text-white px-8 py-3 rounded-none hover:bg-hart-blue transition-colors duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
