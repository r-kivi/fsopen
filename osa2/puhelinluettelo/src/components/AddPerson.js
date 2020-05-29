const AddPerson = (name, number, index, people) => {

    if(people.find(element => element.name === name)) {
        window.alert(`${name} is already added to phonebook`)
        return people
      }
  
      else {
        const person = {
            name: name,
            number: number,
            index: people.length
          }

        return people.concat(person)
      }
}

export default AddPerson