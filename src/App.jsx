import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import AccessoriesCatalog from "./Pages/AccessoriesCatalog";
import PPF from "./Pages/PPF";
import CeramicSpray from "./Pages/CeramicSpray";
import CeramicCoating from "./Pages/CeramicCoating";
import CarPolish from "./Pages/CarPolish";
import AudioModification from "./Pages/AudioModification";

function App() {
  return (
    <HashRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/accessories-catalog" element={<AccessoriesCatalog />} />

        <Route path="/ppf" element={<PPF />} />

        <Route
          path="/ceramic-spray"
          element={<CeramicSpray />}
        />

        <Route
          path="/ceramic-coating"
          element={<CeramicCoating />}
        />

        <Route
          path="/car-polish"
          element={<CarPolish />}
        />

        <Route
          path="/audio-modification"
          element={<AudioModification />}
        />

      </Routes>

    </HashRouter>
  );
}

export default App;