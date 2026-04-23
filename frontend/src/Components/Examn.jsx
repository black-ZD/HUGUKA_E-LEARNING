import NavBar from "./NavBar";

export default function Exam() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">

        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Create Exam
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Fill in the exam details below
          </p>

          {/* Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Exam Title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              placeholder="Module Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <input
                type="number"
                placeholder="Duration (mins)"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />

            </div>

            <textarea
              placeholder="Exam Instructions"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-black text-white font-semibold hover:opacity-90 transition"
            >
              Create Exam
            </button>

          </form>
        </div>
      </div>
    </>
  );
}