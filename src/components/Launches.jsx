import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";

function Launches() {
    const { searchTerm, setSearchTerm, filteredData } = useContext(MyContext)
    return (
      <>
        <h2>View Launches</h2>
        <input
          type="text"
          placeholder="Search mission name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
        />
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Flight</td>
              <td>Mission Name</td>
              <td>Launch Date (UTC)</td>
              <td>Details</td>
              <td>Launch Video</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((launch, index) => (
              <tr key={index}>
                <td>
                  {launch.links.patch.large ? (
                    <Link to={`/launches/${launch.flight_number}`}>
                      <img
                        src={launch.links.patch.large}
                        alt={`${launch.name} patch`}
                        style={{ width: "50px", height: "50px" }}
                        className="zoom-image"
                      />
                    </Link>
                  ) : (
                    "No patch"
                  )}
                </td>
                <td>{launch.flight_number}</td>
                <td>{launch.name}</td>
                <td>{launch.date_utc}</td>
                <td>{launch.details}</td>
                <td>
                  <a href={launch.links.webcast} target="_blank">
                    📹
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default Launches;