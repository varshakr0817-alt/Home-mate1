import CompareCard from "../components/CompareCard";
import { Link } from "react-router-dom";

function Compare({ compareList }) {

  if (compareList.length === 0) {

    return (
      <div className="empty-page">

        <h1>No Properties Selected</h1>

        <p>
          Go to the property page and select
          properties to compare.
        </p>

        <Link to="/properties">
          Browse Properties
        </Link>

      </div>
    );
  }

  // Find property with highest match score
  let bestProperty = compareList[0];

  compareList.forEach((property) => {

    if (
      property.matchScore >
      bestProperty.matchScore
    ) {
      bestProperty = property;
    }

  });

  return (
    <div className="compare-page">

      <h1>Compare Properties</h1>

      <p>
        Compare properties and make a better
        decision.
      </p>

      <div className="compare-container">

        {compareList.map((property) => (

          <CompareCard
            key={property.id}
            property={property}
          />

        ))}

      </div>


      <div className="recommendation">

        <h2>🏆 Our Recommendation</h2>

        <p>
          <strong>
            {bestProperty.name}
          </strong>{" "}
          has the highest match score of{" "}
          <strong>
            {bestProperty.matchScore}%
          </strong>
          .
        </p>

        <p>
          Based on our smart matching system,
          this may be the better choice.
        </p>

      </div>

    </div>
  );
}

export default Compare;