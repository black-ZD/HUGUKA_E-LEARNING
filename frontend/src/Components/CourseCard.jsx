export default function CourseCard({ title }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 mt-2">
        Learn the fundamentals and advanced concepts.
      </p>

      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Enroll Now
      </button>
    </div>
  );
}