import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/image/logo-2.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Course", path: "/courses" },
  { name: "Modules", path: "/modules" },
  { name: "Exams", path: "/exams" },
  { name: "About Us", path: "/about" },
];

export default function NavBar() {
  return (
    <nav className="flex h-24 w-full items-center px-6 border-b bg-white">

      {/* LOGO */}
      <img
        src={Logo}
        alt="Huguka Logo"
        className="h-16 w-auto object-contain mr-10"
      />

      {/* LINKS */}
      <div className="flex flex-1 items-center gap-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"} // important for exact home match
            className={({ isActive }) =>
              `px-5 py-2 font-medium transition-all rounded-md ${
                isActive
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600 hover:text-green-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* CTA BUTTON */}
        <NavLink
          to="/register"
          className="ml-auto px-6 py-2 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition"
        >
          Join Now
        </NavLink>
      </div>
    </nav>
  );
}