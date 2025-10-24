import { useState } from "react";

export default function PlantCard({ plant }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full sm:w-60 border rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 bg-white mx-auto">
        <div className="rounded-lg">
          <img
            src={plant.image}
            alt={plant.name}
            className="h-48 sm:h-60 w-full rounded-lg bg-white object-cover"
          />
        </div>

        <h2 className="text-base sm:text-lg font-semibold mt-2">{plant.name}</h2>
        <p className="text-xs sm:text-sm text-gray-500 italic">{plant.scientificName}</p>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 truncate">{plant.description}</p>

        <button
          className="mt-3 bg-gray-100 text-black px-3 py-1 rounded-lg text-xs sm:text-sm transition-colors hover:bg-gray-200"
          onClick={() => setIsOpen(true)}
        >
          View Detail
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
          <div
            className="absolute inset-0 bg-green-100/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md sm:max-w-lg p-4 overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <div className="flex justify-center mb-3">
              <img
                src={plant.image}
                alt={plant.name}
                className="h-48 sm:h-64 w-full sm:w-80 object-cover rounded-lg"
              />
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-center">{plant.name}</h2>
            <p className="text-gray-500 italic mb-2 text-sm sm:text-base text-center">
              {plant.scientificName}
            </p>
            <p className="text-gray-700 text-sm sm:text-base text-justify">
              {plant.description}
            </p>

            <h4 className="font-medium mt-3 text-sm sm:text-base">Medicinal Uses:</h4>
            <ul className="text-xs sm:text-sm list-disc ml-5 space-y-1">
              {plant.uses.map((u, idx) => (
                <li key={idx}>{u}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
