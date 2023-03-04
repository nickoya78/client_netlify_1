import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const baseUrl = "https://astounding-hummingbird-9c01bf.netlify.app/";

  useEffect(() => {
    fetch(`${baseUrl}/.netlify/functions/api`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <div className="App">
        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
