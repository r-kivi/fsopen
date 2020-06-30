import React from 'react'
import GetWeather from './GetWeather'

const DisplaySingleCountry = (props) => {
    const lang = props.country.languages.map(element => (
        <li key={element.iso639_1}>{element.name}</li>
            )
        )
        
        return (
            <div>
            <h3>{props.country.name}</h3>
            <p>capital {props.country.capital}</p>
            <p>population {Number(props.country.population).toLocaleString()}</p>
            <h4>Languages</h4>
            <ul>{lang}</ul>
            <img src={props.country.flag} alt={"flag of" + props.country.name} height="100" border="2"/>
            <GetWeather city={props.country.capital}/>
            </div>
        )
}

export default DisplaySingleCountry