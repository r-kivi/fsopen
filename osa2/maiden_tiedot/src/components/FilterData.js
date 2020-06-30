const FilterData = (data, term) => {
    const filtered = data.filter(element => {
        return element.name.toUpperCase().includes(term.toUpperCase())
    })
    return filtered
}

export default FilterData