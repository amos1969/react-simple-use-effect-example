import { Link } from "react-router-dom";

function Navigation() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
        </ul>
      </div>
    );
}

export default Navigation;