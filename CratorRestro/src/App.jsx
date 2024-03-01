import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FoodProvider } from "./Components/FoodContext";
import Admin from "./Components/Admin";
import ItemsList from "./Components/ItemsList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ItemsList />
      <FoodProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Admin" element={<Admin/>}/>
        </Routes>
      </FoodProvider>
    </BrowserRouter>
  );
}

export default App;
