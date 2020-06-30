function AddPerson(name, number, people){
    let action = 'a'
    let id = -1
    if(people.find(element => element.name === name)) {
        if(!window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`))
        {
          action = 'n'
        }

        else {
          action = 'c'
          for(let i = 0; i < people.length; i++)
          {
            if(people[i].name === name){
               id = people[i].id 
            }   
          }
        }
        
      }
    
      if(id === -1) id = people.length + 1

    const person = {
        name: name,
        number: number,
        id: id
      }

    return [action, person]
}

export default AddPerson