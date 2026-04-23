export default function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
}