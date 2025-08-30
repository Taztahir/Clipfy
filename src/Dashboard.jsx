// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
function Dashboard() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Load user info
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-[#0f1117] text-white">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static w-64 dark:bg-[#151922] bg-white p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out`}
      >
        {/* <h1 className="text-2xl font-bold text-purple-500 mb-8">Clipfy</h1> */}
        <Logo className=""/>
        <nav className="mt-5 space-y-4 flex-1">
          <a href="#" className="flex items-center gap-2 text-black dark:text-gray-300 dark:hover:text-white">
            <span>🏠</span> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 text-black dark:text-gray-300 dark:hover:text-white">
            <span>🎬</span> My Clips
          </a>
          <a href="#" className="flex items-center gap-2 text-black dark:text-gray-300 dark:hover:text-white">
            <span>✂️</span> Editor
          </a>
          <a href="#" className="flex items-center gap-2 text-black dark:text-gray-300 dark:hover:text-white">
            <span>📊</span> Analytics
          </a>
          <a href="#" className="flex items-center gap-2 text-black dark:text-gray-300 dark:hover:text-white">
            <span>🤖</span> AI Tools
          </a>
          <a href="#" className="flex items-center gap-2 text-black dark:text-gray-300 dark:hover:text-white">
            <span>⚙️</span> Settings
          </a>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            className="lg:hidden text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <input
            type="text"
            placeholder="Search"
            className="hidden sm:block bg-[#1c1f2b] text-gray-300 px-4 py-2 rounded-lg w-60 md:w-80 focus:outline-none"
          />

          <div className="flex items-center gap-4 ml-auto">
            <button className="text-gray-400">🔔</button>
            {user && (
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-700"
              />
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#151922] p-6 rounded-xl shadow-md">
            <p className="text-gray-400">Views</p>
            <h2 className="text-2xl font-bold">12.4K</h2>
          </div>
          <div className="bg-[#151922] p-6 rounded-xl shadow-md">
            <p className="text-gray-400">Engagement</p>
            <h2 className="text-2xl font-bold">4.3K</h2>
          </div>
          <div className="bg-[#151922] p-6 rounded-xl shadow-md">
            <p className="text-gray-400">Watch Time</p>
            <h2 className="text-2xl font-bold">33.1 h</h2>
          </div>
          <div className="bg-[#151922] p-6 rounded-xl shadow-md">
            <p className="text-gray-400">Subscribers</p>
            <h2 className="text-2xl font-bold">1.1K</h2>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="bg-[#151922] p-6 rounded-xl shadow-md mb-8 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Recent Uploads</h3>
          <table className="w-full min-w-[600px] text-left text-gray-300">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="pb-2">Title</th>
                <th className="pb-2">Date</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Views</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-gray-700">
                <td className="py-3">🎥 Photoshop Tips & Tricks</td>
                <td>Jun 12, 2023</td>
                <td><span className="text-green-400">Public</span></td>
                <td>1.5K</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">🎥 Vlogging: A Beginner's Guide</td>
                <td>Jun 10, 2023</td>
                <td><span className="text-green-400">Public</span></td>
                <td>2.9K</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">🎥 The Future of AI</td>
                <td>Jun 8, 2023</td>
                <td><span className="text-red-400">Private</span></td>
                <td>980</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="py-3">🎥 How to Start a Podcast</td>
                <td>Jun 5, 2023</td>
                <td><span className="text-green-400">Public</span></td>
                <td>1.1K</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* AI Suggestions */}
        <div className="bg-[#151922] p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-3">AI Suggestions</h3>
          <p className="flex items-center gap-2 text-blue-400">
            ▶ Best time to post today <span className="text-gray-300">6 PM</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
