import axios from 'axios';
import React, { useState } from 'react'

const AgePredictor = () => {

    const [data, setData] = useState(null);

    const handleData = (name) => {
        axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => setData(res.data))
    }

  return (
    <div>
        <h1>Predict your Age!</h1>
        <div>
            <input onChange={(event) => handleData(event.target.value)}placeholder="Enter your name here..."type="text" />
        </div>
        <div>
            <p>Your estimate age is ... <strong>{data?.age}</strong></p>
            <p>There are ... <strong>{data?.count}</strong> people with your name!</p>
        </div>
    </div>
  )
}

export default AgePredictor