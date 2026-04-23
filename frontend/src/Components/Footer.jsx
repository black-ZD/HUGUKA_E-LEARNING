import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            Huguka e-Learning
          </h2>
          <p className="text-sm text-gray-400">
            Empowering learners with modern digital skills and structured courses.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/modules" className="hover:text-white">Modules</Link></li>
            <li><Link to="/trainers" className="hover:text-white">Trainers</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to get latest courses and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 border border-gray-700 text-sm focus:outline-none"
            />
            <button className="px-4 bg-green-600 text-white rounded-r hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-800 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        
        <p>
          © {new Date().getFullYear()} Huguka e-Learning. All rights reserved.
        </p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/cookies" className="hover:text-white">Cookies</Link>
        </div>

      </div>
    </footer>
  );
}