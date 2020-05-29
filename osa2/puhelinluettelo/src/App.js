import React, { useState, useEffect } from 'react'
import DisplayNames from './components/DisplayNames'
import AddPerson from './components/AddPerson'
import axios from 'axios'



const App = () => {
  const [ persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("fulfilled")
        setPersons(response.data)
      })
  }, [])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchTerm, setNewTerm ] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    setPersons(AddPerson(newName, newNumber, persons.length, persons))
  }

  const nameChanged = (event) => {
    console.log(event)
    setNewName(event.target.value)
  }

  const numberChanged = (event) => {
    setNewNumber(event.target.value)
  }

  const searchTermChanged = (event) => {
    setNewTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> 
          filter shown with<input onChange={searchTermChanged}/>
        </div>

      <h2>Add new</h2>
      </form>
      <form onSubmit={addNote}>
        <div> name: <input onChange={nameChanged}/> </div>
        <div> number: <input onChange={numberChanged} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul><DisplayNames people={persons} term={searchTerm}/></ul>
    </div>
  )

}

export default App
