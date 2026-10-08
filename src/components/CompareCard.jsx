function CompareCard({ property }) {
  return (
    <div className="compare-card">

      <img
        className="compare-image"
        src={property.image}
        alt={property.name}
      />

      <div className="compare-content">

        <h3>{property.name}</h3>

        <p>📍 {property.location}</p>

        <p>
          💰{" "}
          {property.type === "Rent"
            ? `₹${property.price.toLocaleString()}/month`
            : `₹${(property.price / 100000).toFixed(1)} Lakhs`}
        </p>

        <p>🛏 {property.bedrooms} Bedrooms</p>

        <p>🚿 {property.bathrooms} Bathrooms</p>

        <p>📐 {property.area} sqft</p>

        <p>⭐ {property.rating}</p>

        <p className="match">
          🧠 {property.matchScore}% Match
        </p>

      </div>

    </div>
  );
}

export default CompareCard;
