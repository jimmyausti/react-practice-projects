import axios from "axios";
import React, {useState} from "react";

const ExcuseGenerator = () => {
  const [excuse, setExcuse] = useState();

  const fetchExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
        .then((res) => setExcuse(res.data[0].excuse))
  }

  return (
    <div>
      <h1>Generate an Excuse for....</h1>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>
      <button onClick={() => fetchExcuse('party')}>Parties</button>
      <button onClick={() => fetchExcuse('college')}>College</button>
      <button onClick={() => fetchExcuse('unbelievable')}>Unbelievable</button>
      <p>Note: you can generate an excuse more than once!</p>
      <h3>{excuse}</h3>
    </div>
  );
};

export default ExcuseGenerator;
