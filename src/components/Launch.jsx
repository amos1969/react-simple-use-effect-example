import { Link, useParams } from "react-router-dom";

function Launch({ data }) {
  const { id } = useParams();
  const item = data.find((x) => x.flight_number === Number(id));


  const getOrdinal = (day) => {
    // Can almost certainly be refactored to make it nicer
    const theDay = Number(day);
    if (theDay === 1 || theDay === 11 || theDay === 21 || theDay === 31) {
      return "st";
    } else if (theDay === 2 || theDay === 12 || theDay == 22) {
      return "nd";
    } else if (theDay === 3 || theDay === 13 || theDay == 23) {
      return "rd";
    }
    return "th";
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateTimeFormat = new Intl.DateTimeFormat("en-GB", options);
    // There is almost certainly an easier way to do this
    const parts = dateTimeFormat.formatToParts(new Date(dateString));
    const day = parts[0].value;
    const month = parts[2].value;
    const year = parts[4].value;
    return `${day}${getOrdinal(day)} of ${month}, ${year}`;
  };

  return (
    <>
      <h2>Launch Details!</h2>
      {item && item.links?.patch.large ? (
        <img
          src={item.links.patch.large}
          alt={`${item.name} patch`}
          style={{ width: "200px", height: "200px" }}
        />
      ) : (
        "No patch"
      )}
      <h1>{item.name}</h1>
      <p className="teenytiny heavier">{formatDate(item.date_utc)}</p>
      <p>{item.details}</p>
      <p>
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
      </p>
      <hr />
      <Link to="/launches">Back to Launches</Link>

    </>
  );
}

export default Launch;
