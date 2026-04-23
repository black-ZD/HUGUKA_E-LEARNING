import { Link } from "react-router-dom";
import NavBar from "./NavBar";
export default function NotFound() {
  return (
   <>
   <NavBar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-slate-900 to-black text-center px-4">
      
      
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full top-20"></div>

      
      <h1 className="text-7xl font-bold text-white tracking-wider z-10">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4 text-blue-300 z-10">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2 max-w-md z-10">
        The page you are looking for does not exist or has been moved.
      </p>

      
      <Link
        to="/"
        className="relative mt-6 px-8 py-3 rounded-full font-semibold text-white overflow-hidden group bg-blue-600 z-10"
      >
        
        <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-green-600 opacity-90 animate-pulse"></span>

      
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,huguka-light,transparent_60%)]"></span>

       
        <span className="relative z-10">Go Back Home</span>
      </Link>

    </div>
   </>
  );
}