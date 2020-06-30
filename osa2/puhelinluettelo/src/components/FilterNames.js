const FilterNames = (people, term) => {
    if(term !== '') {
        term = term.toLowerCase()
        people = people.filter(person =>
           person.name.toLowerCase().includes(term))
        
      }
    return people
}

export default FilterNames