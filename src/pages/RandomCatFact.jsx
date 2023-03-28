import axios from "axios";
import React, { useState } from "react";

const RandomCatFact = () => {
  const [facts, setFacts] = useState([]);

  const generateFact = () => {
    axios.get('https://catfact.ninja/fact')
        .then((res) => setFacts(res.data))
  }


  return (
    <div>
      <h1>Random Cat Facts</h1>
      <button onClick={generateFact}>Generate a random fact!</button>
      <h3>{facts?.fact}</h3>
    </div>
  );
};

export default RandomCatFact;
