import React from 'react';
import DisplaySingleCountry from './DisplaySingleCountry';

const DisplayCountries = (props) => {
    let content = []
    const HandleClick = (event, country) => {
        event.preventDefault()

        //Function that displays only the country in question
        props.func(country)
    }

    if(props.data.length > 10)
    {
        content = <div><p>Too many matches, specify
            another filter</p></div>
    }
    else if(props.data.length === 1)
    {
            content = <DisplaySingleCountry country={props.data[0]}/>
    }

    else {
        let i = 0
        content = props.data.map(element => {
            i++
            return (
                <li key={i}>{element.name} 
                <button onClick={e => HandleClick(e, element.name)}> show </button> </li>
            )
            
                
            
        })
    }

    return content
}

export default DisplayCountries