const FilterNames = (people, term) => {
    console.log(term)
    if(term !== '') {
        term = term.toLowerCase()
        people = people.filter(person =>
           person.name.toLowerCase().includes(term))
        
      }
    return people
}

export default FilterNames