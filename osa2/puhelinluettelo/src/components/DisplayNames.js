import React from 'react'
import FilterNames from './FilterNames'

const handleClick = (id, name, func) => {
  func(id, name)
}

const DisplayNames = (props) => {
    let people = FilterNames(props.people, props.term)
  
    const info = people.map((element) => 
    <li key={element.id}>{element.name} {element.number} <button onClick={() => handleClick(element.id, element.name, props.func)}>remove</button></li>)
    return info
    
  }
export default DisplayNames