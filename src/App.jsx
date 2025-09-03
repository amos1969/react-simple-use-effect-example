import { createContext, useEffect, useState } from "react";

import "./App.css";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Storage from "./components/Storage";

const MyContext = createContext();

function App() {
  const url = "https://api.spacexdata.com/latest/launches";

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((launch) =>
      launch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <div className="container">
      <h1>SpaceX Launches</h1>

      <div className="container-nav-main">
        <nav className="sidebar">
          <Navigation />
        </nav>
        <main className="main">
          <MyContext.Provider value={ { data, searchTerm, filteredData, setSearchTerm } }>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/storage" element={<Storage /> } />
              <Route path="/launches" element={<Launches /> } />
              <Route path="/launches/:id" element={<Launch />} />
            </Routes>
          </MyContext.Provider>
        </main>
      </div>
    </div>
  );
}

export { App, MyContext };
