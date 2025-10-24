import React, { useState } from "react";
import GardenScene from "./GardenScene";
import Popup from "./Popup";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import plantsData from "../data/plants";

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [aiPopupOpen, setAiPopupOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState("");

  const handleSave = (plant) => {
    setBookmarks((s) => {
      if (s.find((p) => p.id === plant.id)) return s;
      return [...s, plant];
    });
    alert(`${plant.name} saved to bookmarks`);
  };

  const handleSearchSelect = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const found = plantsData.find((p) => p.name.toLowerCase().includes(q));
    if (found) setSelectedPlant(found);
  };

  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/assets/Images/virtualbg15 (2).jpg')" }}
    >
      {/*  Background Music */}
      <audio autoPlay loop>
        <source src="/assets/garden sound.mp4" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/*  Header */}
      <div className="mt-8 text-center text-3xl sm:text-5xl font-bold text-green-900">
        <h3>Welcome To Virtual Tour</h3>
      </div>

      {/*  Top Bar */}
      <TopBar
        search={search}
        setSearch={(val) => {
          setSearch(val);
          if (val.length > 1) handleSearchSelect(val);
        }}
      />

      {/*  Main Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full h-auto lg:h-[95vh] mt-4 px-2 sm:px-4">
        {/*  3D Garden Scene */}
        <GardenScene
          onSelectPlant={(p) => setSelectedPlant(p)}
          isAIPopupOpen={aiPopupOpen}
        />

        {/*  Side Image */}
        <div className="relative w-full lg:w-[29vw] mt-4 lg:mt-7 lg:ml-1 flex justify-center">
          <img
            src="/assets/Images/virtual garden2.jpg"
            alt="Side Decoration"
            className="h-[40vh] sm:h-[55vh] lg:h-[87vh] w-full object-cover rounded-2xl shadow-lg bg-amber-200"
          />

          {/*  Popup (for mobile view — over image) */}
          {selectedPlant && (
            <div className="absolute  left-1/2 -translate-x-1/2 z-50 w-[100%] sm:w-[70%] lg:hidden border-2 border-green-400 bg-green-200 rounded-2xl shadow-lg p-4 max-h-[40vh] overflow-y-auto scrollbar-hide">
              <Popup
                plant={selectedPlant}
                onClose={() => setSelectedPlant(null)}
                onSave={handleSave}
                setAiPopupOpen={setAiPopupOpen}
              />
            </div>
          )}
        </div>

        {/*  Popup (desktop view — right side) */}
        {selectedPlant && (
          <div className="hidden lg:block absolute top-45.5 right-4 z-50 w-90 max-h-[86.9vh] overflow-y-auto border-2 border-green-400 bg-green-200 rounded-2xl shadow-lg p-6 scrollbar-hide">
            <Popup
              plant={selectedPlant}
              onClose={() => setSelectedPlant(null)}
              onSave={handleSave}
              setAiPopupOpen={setAiPopupOpen}
            />
          </div>
        )}
      </div>

      {/*  Bottom Bar */}
      <div className="mb-10 sm:mb-5 ml-0 sm:ml-10 px-4">
        <BottomBar />
      </div>
    </div>
  );
}
