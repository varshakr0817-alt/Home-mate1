import { useState } from "react";
import properties from "../data/properties";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

function Properties({
  favorites,
  toggleFavorite,
  compareList,
  toggleCompare,
}) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");

  // Filter properties
  const filteredProperties = properties.filter(
    (property) => {

      const searchMatch =
        property.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        property.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const typeMatch =
        type === "All" ||
        property.type === type;

      const bedroomMatch =
        bedrooms === "All" ||
        property.bedrooms >= Number(bedrooms);

      return (
        searchMatch &&
        typeMatch &&
        bedroomMatch
      );
    }
  );

  return (
    <div className="properties-page">

      <h1>Find Your Perfect Property</h1>

      <p className="page-description">
        Search and compare properties based
        on your requirements.
      </p>

      <SearchBar
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />

      <h2>
        {filteredProperties.length} Properties Found
      </h2>

      <div className="property-grid">

        {filteredProperties.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />

        ))}

      </div>

      {filteredProperties.length === 0 && (
        <p className="no-results">
          No properties found.
        </p>
      )}

    </div>
  );
}

export default Properties;