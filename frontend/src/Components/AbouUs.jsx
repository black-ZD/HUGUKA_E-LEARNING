import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-huguka-green via-[#0a4d2b] to-black text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://transparenttextures.com')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Empowering the Next Generation <br />
            <span className="text-green-400">of Digital Professionals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Huguka e-Learning bridges the gap between traditional education and the high-demand skills of the modern workforce.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-huguka-green pl-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg">
              At Huguka, we believe that education should be accessible, practical, and directly aligned with industry needs. Our platform is designed to provide structured learning paths that move beyond theory.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white shadow-sm border rounded-lg text-center">
                <span className="block text-2xl font-bold text-huguka-green">Practical</span>
                <span className="text-sm text-gray-500">Hands-on Learning</span>
              </div>
              <div className="p-4 bg-white shadow-sm border rounded-lg text-center">
                <span className="block text-2xl font-bold text-huguka-green">Modern</span>
                <span className="text-sm text-gray-500">Digital Systems</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Commitment</h3>
            <ul className="space-y-4">
              {[
                "Industry-Standard Curriculum",
                "Expert-Led Training Modules",
                "Seamless Digital Experience",
                "Focus on Real-World Application"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-700">
                  <span className="text-huguka-green font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
