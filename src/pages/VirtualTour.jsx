import { useState } from "react";
import plants from "../data/plants.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function VirtualTour() {
  const [index, setIndex] = useState(0);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const plant = plants[index];

  const next = () => setIndex((i) => (i + 1) % plants.length);
  const prev = () => setIndex((i) => (i - 1 + plants.length) % plants.length);

  return (
    <>
      <Navbar />

      <div className="pt-10 min-h-screen bg-gradient-to-b from-green-200 to-green-100 text-green-900">
        <div className="text-center px-4 py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Virtual Herbal Garden Tour
          </h1>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-green-700">
            Embark on a serene virtual journey through our meticulously designed
            herbal garden. Explore in immersive 3D, listen to the soothing sounds
            of nature, and uncover the secrets of therapeutic Ayurveda.
          </p>
          <button className="mt-10 bg-amber-50 px-6 py-2 rounded-3xl text-center font-medium hover:bg-amber-100 transition">
            <Link to="/GardenTour">Start Tour</Link>
          </button>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-8 items-center">
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src="./assets/Images/features plant.jpg"
              alt="Herbal Mission"
              className="rounded-2xl shadow-lg bg-white w-[600px] max-h-[480px] object-cover sm:w-[500px] md:w-[600px]"
            />
          </div>

          <div className="flex flex-col justify-center order-2 md:order-1 mt-6 sm:mt-0 sm:ml-4 md:ml-0">
            <div className="bg-green-200 py-3 px-4 sm:px-6 rounded-2xl sm:ml-4 md:ml-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-900 mb-2">
                ✨ Key Features
              </h2>
              <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 p-2 sm:p-4">
                <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:scale-105 transition">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    🌱 Healing Herbs
                  </h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:scale-105 transition">
                  <img
                    src="./assets/Images/key features center.png"
                    alt=""
                    className="rounded-md w-full object-cover"
                  />
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:scale-105 transition">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    🌱 Culinary Herbs
                  </h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:scale-105">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    🌱 Ayurvedic plants
                  </h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:scale-105">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    🌱 Aromatic Plants
                  </h3>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:scale-105">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    🌱 Rare Medicinal Plants
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 px-4 sm:px-8 pb-8">
          <div className="bg-green-200 rounded-2xl py-7 px-4 sm:px-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-5">
              Highlight Plants
            </h3>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {plants.slice(0, 10).map((plant) => (
                <div
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  className="cursor-pointer p-4 sm:p-6 text-center rounded-2xl bg-white shadow-md hover:scale-105 transition"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-24 w-full object-cover rounded-md mb-2 bg-white"
                  />
                  <h3 className="text-base sm:text-lg font-semibold">
                    {plant.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedPlant && (
          <div className="fixed inset-0 bg-green-100/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-md w-full relative">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
                onClick={() => setSelectedPlant(null)}
              >
                ✕
              </button>

              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
                className="h-48 sm:h-60 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2 text-center">
                {selectedPlant.name}
              </h2>
              <p className="italic text-green-700 mb-3 text-center">
                {selectedPlant.scientificName}
              </p>
              <p className="text-gray-700 text-sm sm:text-base text-justify">
                {selectedPlant.description}
              </p>

              <div className="mt-5 text-center">
                <Link
                  to={`/${selectedPlant.id}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}