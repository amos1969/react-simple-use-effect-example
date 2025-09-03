import { useEffect, useState } from "react";

function Storage() {
  const [theToken, setTheToken] = useState("Unset");

  useEffect(() => {
    const initToken = localStorage.getItem("davesToken");
    if (initToken) {
      setTheToken(initToken);
    }
  }, []);
  return (
    <>
      <h2>Storage Example</h2>
      <p>Token value: {theToken}</p>
      <button
        onClick={() => {
          localStorage.setItem("davesToken", "Dave");
          setTheToken(localStorage.getItem("davesToken"));
        }}
      >
        Set Token to Dave
      </button>
      <button
        onClick={() => {
          localStorage.setItem("davesToken", "David");
          setTheToken(localStorage.getItem("davesToken"));
        }}
      >
        Set Token to David
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("davesToken");
          setTheToken(localStorage.getItem("davesToken"));
        }}
      >
        Clear Token
      </button>
    </>
  );
}

export default Storage;
