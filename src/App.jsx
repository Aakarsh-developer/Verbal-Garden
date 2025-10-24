import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlantList from "./pages/PlantList";
import PlantDetail from "./pages/PlantDetail";
import VirtualTour from "./pages/VirtualTour";
import About from "./pages/About";
import Threedmodel from "./Components/Threedmodel";
import HighlightedPlant from "./pages/highlighted";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path="/plants/:id" element={<PlantDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Virtualtour" element={<VirtualTour />} />

        <Route
          path="/GardenTour"
          element={
            <ProtectedRoute>
              <Threedmodel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute>
              <HighlightedPlant />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
