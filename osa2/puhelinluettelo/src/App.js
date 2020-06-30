import React, { useState, useEffect } from 'react'
import DisplayNames from './components/DisplayNames'
import AddPerson from './components/AddPerson'
import Service from './services/noteService'



const App = () => {
  const [ persons, setPersons] = useState([])

  useEffect(() => {
    Service
      .getAll()
        .then(notes => {setPersons(notes)})


  }, [])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchTerm, setNewTerm ] = useState('')
  const [ notification, setNotification ] = useState(null)

  const addNote = (event) => {
    event.preventDefault()
    
    const [action, newPerson] = AddPerson(newName, newNumber, persons)
    if(action === 'a') {
      Service
        .create(newPerson)
          .then(response => {
            setPersons(persons.concat(response))

            setNotification(`Added ${newPerson.name}`)

            setTimeout(() => {
              setNotification(null)
            }, 5000) 
          })

          .catch(error => {
            setNotification(
              `the information of '${newPerson.name}' was already deleted from server`
            )
            setTimeout(() => {
              setNotification(null)
            }, 5000)
            setPersons(persons.filter(p => p.name !== newName))
          })
      
      
    }

    if(action === 'c') {
      Service
        .edit(newPerson)
        .then(response => {
          const copy = persons.filter(element => element.name !== newName)
          setPersons(copy.concat(newPerson))

          setNotification(`${newPerson.name} was added to server`)

          setTimeout(() => {
            setNotification(null)
          }, 5000) 
        })
        .catch(error => {
          setNotification(
            `the information of '${newPerson.name}' was already deleted from server`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          setPersons(persons.filter(p => p.name !== newName))
        })
    }

    setNewName('')
    setNewNumber('')
  }

  const removeName = (id, name) => {
    if(window.confirm(`Delete ${name}?`))
    {
      Service
      .remove(id)
        .then(response => {
          setPersons(persons.filter(element => element.id !== id))
        })
    }
    
  }

  const Notification = ({message}) => {
    if(message === null)
    {
      return null
    }

    else {
      return (
        <div className="error">
          {message}
        </div>
      )
    }
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
      <Notification message={notification} />
      </form>
      <form onSubmit={addNote}>
        <div> name: <input onChange={event => setNewName(event.target.value)} value={newName}/> </div>
        <div> number: <input onChange={event => setNewNumber(event.target.value)} value={newNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul><DisplayNames people={persons} term={searchTerm} func={removeName}/></ul>
    </div>
  )

}

export default App
