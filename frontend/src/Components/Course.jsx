import NavBar from "./NavBar";

export default function Course() {
  const courses = [
    {
      id: 1,
      title: "Mathematics",
      level: "Beginner",
      description: "Learn basic to advanced math concepts.",
    },
    {
      id: 2,
      title: "Computer Science",
      level: "Intermediate",
      description: "Programming, algorithms, and systems.",
    },
    {
      id: 3,
      title: "English",
      level: "All Levels",
      description: "Grammar, writing, and communication skills.",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-10">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Courses in Huguka E-Learning
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-10">
          Explore available learning modules
        </p>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {course.title}
              </h2>

              <span className="inline-block mt-2 text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                {course.level}
              </span>

              <p className="text-gray-500 mt-3 text-sm">
                {course.description}
              </p>

              <button className="mt-5 w-full py-2 bg-gradient-to-r from-green-500 to-black text-white rounded-lg hover:opacity-90 transition">
                View Course
              </button>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}