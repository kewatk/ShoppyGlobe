import { Link } from "react-router-dom";
// import notFoundImg from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      
      {/* 404 Text */}
      <h1 className="text-6xl font-bold text-gray-800 mb-6">
        404
      </h1>

      {/* Image */}
      {/* <img
        src={notFoundImg}
        alt="Page not found"
        className="w-72 md:w-96 mb-6"
      /> */}

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Look like you're lost
      </h2>

      <p className="text-gray-500 text-center mb-6">
        The page you are looking for is not available!
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
