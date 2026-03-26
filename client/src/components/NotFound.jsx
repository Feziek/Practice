import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-gray-600">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-600">
        Page Not Found
      </p>
      <p className="mt-2 text-center text-gray-500">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-gray-600 px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Go Home
      </Link>
    </div>
  )
}
