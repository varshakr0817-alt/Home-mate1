import { useState } from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {

  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const [downPayment, setDownPayment] =
    useState(1000000);

  const [years, setYears] = useState(20);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  // Simple EMI calculation
  const loan = property.price - downPayment;

  const emi = Math.round(
    loan / (years * 12)
  );

  return (
    <div className="details-page">

      <img
        src={property.image}
        alt={property.name}
        className="details-image"
      />

      <div className="details-content">

        <div className="details-left">

          <span className="property-type">
            {property.type}
          </span>

          <h1>{property.name}</h1>

          <p>
            📍 {property.location}
          </p>

          <h2 className="price">

            {property.type === "Rent"
              ? `₹${property.price.toLocaleString()}/month`
              : `₹${(property.price / 100000).toFixed(1)} Lakhs`}

          </h2>

          <div className="stats">

            <div>
              🛏
              <strong>
                {property.bedrooms}
              </strong>
              Bedrooms
            </div>

            <div>
              🚿
              <strong>
                {property.bathrooms}
              </strong>
              Bathrooms
            </div>

            <div>
              📐
              <strong>
                {property.area}
              </strong>
              sqft
            </div>

          </div>


          <h2>Amenities</h2>

          <div className="amenities">

            {property.amenities.map(
              (amenity) => (
                <span key={amenity}>
                  ✓ {amenity}
                </span>
              )
            )}

          </div>

        </div>


        <div className="smart-card">

          <h2>🧠 Smart Match</h2>

          <div className="big-score">
            {property.matchScore}%
          </div>

          <p>
            This property matches your
            requirements very well.
          </p>

          <p>
            ⭐ Rating: {property.rating}
          </p>

        </div>

      </div>


      {/* EMI CALCULATOR */}

      {property.type === "Buy" && (

        <div className="emi-box">

          <h2>🧮 EMI Calculator</h2>

          <label>
            Down Payment
          </label>

          <input
            type="number"
            value={downPayment}
            onChange={(e) =>
              setDownPayment(
                Number(e.target.value)
              )
            }
          />

          <label>
            Loan Duration
          </label>

          <select
            value={years}
            onChange={(e) =>
              setYears(
                Number(e.target.value)
              )
            }
          >
            <option value="10">
              10 Years
            </option>

            <option value="15">
              15 Years
            </option>

            <option value="20">
              20 Years
            </option>

            <option value="25">
              25 Years
            </option>
          </select>

          <h3>
            Estimated Monthly EMI:
          </h3>

          <div className="emi">
            ₹{emi.toLocaleString()}
          </div>

        </div>

      )}

    </div>
  );
}

export default PropertyDetails;