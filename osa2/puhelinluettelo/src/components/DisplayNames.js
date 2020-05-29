import React from 'react'
import FilterNames from './FilterNames'

const DisplayNames = (props) => {
    let people = FilterNames(props.people, props.term)
  
    const info = people.map((element) => 
    <li key={element.id}>{element.name} {element.number}</li>)
    return info
    
  }
export default DisplayNames