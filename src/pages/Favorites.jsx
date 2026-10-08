import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Favorites({
  favorites,
  toggleFavorite,
  compareList,
  toggleCompare,
}) {
  const savedProperties = properties.filter(
    (property) => favorites.includes(property.id)
  );

  return (
    <div className="properties-page">

      <h1>❤️ Saved Properties</h1>

      <p>
        Saved properties: {favorites.length}
      </p>

      {savedProperties.length === 0 ? (

        <div>
          <h2>No saved properties yet</h2>

          <p>
            Go to Properties and click 🤍 Save.
          </p>
        </div>

      ) : (

        <div className="property-grid">

          {savedProperties.map((property) => (
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

      )}

    </div>
  );
}

export default Favorites;