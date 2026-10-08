import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <h1>Find Your Perfect Home</h1>

          <p>
            Search, compare and choose the right
            property for your lifestyle.
          </p>

          <Link
            to="/properties"
            className="hero-button"
          >
            Explore Properties
          </Link>

        </div>

      </section>


      <section className="why">

        <h2>Why Choose HomeMatch?</h2>

        <div className="features">

          <div className="feature">
            <div>🔍</div>
            <h3>Easy Search</h3>
            <p>
              Quickly find properties using
              simple filters.
            </p>
          </div>

          <div className="feature">
            <div>⚖️</div>
            <h3>Compare</h3>
            <p>
              Compare different properties
              side-by-side.
            </p>
          </div>

          <div className="feature">
            <div>❤️</div>
            <h3>Save Favorites</h3>
            <p>
              Save properties you like for
              later.
            </p>
          </div>

          <div className="feature">
            <div>🧠</div>
            <h3>Smart Matching</h3>
            <p>
              See how well a property matches
              your requirements.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;