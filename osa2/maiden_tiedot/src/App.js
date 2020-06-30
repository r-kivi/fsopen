import React, { useState, useEffect } from 'react';
import './App.css';
import FilterData from './components/FilterData'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [data, setData] = useState([])
  const [origData, setOrig] = useState([])
  useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setData(response.data)
            setOrig(response.data)
        })
}, [])
  
  function ShowSingleCountry(name) {
    setData(FilterData(origData, name))
  }

  const HandleChangedTerm = (event) => {
    setData(FilterData(origData, event.target.value))
  }

  return (
    <div>
      <form>
        <div>
          find countries <input onChange={HandleChangedTerm} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}/>
        </div>
        <div>
          <DisplayCountries data={data} func={ShowSingleCountry}/>
        </div>
      </form>
    </div>
  )
}

export default App;
