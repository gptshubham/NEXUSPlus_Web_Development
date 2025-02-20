import { Outlet, Link } from 'react-router';

export default function Details() {
  return (
    <>
      <div className="h-[40vh] flex flex-col justify-center items-center px-5">
        <nav className="flex flex-wrap w-full justify-center items-center">
          <Link
            to="/Details"
            className="px-3 py-1 bg-gray-700 hover:bg-gray-500 active:bg-gray-700 ml-5 my-5 text-white rounded-lg transition"
          >
            Sub-Detail
          </Link>
          <Link
            to="Product"
            className="px-3 py-1 bg-gray-700 hover:bg-gray-500 active:bg-gray-700 ml-5 my-5 text-white rounded-lg transition"
          >
            Product Detail
          </Link>
          <Link
            to="Kart"
            className="px-3 py-1 bg-gray-700 hover:bg-gray-500 active:bg-gray-700 ml-5 my-5 text-white rounded-lg transition"
          >
            Kart Detail
          </Link>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to Details Page
        </h1>
      </div>
      <Outlet />
    </>
  );
}
