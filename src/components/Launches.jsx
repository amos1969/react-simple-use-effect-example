import { Link } from "react-router-dom";

function Launches({ searchTerm, setSearchTerm, filteredData }) {

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
              <td>Launch Site</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((launch, index) => (
              <tr key={index}>
                <td>
                  {launch.links.mission_patch ? (
                    <Link to={`/launches/${launch.flight_number}`}>
                      <img
                        src={launch.links.mission_patch}
                        alt={`${launch.mission_name} patch`}
                        style={{ width: "50px", height: "50px" }}
                        className="zoom-image"
                      />
                    </Link>
                  ) : (
                    "No patch"
                  )}
                </td>
                <td>{launch.flight_number}</td>
                <td>{launch.mission_name}</td>
                <td>{launch.launch_date_utc}</td>
                <td>{launch.details}</td>
                <td>{launch.launch_site.site_name_long}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default Launches;