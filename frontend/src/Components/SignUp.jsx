import React from "react";
import NavBar from "./NavBar";

export default function SignUp() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">

        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border-t-4 border-green-500 p-8">

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>

          <p className="text-center text-gray-500 text-sm mt-2 mb-6">
            Join your school system
          </p>

          {/* Form */}
          <form className="space-y-4">

            {/* Role Selection */}
            <div className="flex gap-3">
              {["Student", "Teacher"].map((role) => (
                <label key={role} className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={role.toLowerCase()}
                    className="peer hidden"
                    defaultChecked={role === "Student"}
                  />

                  <div className="text-center p-3 rounded-lg border transition
                    border-gray-200
                    peer-checked:border-green-500
                    peer-checked:bg-green-50
                    peer-checked:text-green-600
                    font-semibold text-gray-600">
                    {role}
                  </div>
                </label>
              ))}
            </div>

            {/* Inputs */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-black text-white font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}