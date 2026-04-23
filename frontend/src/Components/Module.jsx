import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import ListModule from "./ListModule";
export default function Modules() {

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="max-w-5xl mx-auto px-4 py-10">
     
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 ">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Learning Modules
            </h1>
            <p className="text-gray-600 mt-1">
              Manage and organize all educational modules in Huguka E-learning
            </p>
          </div>

          <Link
            to="/create-modules"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-black text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            + Create New Module
          </Link>
        </div>

      
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
         <ListModule/>
        </div>
      </main>
    </div>
  );
}