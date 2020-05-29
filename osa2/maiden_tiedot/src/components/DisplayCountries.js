import React from 'react';

const DisplayCountries = (props) => {
    return (
        props.data.map(element => {
            return (
                <li key={element.alpha2code}>{element.name}</li>
            )
            
        })
    )
}

export default DisplayCountries