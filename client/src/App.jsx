import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://187.77.187.252:4000/api/message")
      .then((res) => res.json())
      .then((data) => setData(data?.message))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>Full Stack deployment in VPS</h1>
      <h2>{data}</h2>
    </div>
  );
};

export default App;
