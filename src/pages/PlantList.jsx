import Navbar from "../Components/Navbar.jsx";
import plants from "../data/plants.jsx";
import PlantCard from "../Components/PlantCard.jsx";
import { useState } from "react";
import SearchBar from "../Components/Searchbar";
import Footer from "../Components/Footer.jsx";

const PlantList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="mt-1 pt-13 w-full bg-gradient-to-b from-green-200 to-green-100 min-h-screen">
        <div className="fixed w-full bg-green-200 bg-no-repeat bg-cover h-auto sm:h-20 px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-4">
          <h1 className="text-green-950 text-2xl font-bold text-center sm:text-left">
            All Plants
          </h1>
          <div className="pl-[100px] flex justify-center sm:justify-center mt-2 sm:mt-0 w-full sm:w-auto">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <div className="mt-36 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-10 md:px-20">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default PlantList;



