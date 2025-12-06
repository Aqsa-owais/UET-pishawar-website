import { useState } from "react";
import {
  Menu,
  X,
  Calendar,
  Clock,
  Wifi,
  BookOpen,
  FileText,
  Info,
  Home,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "session-details", label: "Session Details", icon: Calendar },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "recorded-lectures", label: "Recorded Lectures", icon: BookOpen },
    { id: "about", label: "About", icon: Info },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black text-white transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 shadow-2xl`}
      >
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/icode logo.png"
                alt="iCodeGuru"
                className="w-12 h-12 rounded-full shadow-lg"
              />
              <span className="text-xl font-bold">iCodeGuru</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="mt-6 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
          <p className="text-xs text-gray-400 text-center">
            © 2025 iCodeGuru
            <br />
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white shadow-md sticky top-0 z-30">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="/icode logo.png"
                alt="iCodeGuru"
                className="w-8 h-8 rounded-full shadow-lg"
              />
              <span className="text-lg font-bold text-gray-900">iCodeGuru</span>
            </div>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center p-6 md:p-12"
        >
          <div className="max-w-5xl w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 md:p-12 text-white">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src="/icode logo.png"
                    alt="iCodeGuru"
                    className="w-20 h-20 rounded-full shadow-xl"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                  Latest Trends in Technology 2025
                </h1>
                <div className="text-center text-orange-100 text-lg">
                  In collaboration with UET Peshawar
                </div>
              </div>

              <div className="p-8 md:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                  iCodeGuru is a dynamic learning platform focused on bridging
                  the gap between academia and the tech industry by offering
                  practical, in-demand, and globally relevant courses. To
                  explore more and become part of our learning community...
                </p>

                <div className="flex justify-center">
                  <a
                    target="_blank"
                    href="https://icode.guru/join/"
                    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    Join iCodeGuru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Session Details Section */}
        <section
          id="session-details"
          className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-orange-50 to-white"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Session Details
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Clock size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-600">9:00 PM – 11:00 PM (PKT)</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Calendar size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Days</h3>
                <p className="text-gray-600">Monday to Friday</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Wifi size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mode</h3>
                <p className="text-gray-600">Online Live Sessions</p>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded-lg">
              <p className="text-gray-800">
                <strong className="text-orange-600">Note:</strong> Make sure to
                join on time. Attendance and participation are important for
                your progress.
              </p>
            </div>
          </div>
        </section>

        {/* Assignments Section */}
        <section
          id="assignments"
          className="min-h-screen flex items-center justify-center p-6 md:p-12"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Assignments
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">W1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Week 1 Assignment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Complete the introductory assignment covering the basics
                      of the course material.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        target="_blank"
                        href="https://docs.google.com/document/d/1A3DdR-8NK1WpV_l8BRYFgf_fE46KDgmU8jYgMkwfyOo/edit?tab=t.0"
                        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Assignment Instructions
                      </a>
                      <a
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd6mv_s_5W78cZo6O13fZHvuSRCx1tRIpscBDh1Ra-q_Fb9hg/viewform"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                      >
                        Submission Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">W2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Week 2 Assignment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Build upon your knowledge with practical exercises and
                      coding challenges.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                       target="_blank"
                        href="https://docs.google.com/document/d/1l2pYxwHC8N41TdpxBN0u0NR3nrY95aLlqTznIVIrTAs/edit?tab=t.0#heading=h.8lufd6y4aqe9"
                        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Assignment Instructions
                      </a>
                      <a
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9pxqhf9ULALTF29-r0vOdmr62EHDvq_MZrOAfUkoK0e3VCg/viewform"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                      >
                        Submission Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">W3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Week 3 Assignment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Advanced topics and real-world application of course
                      concepts.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        target="_blank"
                        href="https://docs.google.com/document/d/13uANufbrh09_N9bavkNh8B991wnF_WKarRbfMtzajUs/edit?tab=t.0#heading=h.sbw1yuk8iev8"
                        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Assignment Instructions
                      </a>
                      <a
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdaQ_20vn9SB5p13MXSqUKi1OWpwLfydTrfcxLhR3NOXXeuNQ/viewform"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                      >
                        Submission Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recorded Lectures Section */}
        <section
          id="recorded-lectures"
          className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-orange-50 to-white"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
              Lecture Recordings
            </h2>
            <p className="text-gray-600 text-lg text-center mb-12">
              Access all lecture recordings in one place.
            </p>

            <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <BookOpen size={48} className="text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                All Recorded Lectures
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Open the recordings sheet organized by week and topic.
              </p>

              <a
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1ryhjJJvMo6j27ZCn5PxnwebV9QE-gGqcaz_lD4agSrg/edit?gid=0#gid=0"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Open Recordings Sheet
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center p-6 md:p-12"
        >
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              About iCodeGuru
            </h2>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <img
                  src="/icode logo.png"
                  alt="iCodeGuru"
                  className="w-24 h-24 rounded-full shadow-xl"
                />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed text-center">
                iCodeGuru empowers students to learn practical programming
                through structured sessions, hands-on assignments, and curated
                resources. Stay consistent, participate actively, and use the
                provided links to submit work and revisit lectures.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/icode logo.png"
                    alt="iCodeGuru"
                    className="w-12 h-12 rounded-full shadow-lg"
                  />
                  <span className="text-2xl font-bold">iCodeGuru</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/iCodeguru/"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/icode-guru/posts/?feedView=all"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@iCodeGuru0"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Feedback</h3>
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSessmxG9HB18z6cVLgLYoJQcDazMyoPyb5W_BFF6ByF-IidhA/viewform"
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Submit Feedback
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 iCodeGuru. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
