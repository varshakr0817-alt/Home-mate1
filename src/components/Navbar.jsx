import { Link } from "react-router-dom";

function Navbar({
  favoriteCount,
  compareCount,
}) {

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        🏠 HomeMatch
      </Link>

      {/* Navigation links */}
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/properties">
          Properties
        </Link>

        <Link to="/favorites">
          ❤️ Saved ({favoriteCount})
        </Link>

        <Link to="/compare">
          ⚖️ Compare ({compareCount})
        </Link>

        <Link to="/login">
          🔐 Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;