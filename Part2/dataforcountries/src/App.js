import React, { useState, useEffect } from "react"
import Form from "./Form";
import axios from "axios"
import Find from "./Find";

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState([])
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [country])

  const handleChange = (event) => {
    const patron = new RegExp(`${event.target.value}`, "i");
    const results = countries.filter(country => patron.test(country.name.common));
    if (event.target.value === "") {
      return setCountry([])
    }
    setCountry(results)
  }

  const onClickFn = (elem) => {
    return setCountry(elem)
  }

  return (
    <div>
      <Form fnCountry={handleChange} />
      <Find country={country} onClickFn={onClickFn} />
    </div>
  );
}

export default App;
