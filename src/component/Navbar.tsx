import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/movie">Movie Link</Link>{" "}
          </li>
          <li>
            <Link to="/person">Person Link</Link>{" "}
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;