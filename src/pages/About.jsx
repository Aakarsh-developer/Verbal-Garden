import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function About() {
  const team = [
    {
      name: "Aakarsh Verma",
      role: "Frontend Developer, UI/UX Designer",
      desc: "Developed 3D plant visualization, interactive UI, and responsive design using React, Three.js, and Tailwind CSS.",
      image: "/assets/Images/aakarsh team.jpg", // Place image in public/team/
      github: "https://github.com/Aakarsh-developer",
      linkedin: "https://www.linkedin.com/in/aakarsh-verma-060b03253/",
    },
    {
      name: "Anas Khan",
      role: "Clerk Authentication, AI Integration",
      desc: "Implemented Clerk authentication, Gemini AI for plant insights, smooth navigation using React-Router.",
      image: "/assets/Images/anas team.jpg",
      github: "https://github.com/Anas2604-web",
      linkedin: "https://www.linkedin.com/in/anas-khan-47485224a/",
    },
  ];
  return (
    <>
      <Navbar />

      {/* Main Body */}
      <div className="pt-10 min-h-screen bg-gradient-to-b from-green-200 to-green-100 text-green-900">
        {/* Header */}
        <div className="text-center px-4 py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4">
            About Virtual Herbal Garden
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-green-700 leading-relaxed">
            A digital space where technology meets tradition. Explore medicinal plants in 3D,
            learn their benefits, and connect with nature virtually.
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 py-8">
          <div className="flex flex-col justify-center order-2 md:order-1 md:pl-6 lg:pl-12 text-center md:text-left items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-900">
              🌿 Our Mission
            </h2>
            <p className="text-base sm:text-lg text-green-700 leading-relaxed md:pr-6 lg:pr-12 max-w-xl">
              The Virtual Herbal Garden aims to promote awareness of medicinal plants by
              combining modern digital platforms with traditional herbal knowledge.
              We provide interactive 3D models, detailed plant information, and engaging
              multimedia to make learning fun and impactful.
            </p>
          </div>

          {/* ✅ Responsive image fix (only change here) */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="./assets/Images/main about.jpg"
              alt="Herbal Mission"
              className="rounded-2xl shadow-lg bg-white w-full sm:w-[450px] md:w-[500px] h-auto max-h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-green-200 py-12 mt-8 px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-900 mb-8">
            ✨ Key Features
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">🌱 Virtual Tour</h3>
              <p className="text-green-700 text-sm sm:text-base">
                Explore realistic 3D models of medicinal plants.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">📚 Plant Information</h3>
              <p className="text-green-700 text-sm sm:text-base">
                Learn about uses, benefits, and traditional importance.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">🎧 Multimedia</h3>
              <p className="text-green-700 text-sm sm:text-base">
                Enjoy Nature Sound and virtual tours.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto text-center py-12 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">👩‍💻 Our Team</h2>
          <p className="text-green-700 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            We are a passionate group of developers, designers, and researchers working
            together to bridge the gap between technology and Ayurveda.
          </p>
          <section className="bg-gradient-to-b from-green-100 to-green-50 py-12">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-3xl mx-auto px-2">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
            />
            <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
            <p className="text-gray-600 font-medium">{member.role}</p>
            <p className="text-sm text-gray-500 mt-3">{member.desc}</p>

            <div className="flex justify-center space-x-5 mt-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-700 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
