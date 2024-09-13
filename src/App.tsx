import HomePage from "./Pages/HomePage/HomePage";
import Menu from "./Menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Schedule from "./Pages/Schedule/Schedule";
import LocationsMap from "./Pages/LocationsMap/LocationsMap";
import OurStory from "./Pages/OurStory/OurStory";
import Photos from "./Pages/Photos/Photos";
import FoodMenu from "./Pages/FoodMenu/FoodMenu";
import DrinksMenu from "./Pages/DrinksMenu/DrinksMenu";
import Confirmation from "./Pages/Confirmation/Confirmation";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#F2F1EB", margin: "0px" }}>
        <Router>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Menu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/povestea-noastra" element={<OurStory />} />
              <Route path="/programa" element={<Schedule />} />
              <Route path="/poze" element={<Photos />} />
              <Route path="/meniu-mancare" element={<FoodMenu />} />
              <Route path="/meniu-bauturi" element={<DrinksMenu />} />
              <Route path="/locatii" element={<LocationsMap />} />
              <Route path="/confirmare" element={<Confirmation />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
