import { Link, useParams } from "react-router-dom";

function Launch({ data }) {
  const { id } = useParams();
  const item = data.find((x) => x.flight_number === Number(id));
  return (
    <>
      <h2>Launch Details!</h2>
      {item && item.links.mission_patch ? (
        <img
          src={item.links.mission_patch}
          alt={`${item.mission_name} patch`}
          style={{ width: "200px" }}
        />
      ) : (
        "No patch"
      )}
      <h3>{item.mission_name}</h3>
      <p className="teenytiny heavier">{item.launch_date_utc}</p>
      <p>{item.details}</p>
      <p>
        Launch site:{" "}
        <span className="heavier">{item.launch_site.site_name_long}</span>
      </p>
      <iframe
        width="840"
        height="480"
        src={`https://www.youtube.com/embed/${item.links.youtube_id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p></p>
      <hr />
      <Link to="/launches">Back to Launches</Link>
    </>
  );
}

export default Launch;
