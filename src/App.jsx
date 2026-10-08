import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Favorites from "./pages/favorites";
import PropertyDetails from "./pages/PropertyDetails";
import Compare from "./pages/Compare";
import Login from "./pages/login";

import "./App.css";

function App() {

  const [favorites, setFavorites] = useState([]);
  const [compareList, setCompareList] = useState([]);

  // Save or remove a property
  function toggleFavorite(id) {

    if (favorites.includes(id)) {

      setFavorites(
        favorites.filter(
          (favoriteId) => favoriteId !== id
        )
      );

    } else {

      setFavorites([
        ...favorites,
        id,
      ]);

    }
  }

  // Add or remove property from compare
  function toggleCompare(property) {

    const alreadyAdded = compareList.some(
      (item) => item.id === property.id
    );

    if (alreadyAdded) {

      setCompareList(
        compareList.filter(
          (item) => item.id !== property.id
        )
      );

      return;
    }

    if (compareList.length === 2) {

      alert(
        "You can compare only 2 properties."
      );

      return;
    }

    setCompareList([
      ...compareList,
      property,
    ]);
  }

  return (
    <BrowserRouter>

      <Navbar
        favoriteCount={favorites.length}
        compareCount={compareList.length}
      />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Properties */}
        <Route
          path="/properties"
          element={
            <Properties
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              compareList={compareList}
              toggleCompare={toggleCompare}
            />
          }
        />

        {/* Saved Properties */}
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              compareList={compareList}
              toggleCompare={toggleCompare}
            />
          }
        />

        {/* Property Details */}
        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        {/* Compare */}
        <Route
          path="/compare"
          element={
            <Compare
              compareList={compareList}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;