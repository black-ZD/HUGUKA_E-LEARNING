import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Feature from "./Feature";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <NavBar />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-green-700 to-black text-white px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Huguka e-Learning
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl">
          Education without borders. Learn skills, grow faster, and build your future with expert-led courses.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Get Started
          </Link>

          <Link
            to="/modules"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Huguka</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Feature title="Structured Learning" desc="Step-by-step modules for better understanding." />
          <Feature title="Expert Trainers" desc="Learn from experienced professionals." />
          <Feature title="Flexible Access" desc="Study anytime, anywhere at your pace." />
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Modules</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CourseCard title="Web Development" />
          <CourseCard title="UI/UX Design" />
          <CourseCard title="Data Analysis" />
        </div>

        <Link
          to="/modules"
          className="inline-block mt-10 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          View All Modules
        </Link>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-4 text-gray-200">
          Join thousands of learners and upgrade your skills.
        </p>

        <Link
          to="/register"
          className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200"
        >
          Create Account
        </Link>
      </section>

      <Footer />
    </div>
  );
}