

import { Link } from "react-router-dom";

function PropertyCard({
  property,
  favorites,
  toggleFavorite,
  compareList,
  toggleCompare,
}) {
  const isFavorite =
    favorites.includes(property.id);

  const isCompared =
    compareList.some(
      (item) => item.id === property.id
    );

  return (
    <div className="property-card">

      <img
        src={property.image}
        alt={property.name}
      />

      <div className="property-content">

        <span className="property-type">
          {property.type}
        </span>

        <h3>{property.name}</h3>

        <p>📍 {property.location}</p>

        <h2>
          {property.type === "Rent"
            ? `₹${property.price.toLocaleString()}/month`
            : `₹${(
                property.price / 100000
              ).toFixed(1)} Lakhs`}
        </h2>

        <div className="property-info">
          <span>
            🛏 {property.bedrooms} Beds
          </span>

          <span>
            🚿 {property.bathrooms} Baths
          </span>

          <span>
            📐 {property.area} sqft
          </span>
        </div>

        <div className="match">
          🧠 {property.matchScore}% Match
        </div>

        <div className="card-buttons">

          <button
            onClick={() =>
              toggleFavorite(property.id)
            }
          >
            {isFavorite
              ? "❤️ Saved"
              : "🤍 Save"}
          </button>

          <button
            onClick={() =>
              toggleCompare(property)
            }
          >
            {isCompared
              ? "✓ Added"
              : "⚖️ Compare"}
          </button>

        </div>

        <Link
          to={`/property/${property.id}`}
          className="details-button"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default PropertyCard;